import React, { useState } from "react";
import "./NewsLetter.css";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await axios.post("http://localhost:4000/subscribe", {
        email,
      });

      if (response.data.success) {
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        alert(response.data.errors || "Failed to subscribe.");
      }
    } catch (error) {
      console.error("Error subscribing to the newsletter:", error);
      alert("An error occurred while subscribing.");
    }
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter & stay updated</p>
      <div>
        <input
          type="email"
          placeholder="Your Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
