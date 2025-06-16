import React, { useEffect, useState } from "react";

// Duration to show the splash screen in milliseconds (3 seconds)
const splashDuration = 3000;

export default function App() {
  // State to control whether splash screen or home page is shown
  const [showSplash, setShowSplash] = useState(true);

  // After splashDuration, hide splash screen and show home page
  useEffect(() => {
    console.log("Splash screen started");
    const timer = setTimeout(() => {
      console.log("Switching to Home Page");
      setShowSplash(false);
    }, splashDuration);
    return () => clearTimeout(timer); // Clean up timer if component unmounts
  }, []);

  return (
    <div className="app-container">
      {/* Conditionally render splash or home based on state */}
      {showSplash ? <SplashScreen /> : <HomePage />}
    </div>
  );
}

function SplashScreen() {
  return (
    <div className="splash-screen">
      {/* The glowing logo text for the splash screen */}
      <div className="logo-glow">AgriTech</div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to AgriTech</h1>
      <div className="features-grid">
        {/* Feature cards with emoji icons for simplicity */}
        <Feature icon="📍" label="Farmer Map" />
        <Feature icon="🌦️" label="Weather" />
        <Feature icon="🛒" label="Marketplace" />
        <Feature icon="📰" label="Industry News" />
        <Feature icon="👩‍🌾" label="Farmer Type" />
        <Feature icon="🐞" label="Pest Management" />
        <Feature icon="🏪" label="Nearby Inputs" />
      </div>
    </div>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="feature-card">
      {/* Icon representing the feature */}
      <div className="feature-icon">{icon}</div>
      {/* Text label below the icon */}
      <div className="feature-label">{label}</div>
    </div>
  );
}