# Options Theory Chapter 25: The Scoreboard - M2M & P&L

We've reached the final whistle. This chapter is about how you actually count the money at the end of the day. Is there a daily "score" (M2M) or only a final result (P&L)? The answer depends on which side of the trade you sit on.

---

## 1. Why is there no M2M for Buyers?

In Futures, cash moves from the loser's pocket to the winner's pocket every single day (Mark-to-Market). In Options, it’s different:

- **The Option Buyer:** You've already paid the full "ticket price" (premium) upfront. You can't lose more than that. Since your risk is capped, the exchange doesn't need to move cash every day to protect the seller. 
- **The Option Seller:** You are in a different boat. Since your risk is "unlimited," the exchange blocks **Margins** (SPAN + Exposure). If the market moves against you, your **Margin Requirement** goes up. You might get a "Margin Call" to add more funds, even if no cash is actually debited yet.

---

## 2. Calculating Your Profit (The Math)

### Scenario A: Squaring off BEFORE Expiry
This is the simplest math. It doesn't matter if you're buying or selling; the formula is the same:
`P&L = (Sell Price - Buy Price) * Lot Size`

> **Example:** You buy 1 lot of **Nova Energy (NVE)** $2,500 Call at $76. You sell it later at $106.
> `P&L = (106 - 76) * 250 = $7,500 Profit.`

---

### Scenario B: Holding UNTIL Expiry
If you hold to the end, the "Intrinsic Value" decides your fate.

| Position | Your Net Profit / Loss Formula |
| :--- | :--- |
| **Long Call** | `(Spot Price - Strike Price) - Premium Paid` |
| **Short Call** | `Premium Received - (Spot Price - Strike Price)` |
| **Long Put** | `(Strike Price - Spot Price) - Premium Paid` |
| **Short Put** | `Premium Received - (Strike Price - Spot Price)` |

---

## 3. Visualizing the P&L Zones

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Graph Axes -->
    <line x1="50" y1="250" x2="550" y2="250" stroke="#34495e" stroke-width="2" /> <!-- Price -->
    <line x1="50" y1="50" x2="50" y2="250" stroke="#34495e" stroke-width="2" /> <!-- P&L -->
    
    <!-- Long Call Payoff -->
    <path d="M 50 200 L 250 200 L 500 50" stroke="#27ae60" stroke-width="3" fill="none" />
    <text x="250" y="220" font-family="Arial" font-size="12" fill="#34495e" text-anchor="middle">Strike Price</text>
    <text x="500" y="40" font-family="Arial" font-size="12" fill="#27ae60" font-weight="bold">Profit Zone</text>
    <text x="100" y="220" font-family="Arial" font-size="12" fill="#e74c3c">Loss Zone (Premium)</text>

    <!-- Labels -->
    <text x="300" y="280" font-family="Arial" font-size="12" text-anchor="middle">Stock Price at Expiry</text>
    <text x="30" y="150" font-family="Arial" font-size="12" transform="rotate(-90 30,150)" text-anchor="middle">P&L ($)</text>
  </svg>
</div>

---

## 4. The Margin Call (For Sellers Only)

If you sell/write an option, the broker keeps an eye on your "Margin Utilization."
- If the **Premium** rises (Price moves against you)...
- ...or if **Volatility** shoots up...
- ...the broker will demand more margin. 

If your account falls below the required level, the broker will **Square Off** your position automatically to protect themselves. This is the only "M2M-like" experience in options.

---

## Final Summary of Module 5

You have mastered the most complex instrument in the financial markets. 
1.  **Direction** is the beginning (Delta).
2.  **Speed** is the accelerator (Gamma).
3.  **Time** is the thief (Theta).
4.  **Fear** is the expander (Vega).

You are no longer a gambler; you are an **Options Engineer.**

---

**End of Module 5: Options Theory**
