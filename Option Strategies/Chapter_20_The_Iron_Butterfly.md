# Option Strategies Strategy 20: The Bullseye - The Iron Butterfly

If the Iron Condor is a "Wide Fence," the **Iron Butterfly** is a "Single Post." It is the aggressive version of range-bound trading, designed for the trader who is highly confident that a stock will not move at all. It offers a much higher potential profit than an Iron Condor but with a narrower window of success.

---

## 1. The Setup

The Iron Butterfly combines a **Credit Put Spread** and a **Credit Call Spread** with the same short strike.

| Leg | Action | Strike |
| :--- | :--- | :--- |
| **Leg 1** | **Buy OTM Put** | Wing (Lower) |
| **Leg 2** | **Sell ATM Put** | Body (Center) |
| **Leg 3** | **Sell ATM Call** | Body (Center) |
| **Leg 4** | **Buy OTM Call** | Wing (Upper) |

**The Logic:** You are selling the "Straddle" (ATM Call & Put) and buying the "Strangle" (OTM Call & Put) as insurance.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Sell $7,500 Put & Call (ATM):** Receive $280 total premium
- **Buy $7,300 Put & $7,700 Call (Wings):** Pay $100 total premium
- **Net Credit (Max Profit):** $280 - $100 = **$180**

### The Outcomes:
1.  **The Bullseye (Expiry at $7,500):** Both ATM options expire worthless. You keep the entire credit.
    - **Max Profit:** **$180**.
2.  **The Miss (Outside $7,300 - $7,700):** The stock moves too far.
    - **Spread:** $200 (Difference between strikes).
    - **Max Loss:** $200 - $180 = **$20**.
    - **Risk/Reward:** You are risking $20 to make $180. That's a **9:1 reward-to-risk ratio!**
3.  **Breakevens:** $7,500 ± $180 = **$7,320** and **$7,680**.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="250" x2="550" y2="250" stroke="#34495e" stroke-width="2" />
    
    <!-- The Iron Butterfly Line -->
    <polyline points="50,280 150,280 300,50 450,280 550,280" fill="none" stroke="#e67e22" stroke-width="4" />

    <!-- Labels -->
    <circle cx="300" cy="50" r="6" fill="#2ecc71" />
    <text x="300" y="35" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">THE BULLSEYE ($180)</text>
    
    <text x="300" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">ATM Strike ($7,500)</text>
    <text x="150" y="300" font-family="Arial" font-size="10" fill="#c0392b" text-anchor="middle">Lower Wing ($7,300)</text>
    <text x="450" y="300" font-family="Arial" font-size="10" fill="#c0392b" text-anchor="middle">Upper Wing ($7,700)</text>

    <text x="100" y="270" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle">Max Loss: $20</text>
  </svg>
</div>

---

## 4. The Bullseye Strategy

1.  **High Probability of Small Gain:** Even if you miss the exact center, as long as you are within the breakevens, you make *something*.
2.  **The "Home Run" potential:** Most option strategies offer a 1:1 or 1:2 risk/reward. The Iron Butterfly is one of the few that offers a massive payoff for a tiny risk.
3.  **When to use:** Use this on stocks that have high implied volatility (expensive premiums) but are stuck in a tight consolidation pattern.

---

## Chapter Summary

- **Iron Butterfly** = Sell ATM Straddle + Buy OTM Strangle.
- **Goal:** Maximum profit from zero movement.
- **The Bullseye:** High-reward, low-risk, surgical precision.

Next Strategy: **Strategy 21 - The Calendar Spread.**
