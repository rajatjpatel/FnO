# Option Strategies Chapter 24: The Handover - Physical Settlement

In the early days of Indian F&O, everything was settled in cash. You made a profit, you got cash. You made a loss, you paid cash. But since October 2019, the rules have changed. Now, we have **Physical Settlement**. This is the single most important rule to understand before holding a stock option into the final week of expiry.

---

## 1. What is Physical Settlement?

If you hold an **In-the-Money (ITM)** stock option at the time of expiry, you must settle the contract by exchanging actual shares, not just cash.

- **If you hold an ITM Call:** You must have the cash ready to **Buy** the entire lot of shares at the strike price.
- **If you hold an ITM Put:** You must have the **Shares** in your demat account to give them to the buyer.

**Note:** Index options (Nifty, Bank Nifty) are still settled in **Cash**. Physical settlement only applies to **Individual Stocks**.

---

## 2. The Margin Trap

Because the exchange wants to ensure you can actually fulfill the delivery, they increase margins significantly in the last few days of the month.

- **The Escalation:** Starting from the Friday before expiry, the margin requirement increases every day.
- **The Peak:** By Thursday (Expiry Day), you might need to have **100% of the contract value** in your account. 
- **Example:** If you hold 1 lot of Apex Auto (AAU) at $2,500 with a lot size of 100, the contract value is **$250,000**. You must have this cash ready if your option is ITM.

---

## 3. The Handover Workflow

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Expiry Timeline -->
    <line x1="50" y1="150" x2="550" y2="150" stroke="#34495e" stroke-width="2" />
    <circle cx="50" cy="150" r="5" fill="#3498db" />
    <text x="50" y="170" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Start of Month</text>
    
    <circle cx="400" cy="150" r="5" fill="#f39c12" />
    <text x="400" y="130" font-family="Arial" font-size="10" fill="#e67e22" text-anchor="middle" font-weight="bold">MARGINS RISE</text>
    <text x="400" y="170" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Last Friday</text>
    
    <circle cx="550" cy="150" r="5" fill="#e74c3c" />
    <text x="550" y="130" font-family="Arial" font-size="10" fill="#c0392b" text-anchor="middle" font-weight="bold">DELIVERY</text>
    <text x="550" y="170" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Thursday Expiry</text>

    <!-- The Action -->
    <rect x="100" y="30" width="150" height="40" fill="#2ecc71" rx="5" />
    <text x="175" y="55" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Close Position Early?</text>
    
    <line x1="175" y1="70" x2="400" y2="140" stroke="#2ecc71" stroke-width="2" stroke-dasharray="5,5" />
  </svg>
</div>

---

## 4. How to Avoid the "Handover"

Most retail traders should **NEVER** go into physical settlement. It is capital-intensive and carries the risk of "STT" (Securities Transaction Tax) traps.

1.  **Square Off Early:** Close your ITM positions by the Tuesday or Wednesday of expiry week.
2.  **Rollover:** If you still want to be in the trade, sell your current month's option and buy the next month's option.
3.  **Out-of-the-Money:** If your option is OTM, it expires worthless, and no delivery happens. But be careful—if the stock moves ITM in the final hour of trading, you are on the hook!

---

## Chapter Summary

- **Stocks = Physical:** ITM stock options require delivery of shares.
- **Indices = Cash:** Nifty/Bank Nifty remain cash-settled.
- **Margin:** Requirements skyrocket in the final week.
- **The Golden Rule:** Close your profitable ITM trades before the last Wednesday of the month.

**Congratulations! You have completed the Option Strategies Educational Series.**
