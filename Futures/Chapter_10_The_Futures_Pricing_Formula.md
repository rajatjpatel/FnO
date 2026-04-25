# Chapter 10: The Futures Pricing Formula - The Math Behind the Curtain

By now, you've noticed that the price of a Future is almost never the same as the price of the stock in the regular market (Spot). 

Why is **Nifty Spot** at $18,000 while **Nifty Future** is at $18,050? Is it just random guessing? No. There is a precise mathematical formula that determines exactly what a future "should" cost. This is called the **Fair Value**.

---

## 1. The "Cost of Carry" Logic

To understand the math, you have to understand the **Opportunity Cost**.

Imagine you have $10,000. You have two choices:
1.  **Buy the Stock now:** You spend the $10,000. You own the stock, and you get any **Dividends** it pays.
2.  **Buy the Future:** You only pay a small margin (say $2,000). You keep the other **$8,000 in the bank** earning interest.

Because the person buying the Future gets to keep their cash in the bank and earn interest, the market "charges" them for that benefit by making the Future slightly more expensive than the Spot price.

---

## 2. The Formula (The Pricing Bridge)

The standard formula for calculating the **Fair Value** of a future is:

$$Futures Price = Spot Price \times [1 + (rf \times \frac{x}{365})] - Dividends$$

-   **rf (Risk-Free Rate):** The interest rate you’d get from a safe bank or government bond.
-   **x:** The number of days left until the contract expires.
-   **Dividends:** Any cash the company pays to shareholders before the expiry date. (Since the Future holder doesn't get dividends, they get a "discount" in the price).

---

## 3. Premium vs. Discount (Contango & Backwardation)

-   **Contango (Premium):** This is the normal state. Futures are **Higher** than Spot. It reflects the interest you earn on your saved cash.
-   **Backwardation (Discount):** This is rare. Futures are **Lower** than Spot. This usually happens when there is a massive shortage of the physical stock or a huge dividend is expected.

---

## 4. The Golden Rule: Convergence

No matter how large the gap (the "Basis") is today, there is one rule that never breaks: **On the day of expiry, the Futures Price and the Spot Price must become exactly the same.**

Think of it like a bungee jumper (the Future) attached to a bridge (the Spot). They might bounce up and down, but at the end of the day, they meet at the same point.

<div style="text-align: center; margin: 30px 0;">
  <svg width="500" height="250" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
    <!-- Time Axis -->
    <line x1="50" y1="200" x2="450" y2="200" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowhead)" />
    <text x="450" y="225" font-family="Arial" font-size="12" text-anchor="end">Time to Expiry</text>
    
    <!-- Price Axis -->
    <line x1="50" y1="200" x2="50" y2="50" stroke="#2c3e50" stroke-width="2" />
    
    <!-- Spot Line (Static-ish) -->
    <path d="M 50 150 Q 250 140, 450 150" fill="none" stroke="#7f8c8d" stroke-width="3" stroke-dasharray="5,5" />
    <text x="60" y="140" font-family="Arial" font-size="14" fill="#7f8c8d">Spot Price</text>
    
    <!-- Future Line (Converging) -->
    <path d="M 50 80 Q 250 120, 450 150" fill="none" stroke="#3498db" stroke-width="4" />
    <text x="60" y="70" font-family="Arial" font-size="14" font-weight="bold" fill="#3498db">Futures Price (Premium)</text>
    
    <!-- Convergence Point -->
    <circle cx="450" cy="150" r="6" fill="#e74c3c" />
    <text x="450" y="135" font-family="Arial" font-size="12" font-weight="bold" fill="#e74c3c" text-anchor="middle">THE MEETING (EXPIRY)</text>
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50" />
      </marker>
    </defs>
  </svg>
</div>

---

## 5. Arbitrage: The Risk-Free Trade

If the math gets "broken" and the Future price is way too high compared to the Fair Value, professional traders step in for an **Arbitrage** trade:

1.  **The Spot:** They buy the stock in the regular market.
2.  **The Future:** They simultaneously sell (short) the "expensive" future.
3.  **The Result:** Because they know the two prices *must* meet on expiry day, they lock in the difference as a risk-free profit.

---

## Chapter Summary

-   **Fair Value** is the "correct" mathematical price of a future.
-   The price difference exists because of **Interest Rates** and **Dividends**.
-   **Contango** means the market is behaving normally (Future > Spot).
-   **Convergence** ensures the gap closes to zero on the final day.
-   **Arbitrage** is the act of profiting from "broken" math in the market prices.

In the next chapter, we will learn how to use these tools to protect your portfolio: **Hedging with Futures!**
