# Option Strategies Strategy 15: The Landlord - Covered Call

The **Covered Call** is the bread and butter of conservative long-term investors. It is the strategy of the "Landlord" who owns a property (the stock) and wants to collect rent (the premium) while waiting for the property value to appreciate.

---

## 1. The Setup

| Leg | Action | Description |
| :--- | :--- | :--- |
| **Leg 1** | **Buy Stock** | Own 100 shares of the underlying company. |
| **Leg 2** | **Sell 1 Call** | Sell 1 Call option (typically OTM) for every 100 shares. |

**The Logic:** You are already bullish on the stock. By selling a call option against it, you are saying: "I'm happy to sell my shares if they hit this higher price, but in the meantime, I'll take this cash premium as extra income."

---

## 2. The Payoff Math

Let's use **Apex Auto (AAU)** as our example.
- **Stock Purchase Price:** $2,500
- **Sell $2,600 Call (OTM):** Receive $50 premium
- **Net Cost Basis:** $2,500 - $50 = **$2,450**

### The Three Outcomes:
1.  **The Rally (Above $2,600):** Your shares are called away at $2,600.
    - **Profit:** ($2,600 - $2,500) + $50 = **$150**.
    - This is your **Maximum Profit**. You miss out on any gains above $2,600.
2.  **The Stagnation (At $2,500):** The stock doesn't move.
    - The call expires worthless. You keep the $50.
    - Your return is 2% ($50/$2,500) even though the stock did nothing.
3.  **The Slump (Below $2,450):** The stock drops.
    - You are protected down to $2,450 because of the $50 premium you received.
    - **Maximum Loss:** $2,450 (if the company goes bankrupt).

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis (Price) -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    <text x="550" y="220" font-family="Arial" font-size="12" text-anchor="end">AAU Stock Price</text>

    <!-- The Payoff Line -->
    <!-- Downside (Slope) -->
    <line x1="100" y1="280" x2="400" y2="100" stroke="#3498db" stroke-width="4" />
    <!-- Upside (Flat) -->
    <line x1="400" y1="100" x2="550" y2="100" stroke="#27ae60" stroke-width="4" />

    <!-- Labels -->
    <circle cx="400" cy="100" r="6" fill="#2ecc71" />
    <text x="400" y="85" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">MAX PROFIT ($150)</text>
    
    <text x="400" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike ($2,600)</text>
    <text x="250" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Purchase ($2,500)</text>
    
    <circle cx="225" cy="200" r="4" fill="#f1c40f" />
    <text x="215" y="195" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="end">B.E.P $2,450</text>
  </svg>
</div>

---

## 4. The Landlord Strategy

1.  **Yield Enhancement:** It turns a non-dividend stock into a "dividend" paying one.
2.  **Lowering the Basis:** Every time you sell a call, you effectively lower the price you paid for the stock.
3.  **The Trade-off:** You give up the "To the Moon" potential. If the stock jumps 20% in a week, you only keep the first few percent.

---

## Chapter Summary

- **Covered Call** = Long Stock + Short OTM Call.
- **Goal:** Income and slightly reduced cost basis.
- **The Landlord:** Collecting rent while the property sits.

Next Strategy: **Strategy 16 - Protective Put.**
