// components/StarsBackground.tsx
"use client";

import React from 'react';
import '../styles/stars-background.css';

export function StarsBackground() {
  return (
    <div className="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}