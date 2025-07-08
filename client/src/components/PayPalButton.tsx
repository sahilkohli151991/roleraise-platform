import React, { useEffect, useState } from 'react';

interface PayPalButtonProps {
  amount: string;
  currency: string;
  intent: string;
  id?: string;
}

// Global state to prevent multiple SDK loads
let paypalSDKLoaded = false;
let paypalSDKLoading = false;

export default function PayPalButton({
  amount,
  currency,
  intent,
  id = "paypal-button",
}: PayPalButtonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isConfigured, setIsConfigured] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    checkPayPalSetup();
  }, []);

  const checkPayPalSetup = async () => {
    try {
      const response = await fetch("/setup");
      if (response.ok) {
        const data = await response.json();
        if (data.clientToken) {
          setIsConfigured(true);
          loadPayPalSDK();
        } else {
          setError("PayPal not configured");
        }
      } else {
        setError("PayPal not available");
      }
    } catch (error) {
      setError("PayPal connection failed");
    } finally {
      setIsLoading(false);
    }
  };

  const loadPayPalSDK = async () => {
    if (paypalSDKLoaded) {
      await initPayPal();
      return;
    }

    if (paypalSDKLoading) {
      return;
    }

    paypalSDKLoading = true;

    try {
      const script = document.createElement("script");
      script.src = "https://www.sandbox.paypal.com/web-sdk/v6/core";
      script.async = true;
      script.onload = async () => {
        paypalSDKLoaded = true;
        paypalSDKLoading = false;
        await initPayPal();
      };
      script.onerror = () => {
        paypalSDKLoading = false;
        setError("PayPal SDK failed to load");
      };
      document.head.appendChild(script);
    } catch (error) {
      paypalSDKLoading = false;
      setError("PayPal SDK load error");
    }
  };

  const initPayPal = async () => {
    try {
      const response = await fetch("/setup");
      const data = await response.json();
      
      if (!data.clientToken) {
        throw new Error("No client token received");
      }

      const sdkInstance = await (window as any).paypal.createInstance({
        clientToken: data.clientToken,
        components: ["paypal-payments"],
      });

      const paypalCheckout = sdkInstance.createPayPalOneTimePaymentSession({
        onApprove: async (data: any) => {
          try {
            const response = await fetch(`/order/${data.orderId}/capture`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
            });
            const result = await response.json();
            console.log("Payment successful:", result);
            alert("Payment completed successfully! Thank you for enrolling in RoleRaise!");
          } catch (error) {
            console.error("Payment capture failed:", error);
            alert("Payment processing failed. Please try again.");
          }
        },
        onCancel: (data: any) => {
          console.log("Payment cancelled:", data);
          alert("Payment was cancelled. You can try again anytime.");
        },
        onError: (error: any) => {
          console.error("PayPal error:", error);
          alert("Payment error occurred. Please try again.");
        },
      });

      // Store the checkout instance for this button
      (window as any)[`paypalCheckout_${id}`] = paypalCheckout;
      setSdkReady(true);
    } catch (error) {
      console.error("PayPal initialization failed:", error);
      setError("PayPal initialization failed");
    }
  };

  const handlePayPalClick = async () => {
    try {
      const checkout = (window as any)[`paypalCheckout_${id}`];
      if (!checkout) {
        throw new Error("PayPal not ready");
      }

      // Create order
      const orderResponse = await fetch("/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency, intent }),
      });
      
      if (!orderResponse.ok) {
        throw new Error("Order creation failed");
      }
      
      const orderData = await orderResponse.json();
      
      // Start PayPal checkout
      await checkout.start(
        { paymentFlow: "auto" },
        Promise.resolve({ orderId: orderData.id })
      );
      
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initialization failed. Please try again.");
    }
  };

  if (isLoading || !sdkReady) {
    return (
      <button
        disabled
        className="w-full py-3 px-6 bg-gray-300 text-gray-600 font-semibold rounded-lg cursor-not-allowed"
      >
        {isLoading ? "Loading PayPal..." : "Preparing PayPal..."}
      </button>
    );
  }

  if (error || !isConfigured) {
    return (
      <button
        onClick={() => alert("PayPal is temporarily unavailable. Please contact support.")}
        className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        Enroll Now - ${parseInt(amount).toLocaleString()}
      </button>
    );
  }

  return (
    <button
      id={id}
      onClick={handlePayPalClick}
      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
    >
      Enroll Now - ${parseInt(amount).toLocaleString()}
    </button>
  );
}