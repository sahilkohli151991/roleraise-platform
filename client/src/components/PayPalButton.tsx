import React, { useState, useEffect } from 'react';

interface PayPalButtonProps {
  amount: string;
  currency: string;
  intent: string;
  id?: string;
}

export default function PayPalButton({
  amount,
  currency,
  intent,
  id = "paypal-button",
}: PayPalButtonProps) {
  const [isPayPalReady, setIsPayPalReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializePayPal();
  }, []);

  const initializePayPal = async () => {
    try {
      // Check if PayPal is already configured
      const setupResponse = await fetch('/setup');
      if (!setupResponse.ok) {
        throw new Error('PayPal not configured');
      }

      setIsPayPalReady(true);
    } catch (error) {
      console.error('PayPal initialization error:', error);
      setIsPayPalReady(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayPalClick = async () => {
    try {
      // Create PayPal order
      const orderResponse = await fetch('/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: currency,
          intent: intent,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create PayPal order');
      }

      const orderData = await orderResponse.json();
      
      // Redirect to PayPal for payment approval
      const approveLink = orderData.links.find((link: any) => link.rel === 'approve');
      if (approveLink) {
        window.location.href = approveLink.href;
      } else {
        throw new Error('No approval link found');
      }
    } catch (error) {
      console.error('PayPal payment error:', error);
      alert('Payment initialization failed. Please try again or contact support.');
    }
  };

  const handleFallbackClick = () => {
    // Fallback to Calendly booking
    window.open('https://calendly.com/kohlisahil151991', '_blank');
  };

  if (isLoading) {
    return (
      <button
        onClick={handleFallbackClick}
        className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        Loading...
      </button>
    );
  }

  if (isPayPalReady) {
    return (
      <button
        onClick={handlePayPalClick}
        className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        Pay with PayPal - ${parseInt(amount).toLocaleString()}
      </button>
    );
  }

  return (
    <button
      onClick={handleFallbackClick}
      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
    >
      Enroll Now - ${parseInt(amount).toLocaleString()}
    </button>
  );
}