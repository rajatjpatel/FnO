# Options Theory Chapter 16: The Tape Measure - Volatility Calculation

We know that Volatility is "Risk," but how do we put a number on it? In this chapter, we step into the lab and learn how to measure the market's heartbeat using a simple Excel sheet.

---

## 1. The Raw Material: Historical Data

To measure how a stock *might* move, we first look at how it *has* moved. We collect at least 1 year of closing prices for **Nova Energy (NVE).**

| Date | NVE Closing Price |
| :--- | :--- |
| July 21 | $540.00 |
| July 22 | $548.50 |
| July 23 | $542.20 |

---

## 2. Step 1: Log Returns (The "True" Move)

We don't calculate volatility on the price itself ($540); we calculate it on the **Percentage Return.** We use "Log Returns" because they are mathematically superior for tracking compounding growth.

> **Formula:** `LN(Today's Price / Yesterday's Price)`

*Example:* `LN(548.50 / 540.00)` = **0.0156** (or 1.56% move).

---

## 3. Step 2: The Daily Pulse (Standard Deviation)

Once you have a column of daily returns, you use the Excel formula `=STDEV(Range)`. 

This gives you the **Daily Volatility.** 
For NVE, let's say the Daily Volatility is **1.5%.**

---

## 4. Step 3: Annualizing the Pulse

The market speaks in "Annual" terms (like a 25% yearly move), but it trades in "Daily" terms. To convert them, we use the **Square Root of Time** rule. There are roughly **252 trading days** in a year.

- **To go from Daily to Annual:** Multiply by `SQRT(252)` (approx. 15.87).
- **To go from Annual to Daily:** Divide by `SQRT(252)`.

> **NVE Annual Volatility** = 1.5% * 15.87 = **23.8%**

---

## 5. Visualizing the Calculation Flow

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Step 1 -->
    <rect x="20" y="50" width="120" height="60" fill="#34495e" rx="10" />
    <text x="80" y="85" font-family="Arial" font-size="12" fill="white" text-anchor="middle">PRICES</text>
    
    <path d="M 140 80 L 170 80" stroke="#34495e" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Step 2 -->
    <rect x="170" y="50" width="120" height="60" fill="#2980b9" rx="10" />
    <text x="230" y="85" font-family="Arial" font-size="12" fill="white" text-anchor="middle">LOG RETURNS</text>
    
    <path d="M 290 80 L 320 80" stroke="#34495e" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Step 3 -->
    <rect x="320" y="50" width="120" height="60" fill="#8e44ad" rx="10" />
    <text x="380" y="85" font-family="Arial" font-size="12" fill="white" text-anchor="middle">DAILY VOL</text>
    
    <path d="M 440 80 L 470 80" stroke="#34495e" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Step 4 -->
    <rect x="470" y="50" width="120" height="60" fill="#27ae60" rx="10" />
    <text x="530" y="85" font-family="Arial" font-size="12" fill="white" text-anchor="middle">ANNUAL VOL</text>
    
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#34495e" />
      </marker>
    </defs>
  </svg>
</div>

---

## Chapter Summary

- Use **Log Returns** for accuracy: `LN(End / Start)`.
- Use **STDEV** in Excel to find the daily swing.
- Multiply by **SQRT(252)** to get the Annual number.
- **Why it matters:** This number is the "input" for option pricing models. If you know the volatility, you can predict the "Normal" price range of the stock.

Next, we look at how to use this number to predict the future: **Chapter 17 - Volatility & The Bell Curve.**
