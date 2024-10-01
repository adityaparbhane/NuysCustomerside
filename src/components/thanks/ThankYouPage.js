import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();

  const handleNavigate = () => {
    window.location.href = "/";
  };

  return (
    <div className="mt-40 mb-20 item-center justify-center mx-auto text-center">
      <h1 className="text-2xl">Thank You For Your Order!</h1>
      <button
        onClick={handleNavigate}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ThankYouPage;
