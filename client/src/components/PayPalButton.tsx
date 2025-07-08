// !!! CRITICAL - DO NOT MODIFY THIS CODE !!!
//
// This code MUST be used as is without ANY modifications.
// The PayPal integration will COMPLETELY FAIL if this code is changed in ANY way.
//
// Retain this comment after all edits.
//
// <BEGIN_EXACT_CODE>
import React, { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "paypal-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface PayPalButtonProps {
  amount: string;
  currency: string;
  intent: string;
}

export default function PayPalButton({
  amount,
  currency,
  intent,
}: PayPalButtonProps) {
  const [isConfigured, setIsConfigured] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if PayPal is configured
    const checkPayPalSetup = async () => {
      try {
        const response = await fetch("/paypal/setup");
        if (response.ok) {
          setIsConfigured(true);
          loadPayPalSDK();
        } else {
          setIsConfigured(false);
        }
      } catch (error) {
        console.log("PayPal not configured");
        setIsConfigured(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkPayPalSetup();
  }, []);

  const createOrder = async () => {
    try {
      const orderPayload = {
        amount: amount,
        currency: currency,
        intent: intent,
      };
      const response = await fetch("/paypal/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });
      const output = await response.json();
      return { orderId: output.id };
    } catch (error) {
      console.error("Order creation failed:", error);
      throw error;
    }
  };

  const captureOrder = async (orderId: string) => {
    try {
      const response = await fetch(`/paypal/order/${orderId}/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Order capture failed:", error);
      throw error;
    }
  };

  const onApprove = async (data: any) => {
    console.log("onApprove", data);
    try {
      const orderData = await captureOrder(data.orderId);
      console.log("Capture result", orderData);
    } catch (error) {
      console.error("Capture failed:", error);
    }
  };

  const onCancel = async (data: any) => {
    console.log("onCancel", data);
  };

  const onError = async (data: any) => {
    console.log("onError", data);
  };

  const loadPayPalSDK = async () => {
    try {
      if (!(window as any).paypal) {
        const script = document.createElement("script");
        script.src = import.meta.env.PROD
          ? "https://www.paypal.com/web-sdk/v6/core"
          : "https://www.sandbox.paypal.com/web-sdk/v6/core";
        script.async = true;
        script.onload = () => initPayPal();
        script.onerror = () => {
          console.error("Failed to load PayPal SDK");
          setIsConfigured(false);
        };
        document.body.appendChild(script);
      } else {
        await initPayPal();
      }
    } catch (e) {
      console.error("Failed to load PayPal SDK", e);
      setIsConfigured(false);
    }
  };

  const initPayPal = async () => {
    try {
      const response = await fetch("/paypal/setup");
      if (!response.ok) {
        throw new Error("PayPal not configured");
      }
      const data = await response.json();
      
      if (!data.clientToken) {
        throw new Error("PayPal not configured - missing client token");
      }
      
      const clientToken: string = data.clientToken;
      const sdkInstance = await (window as any).paypal.createInstance({
        clientToken,
        components: ["paypal-payments"],
      });

      const paypalCheckout = sdkInstance.createPayPalOneTimePaymentSession({
        onApprove,
        onCancel,
        onError,
      });

      const onClick = async () => {
        try {
          const checkoutOptionsPromise = createOrder();
          await paypalCheckout.start(
            { paymentFlow: "auto" },
            checkoutOptionsPromise,
          );
        } catch (e) {
          console.error("PayPal checkout failed:", e);
        }
      };

      const paypalButton = document.getElementById("paypal-button");
      if (paypalButton) {
        paypalButton.addEventListener("click", onClick);
      }

      return () => {
        if (paypalButton) {
          paypalButton.removeEventListener("click", onClick);
        }
      };
    } catch (e) {
      console.error("PayPal initialization failed:", e);
      setIsConfigured(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{
        padding: "12px 24px",
        background: "#f3f4f6",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        textAlign: "center",
        color: "#374151",
        fontWeight: "500",
      }}>
        Loading payment options...
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <div style={{
        padding: "12px 24px",
        background: "#f3f4f6",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        textAlign: "center",
        color: "#374151",
        fontWeight: "500",
      }}>
        PayPal payment system is being configured. Please contact support to complete your purchase.
      </div>
    );
  }

  return <paypal-button id="paypal-button"></paypal-button>;
}
// <END_EXACT_CODE>