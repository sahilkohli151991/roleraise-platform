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
          setIsLoading(false);
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

  const handlePayPalClick = async () => {
    try {
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
      
      // Simulate PayPal redirect for now
      alert(`PayPal order created successfully! Order ID: ${orderData.id}\n\nThis would normally redirect to PayPal checkout.`);
      
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initialization failed. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <button
        disabled
        className="w-full py-3 px-6 bg-gray-300 text-gray-600 font-semibold rounded-lg cursor-not-allowed"
      >
        Loading PayPal...
      </button>
    );
  }

  if (error || !isConfigured) {
    return (
      <button
        onClick={() => alert("PayPal is temporarily unavailable. Please contact support.")}
        className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        Pay with PayPal - ${parseInt(amount).toLocaleString()}
      </button>
    );
  }

  return (
    <button
      id={id}
      onClick={handlePayPalClick}
      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
    >
      Pay with PayPal - ${parseInt(amount).toLocaleString()}
    </button>
  );
}