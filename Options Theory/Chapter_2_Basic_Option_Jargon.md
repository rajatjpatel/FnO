# Options Theory Chapter 2: Option Jargon - Speaking the Language of Pros

In Chapter 1, we learned the "Sneaker Pre-Order" logic. But if you walk onto a trading floor and start talking about sneakers, people will look at you funny. To trade like a pro, you need to speak the language of the market.

Here are the 6 essential terms that form the **Anatomy of an Option.**

---

## 1. Strike Price (The Anchor)
The **Strike Price** is the fixed price at which the buyer has the right to buy the stock. 
- In our sneaker example, the **$1,000** price we agreed upon was the Strike.
- If you buy an **Apex Auto (AAU)** 500 Call, then **500** is your strike. No matter if the stock goes to 1,000, you still have the right to buy it at 500.

---

## 2. Underlying Price (The Reality)
This is simply the current market price of the stock (also called the **Spot Price**). 
- If you are looking at your screen and see AAU trading at **$485**, that is the Underlying Price. 
- The relationship between the Strike Price and the Underlying Price determines if your option is a "winner" or a "loser."

---

## 3. Option Premium (The Ticket Price)
The **Premium** is the non-refundable fee the buyer pays the seller. 
- This is the "cost of the choice." 
- Unlike a fixed ticket price, premiums change every second based on **Time** and **Volatility**. If the market gets excited, premiums go up. If time runs out, premiums decay.

---

## 4. Option Expiry (The Deadline)
Every option has a "Use By" date. In India, equity options expire on the **Last Thursday of every month.**
- If you don't use your right by the time the clock strikes zero on Expiry Day, your option becomes worthless. 
- You’ll often see **CE** (Call European) or **PE** (Put European). The "E" means you can only officially "exercise" the right on the final day, although you can trade the premium anytime before that.

---

## 5. Exercising (Claiming the Prize)
**Exercising** is the act of saying, *"I want my shares now!"*
- You only exercise if the stock price is **higher** than your strike price.
- If you have a 500 Strike Call and the stock is at 600, you exercise to "steal" the stock at 500.

---

## 6. The Option Chain (The Menu)
The **Option Chain** is a table that lists all available Strike Prices and their current Premiums. It’s like a restaurant menu for traders.

<div style="text-align: center; margin: 30px 0;">
  <svg width="500" height="200" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Header -->
    <rect x="50" y="20" width="400" height="40" fill="#2c3e50" rx="5" />
    <text x="125" y="45" font-family="Arial" font-size="14" font-weight="bold" fill="white" text-anchor="middle">CALL PREMIUM</text>
    <text x="250" y="45" font-family="Arial" font-size="14" font-weight="bold" fill="white" text-anchor="middle">STRIKE</text>
    <text x="375" y="45" font-family="Arial" font-size="14" font-weight="bold" fill="white" text-anchor="middle">PUT PREMIUM</text>
    
    <!-- Row 1 -->
    <rect x="50" y="65" width="400" height="35" fill="#f8f9fa" stroke="#ecf0f1" />
    <text x="125" y="88" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle">$15.50</text>
    <text x="250" y="88" font-family="Arial" font-size="12" font-weight="bold" fill="#2c3e50" text-anchor="middle">480</text>
    <text x="375" y="88" font-family="Arial" font-size="12" fill="#e74c3c" text-anchor="middle">$4.20</text>
    
    <!-- Row 2 (Current Market) -->
    <rect x="50" y="105" width="400" height="35" fill="#e8f8f5" stroke="#27ae60" stroke-width="1" />
    <text x="125" y="128" font-family="Arial" font-size="12" font-weight="bold" fill="#27ae60" text-anchor="middle">$10.20</text>
    <text x="250" y="128" font-family="Arial" font-size="12" font-weight="bold" fill="#2c3e50" text-anchor="middle">500 (ATM)</text>
    <text x="375" y="128" font-family="Arial" font-size="12" fill="#e74c3c" text-anchor="middle">$9.80</text>
    
    <!-- Row 3 -->
    <rect x="50" y="145" width="400" height="35" fill="#f8f9fa" stroke="#ecf0f1" />
    <text x="125" y="168" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle">$6.40</text>
    <text x="250" y="168" font-family="Arial" font-size="12" font-weight="bold" fill="#2c3e50" text-anchor="middle">520</text>
    <text x="375" y="168" font-family="Arial" font-size="12" fill="#e74c3c" text-anchor="middle">$14.10</text>
  </svg>
</div>

---

## Chapter Summary

-   **Strike Price** is your agreed buy/sell price.
-   **Underlying Price** is the current market reality.
-   **Premium** is the cost of the contract; it is volatile.
-   **Expiry** is the "End of the World" for that specific contract.
-   **Exercising** is claiming your profit at the end.
-   **The Option Chain** shows you all your choices in one place.

In the next chapter, we will go deeper into the mind of a buyer: **Buying a Call Option!**
