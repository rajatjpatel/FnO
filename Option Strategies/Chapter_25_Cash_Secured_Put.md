# Option Strategies Strategy 25: The Anchor - Cash-Secured Put

The **Cash-Secured Put (CSP)** is the starting point for many professional income traders. It is the strategy of the "Patient Buyer"—you are effectively saying, "I want to buy this stock, but only if it falls to a certain price. And while I wait for that to happen, I want to get paid."

---

## 1. The Setup

| Action | Description | Requirement |
| :--- | :--- | :--- |
| **Sell OTM Put** | Choose a strike price where you would be happy to own the stock. | **Cash Collateral** |

**The Logic:** Unlike a "Naked Put," a Cash-Secured Put requires you to keep the full amount of cash needed to buy the shares in your account. This removes the risk of a margin call and turns the trade into a "Win-Win."

---

## 2. The Payoff Math

Let's use **Apex Auto (AAU)** at $2,500.
- **Goal:** You want to buy AAU at $2,400.
- **Trade:** Sell 1x $2,400 Put (Expiring in 30 days).
- **Premium Received:** $60.
- **Cash Required:** $2,400 (Strike) x 100 (Lot Size) = **$240,000**.

### The Two Outcomes:
1.  **The Stock Stays Above $2,400:**
    - The put expires worthless.
    - **Profit:** You keep the **$60 premium**.
    - **Yield:** $60 / $2,400 = **2.5% in one month** (approx. 30% annualized) on your idle cash.
2.  **The Stock Falls Below $2,400:**
    - You are "assigned" the shares. You must buy 100 shares at $2,400.
    - **The Benefit:** Your effective purchase price is $2,400 - $60 = **$2,340**.
    - You now own a stock you liked at a significant discount to its original price.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The CSP Line -->
    <!-- Downside (Ownership) -->
    <line x1="50" y1="280" x2="300" y2="150" stroke="#3498db" stroke-width="4" />
    <!-- Upside (Profit Cap) -->
    <line x1="300" y1="150" x2="550" y2="150" stroke="#27ae60" stroke-width="4" />

    <!-- Labels -->
    <rect x="300" y="150" width="250" height="50" fill="#2ecc71" opacity="0.1" />
    <text x="425" y="140" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">RENTAL INCOME ($60)</text>
    
    <text x="300" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike Price ($2,400)</text>
    
    <text x="120" y="240" font-family="Arial" font-size="11" fill="#2980b9" text-anchor="middle" transform="rotate(-30 120,240)">OWNERSHIP ZONE</text>
  </svg>
</div>

---

## 4. The Anchor Strategy

1.  **The Wheel Strategy:** The CSP is the first half of the famous "Wheel." Once you are assigned the stock, you begin selling **Covered Calls** (Strategy 15) against it. This creates a continuous cycle of income.
2.  **Beating the Bank:** Most savings accounts pay 3-5% per *year*. A well-placed CSP can pay 2-3% per *month*.
3.  **The Only Risk:** If the stock crashes to $0 (bankruptcy), you still have to buy it at $2,400. Only use this strategy on high-quality companies you wouldn't mind holding for 10 years.

---

## Chapter Summary

- **Cash-Secured Put** = Sell Put + Hold Cash Collateral.
- **Goal:** Buy stocks at a discount or earn high-yield income.
- **The Anchor:** A stable, high-probability foundation for any portfolio.

Next Strategy: **Strategy 26 - The Mirror - Covered Put.**
