import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      {!paymentSuccess ? (
        <>
          <p>Enter payment details:</p>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiry Date" />
          <input type="text" placeholder="CVV" />
          <button onClick={handlePayment}>Pay Now</button>
        </>
      ) : (
        <p>Payment successful! Thank you for your purchase.</p>
      )}
      <br />
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default PaymentPage;
