# Option Strategies Strategy 6: The Carbon Copy - Synthetic Long & Arbitrage

What if you could own a stock or a future without actually buying it? What if you could build a "Synthetic" version that behaves exactly like the real thing but uses less capital? This is the **Synthetic Long.**

---

## 1. The Setup (Synthetic Long)

To replicate a long futures position, you need two legs at the **same strike** (ATM):

| Leg | Action | Strike |
| :--- | :--- | :--- |
| **Leg 1** | **Buy Call** | ATM (At-the-Money) |
| **Leg 2** | **Sell Put** | ATM (At-the-Money) |

**The Result:** Your P&L will now move in a straight line. If the stock goes up $10, you make $10. If it falls $10, you lose $10. It is a perfect **Carbon Copy** of the underlying asset.

---

## 2. Why Use This? (Arbitrage)

Traders use Synthetic Longs to find **Arbitrage** opportunities—the "holy grail" of risk-free profit.

According to **Put-Call Parity**, the price of a Future and its Synthetic counterpart should be the same. 
`Synthetic Price = Strike + Call Premium - Put Premium`

If the actual Future is trading at $7,316 but the Synthetic Long costs only $7,305...
1.  **Buy** the Synthetic Long (Cheap).
2.  **Sell** the actual Future (Expensive).
3.  **Lock in $11** of profit, regardless of where the market goes!

---

## 3. The Parity Scale

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- The Scale Base -->
    <path d="M 100 250 L 500 250" stroke="#34495e" stroke-width="4" />
    <path d="M 300 250 L 300 100" stroke="#34495e" stroke-width="4" />
    
    <!-- Balance Beam -->
    <line x1="150" y1="120" x2="450" y2="120" stroke="#7f8c8d" stroke-width="8" />
    
    <!-- Left Side (Synthetic) -->
    <rect x="160" y="70" width="80" height="50" fill="#3498db" rx="5" />
    <text x="200" y="100" font-family="Arial" font-size="12" fill="white" text-anchor="middle">SYNTHETIC</text>
    <text x="200" y="145" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">(Buy Call + Sell Put)</text>

    <!-- Right Side (Underlying) -->
    <rect x="360" y="70" width="80" height="50" fill="#2ecc71" rx="5" />
    <text x="400" y="100" font-family="Arial" font-size="12" fill="white" text-anchor="middle">ACTUAL</text>
    <text x="400" y="145" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">(Stock / Future)</text>

    <!-- Equilibrium Label -->
    <text x="300" y="50" font-family="Arial" font-size="14" fill="#2c3e50" font-weight="bold" text-anchor="middle">PUT-CALL PARITY</text>
  </svg>
</div>

---

## 4. The Practical Reality

While arbitrage sounds like "free money," you must watch out for:
1.  **Transaction Costs:** Brokerage, STT, and taxes can easily wipe out a 10-point arbitrage profit.
2.  **Dividends:** If the stock pays a dividend, the Put-Call Parity formula changes.
3.  **Liquidity:** Slippage when entering 3 different legs (Call, Put, Future) can kill the deal.

---

## Chapter Summary

- **Synthetic Long** = Buy ATM Call + Sell ATM Put.
- **Payoff:** Identical to owning the stock (Linear).
- **Arbitrage:** Spanning the gap between the synthetic and actual price.
- **Best for:** Low-risk traders and institutional desks.

Next Strategy: **Strategy 7 - The Bear Put Spread.**
