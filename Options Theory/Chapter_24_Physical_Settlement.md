# Options Theory Chapter 24: The Delivery Truck - Physical Settlement

For most of the month, options are just paper contracts. But on the last Thursday of the month (Expiry Day), the "paper" can turn into actual stocks. In India, this is known as **Compulsory Physical Settlement.**

---

## 1. Paper vs. Reality

In the past, all options were "Cash Settled." You just paid or received the difference in money. Today, the rules for stocks like **Nova Energy (NVE)** have changed.

- **Indices (Nifty, BankNifty):** Still Cash Settled. No delivery.
- **Stocks (NVE, ZNP, etc.):** Physically Settled. You must move actual shares.

---

## 2. The ITM Rule

Physical settlement only happens if your option is **In-The-Money (ITM)** at the moment of expiry.

| Option Type | If ITM at Expiry... | Your Obligation |
| :--- | :--- | :--- |
| **Long Call** | You "Exercise" | You must **BUY** the shares from the seller. |
| **Short Call** | You are "Assigned" | You must **SELL** the shares to the buyer. |
| **Long Put** | You "Exercise" | You must **SELL** your shares to the buyer. |
| **Short Put** | You are "Assigned" | You must **BUY** the shares from the seller. |

**Important:** If your option is **OTM (Out-of-the-Money)**, it simply disappears (expires worthless). No delivery happens.

---

## 3. Visualizing the Decision Tree

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Start -->
    <rect x="250" y="20" width="100" height="40" fill="#34495e" rx="5" />
    <text x="300" y="45" font-family="Arial" font-size="12" fill="white" text-anchor="middle">EXPIRY DAY</text>
    
    <!-- Path 1: OTM -->
    <path d="M 250 40 L 100 100" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrow)" />
    <text x="130" y="60" font-family="Arial" font-size="11" fill="#7f8c8d">OTM</text>
    <rect x="50" y="100" width="100" height="40" fill="#ecf0f1" stroke="#bdc3c7" rx="5" />
    <text x="100" y="125" font-family="Arial" font-size="11" fill="#7f8c8d" text-anchor="middle">Expires Worthless</text>
    
    <!-- Path 2: ITM -->
    <path d="M 350 40 L 500 100" stroke="#e67e22" stroke-width="2" marker-end="url(#arrow)" />
    <text x="470" y="60" font-family="Arial" font-size="11" fill="#e67e22">ITM</text>
    <rect x="450" y="100" width="120" height="40" fill="#fdf2e9" stroke="#e67e22" rx="5" />
    <text x="510" y="125" font-family="Arial" font-size="11" fill="#e67e22" text-anchor="middle">Delivery Obligation</text>

    <!-- Branching ITM -->
    <path d="M 510 140 L 410 200" stroke="#e67e22" stroke-width="1" marker-end="url(#arrow)" />
    <text x="400" y="225" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Long Call / Short Put</text>
    <text x="400" y="245" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">TAKE DELIVERY (BUY)</text>

    <path d="M 510 140 L 550 200" stroke="#e67e22" stroke-width="1" marker-end="url(#arrow)" />
    <text x="550" y="225" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Short Call / Long Put</text>
    <text x="550" y="245" font-family="Arial" font-size="#e74c3c" text-anchor="middle" font-weight="bold">GIVE DELIVERY (SELL)</text>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#34495e" />
      </marker>
    </defs>
  </svg>
</div>

---

## 4. The Capital Trap

Physical delivery is not cheap. If you have an ITM Call for **NVE** worth $5,000,000 in total value, you must have $5,000,000 in cash in your account on expiry day. 

**Broker Safeguard:** Because most retail traders don't have millions in cash, brokers will:
1.  **Increase Margins:** Start demanding more money 4 days before expiry.
2.  **Square Off:** Automatically close your position if you don't have the cash.

**The Golden Rule:** If you don't intend to take or give physical delivery, **close your stock options before the last Wednesday of the month.**

---

## Chapter Summary

- Stock options in India are **Physically Settled.**
- Only **ITM** options result in delivery.
- **Buying/Shorting Puts** = Buying/Selling actual shares.
- Always close positions early to avoid high margin requirements.

We are at the finish line. The final chapter covers the "Scoreboard": **Chapter 25 - Options M2M and P&L.**
