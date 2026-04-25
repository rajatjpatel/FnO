# Option Strategies Strategy 45: The Inverse Peak - Short Put Butterfly

The **Short Put Butterfly** is the "Long Volatility" equivalent of the standard butterfly. While most traders use calls for breakouts, the Short Put Butterfly is a tactical masterpiece used when there is a significant "Downside Skew"—meaning the market is more afraid of a crash than a rally.

---

## 1. The Setup

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1 (Wing)** | **Sell 1 Put** | Higher (A) | 1 |
| **Leg 2 (Body)** | **Buy 2 Puts** | Middle (B) | 2 |
| **Leg 3 (Wing)** | **Sell 1 Put** | Lower (C) | 1 |

**The Logic:** You receive a **Net Credit** upfront. You want the stock to move sharply so that the position either expires worthless (Profit) or both spreads are fully in-the-money (Profit).

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Strike A ($7,600):** Sell 1 Put for $160
- **Strike B ($7,500):** Buy 2 Puts for $75 each (Pay $150)
- **Strike C ($7,400):** Sell 1 Put for $30
- **Net Credit (Max Profit):** ($160 + $30) - $150 = **$40**

### The Three Outcomes:
1.  **The Crater (Expiry at $7,500):**
    - The $7,600 Put you sold is worth $100.
    - Your long $7,500 Puts expire worthless.
    - **Max Loss:** $100 (Payout) - $40 (Credit) = **$60**.
2.  **The Safety Zones (Above $7,600 or Below $7,400):**
    - The options cancel each other out or expire worthless.
    - **Max Profit:** You keep the initial **$40 Credit**.
3.  **The Breakevens:** $7,440 and $7,560.

---

## 3. Payoff Visualization

The Short Put Butterfly creates an "Inverse Peak" or "Crater" payoff.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="100" x2="550" y2="100" stroke="#34495e" stroke-width="2" />
    
    <!-- The Short Butterfly Line -->
    <polyline points="50,70 150,70 300,250 450,70 550,70" fill="none" stroke="#9b59b6" stroke-width="4" />

    <!-- Labels -->
    <circle cx="300" cy="250" r="6" fill="#c0392b" />
    <text x="300" y="275" font-family="Arial" font-size="12" fill="#c0392b" text-anchor="middle" font-weight="bold">THE CRATER (MAX LOSS $60)</text>
    
    <text x="150" y="55" font-family="Arial" font-size="11" fill="#27ae60" text-anchor="middle">PROFIT ($40)</text>
    <text x="450" y="55" font-family="Arial" font-size="11" fill="#27ae60" text-anchor="middle">PROFIT ($40)</text>

    <text x="300" y="90" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">7,500 Strike</text>
  </svg>
</div>

---

## 4. The Inverse Peak Strategy

1.  **Credit Collection:** Unlike the Straddle, which requires you to pay money, the Short Put Butterfly gives you money upfront. This makes it an excellent "Income" strategy during volatile periods.
2.  **Directional Neutrality:** You don't need to know *where* the stock is going, just that it won't stay *here*.
3.  **The Downside Edge:** Because puts are often more liquid than calls during a crash, this strategy can be easier to exit than a call-based breakout strategy.

---

## Chapter Summary

- **Short Put Butterfly** = 1 Short ITM Put + 2 Long ATM Puts + 1 Short OTM Put.
- **Goal:** Profit from a breakout using the Put chain.
- **The Inverse Peak:** Collecting credit while betting on chaos.

Next Strategy: **Strategy 46 - The Time Squeeze - Short Calendar Spreads.**
