# Option Strategies Strategy 36: The Flying Machine - Seagull Spread

The **Seagull Spread** is a sophisticated three-legged strategy that allows you to take a directional bet with **zero upfront cost**. It is a favorite of institutional traders and currency hedgers who want upside participation but don't want to pay a premium.

---

## 1. The Setup (Bullish Seagull)

| Leg | Action | Strike | Description |
| :--- | :--- | :--- | :--- |
| **Leg 1** | **Sell OTM Put** | Lowest (C) | The Anchor (Financing). |
| **Leg 2** | **Buy ATM Call** | Middle (A) | The Wings (Upside). |
| **Leg 3** | **Sell OTM Call** | Highest (B) | The Cap (Cost reduction). |

**The Logic:** You sell a Put to pay for a Bull Call Spread. If the stock stays flat or goes up, you paid $0 for the trade. If it goes up a lot, you hit your profit cap. If it crashes, you are forced to buy the stock at Strike C.

---

## 2. The Payoff Math

Let's use **Apex Auto (AAU)** at $2,500.
- **Sell $2,300 Put:** Receive $50
- **Buy $2,500 Call:** Pay $80
- **Sell $2,700 Call:** Receive $30
- **Net Cost:** ($80) - $50 - $30 = **$0 (Zero Cost!)**

### The Outcomes:
1.  **The Flight (Between $2,500 and $2,700):**
    - The stock rises. Your Bull Call Spread starts making money.
    - **Max Profit:** $200 (Spread) - $0 (Cost) = **$200**.
2.  **The Glide (Between $2,300 and $2,500):**
    - All options expire worthless. You lose nothing and make nothing.
3.  **The Anchor (Below $2,300):**
    - You are forced to buy AAU at $2,300.
    - **Risk:** Significant downside ownership risk.

---

## 3. Payoff Visualization

The Seagull payoff looks like a bird in flight—a flat body with a sloped wing and a heavy tail.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Seagull Line -->
    <!-- Tail (Downside Risk) -->
    <line x1="50" y1="280" x2="200" y2="200" stroke="#e74c3c" stroke-width="4" />
    <!-- Body (Flat/Zero) -->
    <line x1="200" y1="200" x2="350" y2="200" stroke="#34495e" stroke-width="4" />
    <!-- Wing (Spread) -->
    <line x1="350" y1="200" x2="450" y2="100" stroke="#2ecc71" stroke-width="4" />
    <!-- Tip (Plateau) -->
    <line x1="450" y1="100" x2="550" y2="100" stroke="#27ae60" stroke-width="6" />

    <!-- Labels -->
    <text x="500" y="80" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">MAX PROFIT ($200)</text>
    <text x="200" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Put Strike ($2,300)</text>
    <text x="350" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Long Call ($2,500)</text>
    <text x="120" y="240" font-family="Arial" font-size="10" fill="#c0392b" text-anchor="middle" transform="rotate(-30 120,240)">ANCHOR RISK</text>
  </svg>
</div>

---

## 4. The Flying Machine Strategy

1.  **Free Upside:** This is one of the few ways to get a "Free Ride" on a bullish move. You only pay if the stock crashes.
2.  **Hedging Tool:** Companies often use Seagulls to protect their currency exposure for zero cost.
3.  **The Catch:** You must be comfortable owning the stock at the lower strike. This is not a "risk-free" trade; it's a "cost-free" trade.

---

## Chapter Summary

- **Seagull** = Bull Call Spread + Short OTM Put.
- **Goal:** Zero-cost directional bet with capped profit.
- **The Flying Machine:** Trading cost for ownership risk.

Next Strategy: **Strategy 37 - The Hidden Edge - Long Put Condor.**
