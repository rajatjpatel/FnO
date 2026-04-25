# Option Strategies Strategy 42: The Option Lab - Synthetic Masterclass

In this chapter, we complete your training in the "Option Lab." We've touched on synthetics before, but here we provide the full periodic table of synthetic relationships. For every single position in the market, there is a synthetic twin that can be built using different components.

---

## 1. The Full Synthetic Table

| If you want to mimic a... | Use these components |
| :--- | :--- |
| **Long Stock** | **Buy Call + Sell Put** (Same Strike) |
| **Short Stock** | **Buy Put + Sell Call** (Same Strike) |
| **Long Call** | **Long Stock + Long Put** |
| **Short Call** | **Short Stock + Short Put** |
| **Long Put** | **Short Stock + Long Call** |
| **Short Put** | **Long Stock + Short Call** |

---

## 2. Why are these "Secret Twins" important?

1.  **Liquidity Arbitrage:** If the spread on a Put is $0.50 but the spread on a Call + Stock is $0.05, you build the synthetic.
2.  **Borrowing Costs:** Shorting stocks involves paying interest to borrow the shares. Buying a synthetic short stock (Buy Put + Sell Call) allows you to bypass these borrow fees.
3.  **Dividend Capture:** Synthetics allow you to stay in a position during a dividend payout without the "Automatic Price Drop" affecting you in the same way as a stock holder.

---

## 3. The Synthetic Relationship Web

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <!-- Nodes -->
    <circle cx="300" cy="50" r="40" fill="#3498db" />
    <text x="300" y="55" font-family="Arial" font-size="12" fill="white" text-anchor="middle">STOCK</text>
    
    <circle cx="100" cy="300" r="40" fill="#2ecc71" />
    <text x="100" y="305" font-family="Arial" font-size="12" fill="white" text-anchor="middle">CALL</text>
    
    <circle cx="500" cy="300" r="40" fill="#e74c3c" />
    <text x="500" y="305" font-family="Arial" font-size="12" fill="white" text-anchor="middle">PUT</text>

    <!-- Relationships -->
    <line x1="140" y1="280" x2="260" y2="80" stroke="#34495e" stroke-width="2" />
    <text x="170" y="180" font-family="Arial" font-size="10" fill="#34495e" transform="rotate(-60 170,180)">Stock - Put = Call</text>

    <line x1="340" y1="80" x2="460" y2="280" stroke="#34495e" stroke-width="2" />
    <text x="430" y="180" font-family="Arial" font-size="10" fill="#34495e" transform="rotate(60 430,180)">Stock - Call = Put</text>

    <line x1="140" y1="300" x2="460" y2="300" stroke="#34495e" stroke-width="2" />
    <text x="300" y="320" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Call - Put = Stock</text>
  </svg>
</div>

---

## 4. The Lab Technician's Rule: Interest & Dividends

Synthetics are "Pure Math," but the real world has friction.
- **Interest Rates (Rho):** In a high-interest environment, calls become more expensive and puts become cheaper. This shifts the "Synthetic Price."
- **Dividends:** When a stock pays a dividend, the synthetic stock price will drop. You must calculate the **Net Present Value (NPV)** of the dividend to ensure your synthetic is priced correctly.

---

## Chapter Summary

- **Put-Call Parity** is the bedrock of all option pricing.
- **Synthetics** allow you to create any payoff using different tools.
- **Goal:** Perfect efficiency and cost management in your trading lab.

Next Strategy: **Strategy 43 - The Power Spread - Double Bull/Bear Spreads.**
