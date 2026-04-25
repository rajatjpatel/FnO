# Option Strategies Chapter 23: The Simulation - Case Studies

Theory is comfortable, but the market is chaotic. In this chapter, we wrap up the module by looking at three real-world scenarios where professional traders apply the strategies we've learned. Welcome to **The Simulation**.

---

## Case Study 1: The Earnings Explosion (Long Straddle)

**Scenario:** Galaxy Tech (GTK) is reporting earnings tomorrow. The market expects a massive move, but nobody knows if it's up or down. IV is currently 45%.

- **The Trade:** Buy 1 ATM Call + Buy 1 ATM Put (Strategy 10).
- **The Result:** GTK reports a 12% revenue growth. The stock gaps up 8% at the open.
- **The Catch:** **IV Crush.** After the news is out, IV drops from 45% to 25%.
- **The Lesson:** Even though the stock moved 8%, the loss in "Vega" (IV) might eat all the profits from the "Delta" move. 
- **Pro Tip:** Always check if the expected move (priced in by the market) is smaller than what you expect.

---

## Case Study 2: The Sideways Squeeze (Iron Condor)

**Scenario:** Zenith Power (ZNP) has been trading in a tight range of $7,400 to $7,600 for three months. It's now 10 days to expiry.

- **The Trade:** Sell $7,400 Put, Buy $7,300 Put, Sell $7,600 Call, Buy $7,700 Call (Strategy 14).
- **The Result:** ZNP drifts slowly to $7,550.
- **The Benefit:** **Theta Decay.** Every day that ZNP doesn't move, the "time value" of the options you sold melts into your pocket.
- **The Lesson:** In range-bound markets, time is your best friend. The Iron Condor lets you get paid for ZNP's boredom.

---

## Case Study 3: The Hedged Recovery (Covered Call)

**Scenario:** You bought Apex Auto (AAU) at $2,500. The stock has fallen to $2,300, and you are "bag-holding." You think the stock will take months to recover.

- **The Trade:** Sell a $2,500 Call for $40 premium (Strategy 15).
- **The Result:** AAU stays flat at $2,300.
- **The Benefit:** You keep the $40. Your effective cost-basis is now $2,460.
- **The Lesson:** You can use options to "lower your rent" while you wait for a stock to recover. This is how professional portfolio managers reduce their "drawdown."

---

## Visualizing the Decision Tree

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Decision Node -->
    <rect x="250" y="20" width="100" height="40" fill="#34495e" rx="10" />
    <text x="300" y="45" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Market View?</text>
    
    <!-- Paths -->
    <line x1="300" y1="60" x2="100" y2="120" stroke="#34495e" stroke-width="2" />
    <line x1="300" y1="60" x2="300" y2="120" stroke="#34495e" stroke-width="2" />
    <line x1="300" y1="60" x2="500" y2="120" stroke="#34495e" stroke-width="2" />

    <!-- Choices -->
    <rect x="50" y="120" width="100" height="40" fill="#e74c3c" rx="5" />
    <text x="100" y="145" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Volatile</text>
    
    <rect x="250" y="120" width="100" height="40" fill="#f1c40f" rx="5" />
    <text x="300" y="145" font-family="Arial" font-size="12" fill="#2c3e50" text-anchor="middle">Neutral</text>
    
    <rect x="450" y="120" width="100" height="40" fill="#2ecc71" rx="5" />
    <text x="500" y="145" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Bullish</text>

    <!-- Strategies -->
    <text x="100" y="180" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Straddle / Strangle</text>
    <text x="300" y="180" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Iron Condor / Butterfly</text>
    <text x="500" y="180" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Bull Call Spread</text>
  </svg>
</div>

---

## Chapter Summary

- **Earnings:** Watch for the Vega trap.
- **Sideways:** Theta is your primary profit engine.
- **Bag-holding:** Covered calls can repair your portfolio.

Next Strategy: **Chapter 24 - Physical Settlement.**
