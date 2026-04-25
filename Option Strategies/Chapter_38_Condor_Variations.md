# Option Strategies Strategy 38: The Double Barrier - Condor Variations

The **Condor** is the most flexible of the range-bound strategies. While we've seen the Call Condor, professional traders also use **Put Condors** and **Short Condors** to express more nuanced views on volatility. These are the "Double Barriers" of the options world.

---

## 1. The Setup (Long Put Condor)

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1 (Wing)** | **Buy 1 Put** | Lower (A) | 1 |
| **Leg 2 (Body)** | **Sell 1 Put** | Middle-Low (B) | 1 |
| **Leg 3 (Body)** | **Sell 1 Put** | Middle-High (C) | 1 |
| **Leg 4 (Wing)** | **Buy 1 Put** | Higher (D) | 1 |

**The Logic:** You are betting the stock will be between B and C. This is identical to the Call Condor but often easier to execute if the stock is already falling toward your target range.

---

## 2. The Inversion: The Short Condor

A **Short Condor** is for the trader who says: "This stock is about to leave this range, and I don't care if it goes up or down."

- **The Trade:** Sell the Wings (A & D) and Buy the Body (B & C).
- **Max Profit:** The Net Credit received. You win if the stock moves **Outside** the range A-D.
- **Max Loss:** The difference between the strikes minus the credit.

---

## 3. Payoff Visualization (Short Condor)

The Short Condor creates a "Valley with a Flat Bottom."

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="100" x2="550" y2="100" stroke="#34495e" stroke-width="2" />
    
    <!-- The Short Condor Line -->
    <polyline points="50,70 150,70 250,200 350,200 450,70 550,70" fill="none" stroke="#e74c3c" stroke-width="4" />

    <!-- Labels -->
    <rect x="250" y="200" width="100" height="10" fill="#c0392b" opacity="0.3" />
    <text x="300" y="230" font-family="Arial" font-size="12" fill="#c0392b" text-anchor="middle" font-weight="bold">MAX LOSS ZONE (STAGNATION)</text>
    
    <text x="100" y="60" font-family="Arial" font-size="11" fill="#27ae60" text-anchor="middle">MAX PROFIT</text>
    <text x="500" y="60" font-family="Arial" font-size="11" fill="#27ae60" text-anchor="middle">MAX PROFIT</text>
  </svg>
</div>

---

## 4. The Double Barrier Strategy

1.  **Lower Volatility Risk:** Because a Condor has a wide body, you are less susceptible to "Vega" (Volatility) changes than you are with a Butterfly.
2.  **Credit vs Debit:** Short Condors are "Credit" strategies. You get paid upfront. Long Condors are "Debit" strategies. You pay to play.
3.  **When to use:** Use Long Put Condors when you are bearish but expect a floor. Use Short Condors when you expect a news event (like a merger or lawsuit) to move the stock out of its current base.

---

## Chapter Summary

- **Long Put Condor** = Bet on a range using Puts.
- **Short Condor** = Bet on a breakout using Calls or Puts.
- **The Double Barrier:** Secure boundaries for your trading capital.

Next Strategy: **Strategy 39 - Time Inversion - Calendar Variants.**
