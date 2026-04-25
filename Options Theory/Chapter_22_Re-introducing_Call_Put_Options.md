# Options Theory Chapter 22: The Chemical Formula - Re-introducing Calls & Puts

Now that you've mastered the Greeks, a Call option is no longer just a "bet on the stock going up." It is a chemical mixture of Delta, Gamma, Theta, and Vega. To win, you must pick the right formula for your specific timeline.

---

## 1. The Strategy Matrix

Choosing a strike depends on two questions: **Where** are we in the expiry series? and **How fast** will the move happen?

### Part A: Early in the Series (First 15 Days)
| Expected Move Speed | Best Strike to Buy | Logic |
| :--- | :--- | :--- |
| **Lightning Fast (1-2 Days)** | **Far OTM** | Gamma is your friend; leverage is massive. |
| **Moderate (15 Days)** | **ATM / Slight OTM** | Balance between Delta and Theta decay. |
| **Slow (25 Days)** | **ITM Only** | OTM options will be eaten alive by Theta. |

### Part B: Late in the Series (Last 15 Days)
| Expected Move Speed | Best Strike to Buy | Logic |
| :--- | :--- | :--- |
| **Instant (Same Day)** | **Far OTM** | Lottery ticket; zero time for Theta to act. |
| **Moderate (5 Days)** | **ATM / Slight ITM** | Theta is at its peak; OTM is too risky. |
| **At Expiry** | **Deep ITM** | Anything else will likely expire at $0. |

---

## 2. Visualizing the Profitability Shift

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Graph 1: Fast Move (Leverage) -->
    <rect x="50" y="50" width="220" height="100" fill="#f8f9fa" stroke="#3498db" stroke-width="1" />
    <text x="160" y="40" font-family="Arial" font-size="12" fill="#2980b9" text-anchor="middle" font-weight="bold">FAST MOVE (1-2 Days)</text>
    <rect x="70" y="130" width="30" height="15" fill="#3498db" opacity="0.3" /> <!-- ITM -->
    <rect x="145" y="100" width="30" height="45" fill="#3498db" opacity="0.6" /> <!-- ATM -->
    <rect x="220" y="60" width="30" height="85" fill="#3498db" /> <!-- OTM -->
    <text x="160" y="165" font-family="Arial" font-size="10" text-anchor="middle">OTM Wins via Leverage</text>

    <!-- Graph 2: Slow Move (Time Decay) -->
    <rect x="330" y="50" width="220" height="100" fill="#f8f9fa" stroke="#e74c3c" stroke-width="1" />
    <text x="440" y="40" font-family="Arial" font-size="12" fill="#c0392b" text-anchor="middle" font-weight="bold">SLOW MOVE (20+ Days)</text>
    <rect x="350" y="70" width="30" height="75" fill="#e74c3c" /> <!-- ITM -->
    <rect x="425" y="110" width="30" height="35" fill="#e74c3c" opacity="0.6" /> <!-- ATM -->
    <rect x="500" y="145" width="30" height="15" fill="#e74c3c" opacity="0.3" /> <!-- OTM -->
    <text x="440" y="165" font-family="Arial" font-size="10" text-anchor="middle">ITM Wins via Delta</text>

    <text x="300" y="220" font-family="Arial" font-size="12" fill="#34495e" text-anchor="middle">Bars represent Profit Potential</text>
  </svg>
</div>

---

## 3. The "Cheap Premium" Trap

New traders often buy **OTM Calls** because they are "cheap" (e.g., $5 vs $50 for ITM). 
- If **Neo-Phone (NEO)** moves 4% in 2 days, that $5 Call might become $15 (200% gain).
- If NEO moves 4% in 20 days, that $5 Call will likely become $0.10 (**98% loss**).

Cheap premiums are a death sentence if you don't have **Velocity** on your side.

---

## 4. Summary: The Final Check

Before you press "Buy":
1.  **Check Volatility:** Is it low and likely to rise? (Buy) Is it high and likely to fall? (Wait or Sell).
2.  **Check the Calendar:** How many days to expiry? 
3.  **Check your Target Speed:** If the target is hit slowly, buy ITM. If the target is hit instantly, buy OTM.

---

## Chapter Summary

- Option selection is a dynamic game of **Time vs. Speed.**
- **OTM** = High speed, low probability (The Sprint).
- **ITM** = Slow speed, high probability (The Marathon).
- Never buy OTM options close to expiry for a long-term target.

We've finished the theory. Now, let's look at real-world examples: **Chapter 23 - Case Studies.**
