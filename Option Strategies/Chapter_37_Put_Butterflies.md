# Option Strategies Strategy 37: The Put Mirror - Put Butterflies

A **Butterfly** is usually built with Calls (Strategy 18), but it can be built with Puts just as effectively. The **Put Butterfly** is the "Mirror" version, often used when Puts are more liquid or when there is a specific volatility skew in the downside.

---

## 1. The Setup (Long Put Butterfly)

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1 (Wing)** | **Buy 1 Put** | Higher Strike (A) | 1 |
| **Leg 2 (Body)** | **Sell 2 Puts** | Middle Strike (B) | 2 |
| **Leg 3 (Wing)** | **Buy 1 Put** | Lower Strike (C) | 1 |

**The Logic:** You are betting that the stock will be "pinned" to the Middle Strike (B) at expiration. It is identical in payoff to the Call Butterfly, but it uses the Put side of the chain.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Strike A ($7,600):** Buy 1 Put for $160
- **Strike B ($7,500):** Sell 2 Puts for $75 each (Receive $150)
- **Strike C ($7,400):** Buy 1 Put for $30
- **Net Debit (Max Risk):** ($160 + $30) - $150 = **$40**

### The Three Outcomes:
1.  **The Pin (Expiry at $7,500):**
    - The $7,600 Put is worth $100.
    - The $7,500 and $7,400 Puts expire worthless.
    - **Max Profit:** $100 (Value) - $40 (Cost) = **$60**.
2.  **The Escape (Above $7,600 or Below $7,400):**
    - All options cancel each other out.
    - **Max Loss:** Your initial **$40**.
3.  **Short Put Butterfly:** The inverse (Sell the wings, Buy the body). You receive a credit and win if the stock **moves away** from Strike B.

---

## 3. Payoff Visualization

The Put Butterfly creates the same "Mountain Peak" as the Call Butterfly.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="250" x2="550" y2="250" stroke="#34495e" stroke-width="2" />
    
    <!-- The Butterfly Line -->
    <polyline points="50,250 150,250 300,50 450,250 550,250" fill="none" stroke="#9b59b6" stroke-width="4" />

    <!-- Labels -->
    <circle cx="300" cy="50" r="6" fill="#27ae60" />
    <text x="300" y="35" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">MAX PROFIT PEAK</text>
    
    <text x="300" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike B ($7,500)</text>
    <text x="150" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike C ($7,400)</text>
    <text x="450" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike A ($7,600)</text>
  </svg>
</div>

---

## 4. Why use Puts instead of Calls?

1.  **Arbitrage:** Sometimes the Put Butterfly is slightly cheaper than the Call Butterfly due to the interest rate or dividend pricing.
2.  **Psychology:** Traders who are "Bearish" but expect a floor often find it more intuitive to work with Puts.
3.  **Liquidity:** In many stocks, deep OTM Puts have more volume than deep OTM Calls, leading to tighter spreads.

---

## Chapter Summary

- **Put Butterfly** = Long ITM Put + Short 2 ATM Puts + Long OTM Put.
- **Goal:** Profit from a range-bound market using the Put chain.
- **The Put Mirror:** A symmetrical alternative to the standard butterfly.

Next Strategy: **Strategy 38 - The Double Barrier - Condor Variations.**
