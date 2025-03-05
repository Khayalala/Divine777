import React, { useState, useEffect } from "react";
import "../styles/AngelNumbers.css";

const numbers = {
  111: "You are in perfect alignment with the Universe. Your thoughts are manifesting rapidly — stay positive and focused on your desires.",
  
  222: "Balance is key right now. Trust that everything is unfolding in divine timing — ground yourself and believe in the process.",
  
  333: "Your angels and spirit guides are right beside you. They are encouraging you to express your true self and step into your power.",
  
  444: "You are divinely protected and deeply supported by the angelic realm. Release any fears and walk forward with courage.",
  
  555: "A powerful transformation is underway. Embrace change with an open heart — your soul is evolving into its next chapter.",
  
  666: "Your angels gently remind you to find harmony between your material desires and spiritual path. Reconnect to your higher purpose.",
  
  777: "You are exactly where you are meant to be. Trust the path, for divine wisdom and blessings are guiding your every step.",
  
  888: "Abundance flows to you effortlessly. Trust that financial, emotional, and spiritual prosperity is aligning in your favor.",
  
  999: "A profound cycle is coming to a close. Release the old with gratitude — a beautiful new beginning awaits.",
};

const AngelNumbers = () => {
  const [numberOfTheDay, setNumberOfTheDay] = useState("");

  useEffect(() => {
    const storedNumber = localStorage.getItem("angelNumberOfTheDay");
    const storedDate = localStorage.getItem("angelNumberDate");

    const today = new Date().toISOString().slice(0, 10); 

    if (storedNumber && storedDate === today) {
      setNumberOfTheDay(storedNumber);
    } else {
      const keys = Object.keys(numbers);
      const randomNumber = keys[Math.floor(Math.random() * keys.length)];

      setNumberOfTheDay(randomNumber);

      localStorage.setItem("angelNumberOfTheDay", randomNumber);
      localStorage.setItem("angelNumberDate", today);
    }
  }, []);

  return (
    <section id="angel-numbers" className="angel-numbers-section">
      <h2 className="section-title">✨ Angel Numbers ✨</h2>

      <div className="number-of-the-day">
        <h3>🌟 Angel Number of the Day: {numberOfTheDay}</h3>
        <p>{numbers[numberOfTheDay]}</p>
      </div>

      <div className="numbers-grid">
        {Object.entries(numbers).map(([number, meaning]) => (
          <div className="number-card" key={number}>
            <h4>{number}</h4>
            <p className="number-meaning">{meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AngelNumbers;
