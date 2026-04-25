# Option Strategies Strategy 29: The Escape Artist - Long Iron Butterfly

The **Long Iron Butterfly** is the "Long Volatility" equivalent of the Iron Condor. While the Short version (Strategy 20) bets on stability, the Long version bets on a **Breakout**. It is a combination of a **Bull Put Spread** and a **Bear Call Spread**, where you pay a net debit to profit from a massive move in either direction.

---

## 1. The Setup

| Leg | Action | Strike |
| :--- | :--- | :--- |
| **Leg 1** | **Sell OTM Put** | Wing (Lower) |
| **Leg 2** | **Buy ATM Put** | Body (Center) |
| **Leg 3** | **Buy ATM Call** | Body (Center) |
| **Leg 4** | **Sell OTM Call** | Wing (Upper) |

**The Logic:** You are buying the "Straddle" (ATM) and selling the "Strangle" (OTM) to make the trade cheaper. You want the stock to "Escape" the center.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Buy $7,500 Put & Call (ATM):** Pay $280 total premium
- **Sell $7,300 Put & $7,700 Call (Wings):** Receive $100 total premium
- **Net Debit (Max Risk):** $280 - $100 = **$180**

### The Outcomes:
1.  **The Escape (Above $7,700 or Below $7,300):**
    - One of your long options is deep ITM, and the short option caps the gain.
    - **Spread Width:** $200.
    - **Max Profit:** $200 - $180 = **$20**.
2.  **The Trap (Expiry at $7,500):**
    - Both ATM options expire worthless. You lose the entire debit.
    - **Max Loss:** **$180**.
3.  **The Risk/Reward Reality:** This strategy is rarely used because the risk ($180) is much higher than the reward ($20). It is essentially a "Cheap" way to bet on an extreme 10-sigma event.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="100" x2="550" y2="100" stroke="#34495e" stroke-width="2" />
    
    <!-- The Long Iron Butterfly Line -->
    <polyline points="50,70 150,70 300,250 450,70 550,70" fill="none" stroke="#3498db" stroke-width="4" />

    <!-- Labels -->
    <circle cx="300" cy="250" r="6" fill="#c0392b" />
    <text x="300" y="275" font-family="Arial" font-size="12" fill="#c0392b" text-anchor="middle" font-weight="bold">THE TRAP (MAX LOSS $180)</text>
    
    <text x="300" y="90" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">ATM Strike ($7,500)</text>
    <text x="50" y="55" font-family="Arial" font-size="11" fill="#27ae60" text-anchor="start">ESCAPE ZONE (+$20)</text>
  </svg>
</div>

---

## 4. The Escape Artist Strategy

1.  **Why use it?** If you think a stock will gap 10% but you can't afford a $500 Straddle, the Long Iron Butterfly lets you play for $180.
2.  **The Probability Problem:** Because you only win at the extremes, the "Probability of Profit" is low.
3.  **Managing the Trade:** Professional traders often exit this trade *before* expiration if volatility spikes, rather than waiting for the stock to reach the wings.

---

## Chapter Summary

- **Long Iron Butterfly** = Buy ATM Straddle + Sell OTM Strangle.
- **Goal:** Profit from an extreme breakout.
- **The Escape Artist:** Cheap but low-probability volatility bet.

Next Strategy: **Strategy 30 - The Double Guard - Long Call Condor.**
Wait, I already did Long Condor in 27. I will check the list again.

Next Strategy: **Strategy 30 - The Collector - Covered Combination (Strangle).**
