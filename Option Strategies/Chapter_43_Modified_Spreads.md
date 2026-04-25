# Option Strategies Strategy 43: The Staircase - Modified Spreads

The **Modified Spread** (specifically the Double Bull/Bear Spread) is for the trader who wants to capture a directional move across a wide range but doesn't want to rely on a single strike price. By "layering" or "staircasing" your spreads, you create a more resilient profit profile that adapts to different market levels.

---

## 1. The Setup (Double Bull Call Spread)

You combine two Bull Call Spreads (Strategy 4) at different strike levels.

| Spread 1 | Spread 2 |
| :--- | :--- |
| Buy $100 Call / Sell $105 Call | Buy $110 Call / Sell $115 Call |

**The Logic:** You are creating a "Staircase" of profit. If the stock reaches $105, you make your first profit. If it continues to $115, you make your second profit. This is safer than buying one large $100-$115 spread because you reach your first "Maximum Profit" level much earlier.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Spread A (7,400/7,500):** Cost $40 (Max Profit $60)
- **Spread B (7,600/7,700):** Cost $20 (Max Profit $80)
- **Total Initial Cost:** **$60**

### The Three Outcomes:
1.  **The First Landing (At $7,500):**
    - Spread A is fully profitable ($60 profit).
    - Spread B expires worthless (-$20 loss).
    - **Total Net Profit:** $60 - $20 = **$40**.
2.  **The Second Landing (At $7,700):**
    - Both spreads are fully profitable.
    - **Total Net Profit:** $40 (Spread A) + $80 (Spread B) = **$120**.
3.  **The Crash (Below $7,400):**
    - Both spreads expire worthless.
    - **Max Loss:** Your entire **$60** investment.

---

## 3. Payoff Visualization

The Staircase payoff shows two distinct levels of profit.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Staircase Line -->
    <!-- Loss -->
    <line x1="50" y1="250" x2="150" y2="250" stroke="#e74c3c" stroke-width="4" />
    <!-- First Slope -->
    <line x1="150" y1="250" x2="250" y2="150" stroke="#3498db" stroke-width="4" />
    <!-- First Landing -->
    <line x1="250" y1="150" x2="350" y2="150" stroke="#2ecc71" stroke-width="4" />
    <!-- Second Slope -->
    <line x1="350" y1="150" x2="450" y2="50" stroke="#3498db" stroke-width="4" />
    <!-- Second Landing -->
    <line x1="450" y1="50" x2="550" y2="50" stroke="#27ae60" stroke-width="6" />

    <!-- Labels -->
    <text x="300" y="140" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">FIRST PROFIT TIER</text>
    <text x="500" y="40" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle" font-weight="bold">SECOND PROFIT TIER</text>
    
    <text x="150" y="270" font-family="Arial" font-size="9" fill="#34495e" text-anchor="middle">Strike 7,400</text>
    <text x="450" y="220" font-family="Arial" font-size="9" fill="#34495e" text-anchor="middle">Strike 7,600</text>
  </svg>
</div>

---

## 4. The Staircase Strategy

1.  **Risk Mitigation:** By splitting your position into tiers, you ensure that you don't need a "Home Run" to make money. You can be "Half-Right" and still walk away with a profit.
2.  **Psychology:** It is easier to hold a position when you see the first tier of profit locked in. It reduces the stress of the "All-or-Nothing" single spread.
3.  **Liquidity:** If you have a large position, splitting it across different strikes can help you get filled without moving the market price against you.

---

## Chapter Summary

- **Modified Spread** = Layering multiple vertical spreads at different strikes.
- **Goal:** Scaled, resilient profit across a wide price range.
- **The Staircase:** Building profit level by level.

Next Strategy: **Strategy 44 - The Zero Gamma - Reverse Iron Butterfly.**
