# Options Theory Chapter 20: The Combined Force - Greek Interactions

In the lab, we study Greeks one by one. In the market, they all attack at once. Understanding how they interact is the difference between a "lucky" trade and a professional one.

---

## 1. The Volatility Smile

Theoretically, every option strike for **Nova Energy (NVE)** should have the same Implied Volatility (IV). In reality, the market is paranoid. 
- **ATM Options** usually have the lowest IV.
- **OTM Options** (both high and low) have higher IVs because people buy them as lottery tickets or insurance.

When you plot Strike vs. IV, it forms a **"Smile."** 

---

## 2. Gamma vs. Time: The Final Countdown

Gamma is the most dangerous Greek near expiry.
- **ATM Options:** As time runs out, their Gamma **explodes.** A small move in NVE can cause a massive swing in the Delta of an ATM option.
- **OTM/ITM Options:** Their Gamma collapses to zero. They either become "worthless" or "purely directional."

**The Golden Rule:** Never be short an At-The-Money (ATM) option on expiry day unless you enjoy extreme stress.

---

## 3. Visualizing the Interaction

### The Volatility Smile
<div style="text-align: center; margin: 20px 0;">
  <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 50 Q 200 180, 350 50" stroke="#9b59b6" stroke-width="4" fill="none" />
    <line x1="50" y1="180" x2="350" y2="180" stroke="#34495e" stroke-width="2" />
    <text x="200" y="195" font-family="Arial" font-size="12" text-anchor="middle">Strike Price →</text>
    <text x="200" y="150" font-family="Arial" font-size="11" fill="#8e44ad" text-anchor="middle">ATM (Lowest IV)</text>
    <text x="50" y="40" font-family="Arial" font-size="11" fill="#8e44ad">OTM Put</text>
    <text x="350" y="40" font-family="Arial" font-size="11" fill="#8e44ad" text-anchor="end">OTM Call</text>
  </svg>
</div>

### Gamma's Expiry Spike
<div style="text-align: center; margin: 20px 0;">
  <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <!-- ATM Curve -->
    <path d="M 50 150 Q 350 145, 380 20" stroke="#e74c3c" stroke-width="4" fill="none" />
    <text x="300" y="50" font-family="Arial" font-size="11" fill="#e74c3c">ATM Gamma (Exploding)</text>
    
    <!-- OTM/ITM Curve -->
    <path d="M 50 100 Q 300 110, 380 170" stroke="#3498db" stroke-width="2" fill="none" />
    <text x="200" y="140" font-family="Arial" font-size="11" fill="#3498db">OTM/ITM Gamma (Dying)</text>

    <line x1="50" y1="180" x2="380" y2="180" stroke="#34495e" stroke-width="2" />
    <text x="215" y="195" font-family="Arial" font-size="12" text-anchor="middle">Time to Expiry → (Right is Close)</text>
  </svg>
</div>

---

## 4. Delta vs. Volatility

Why do deep OTM options sometimes have a price that seems "too high"?
- When **IV is low**, Delta for OTM options is almost zero. They are truly worthless.
- When **IV is high**, the Delta of OTM options stays alive. The market thinks, "Hey, with this much volatility, maybe it *could* reach that strike!"

This is why 10% OTM options can trade for a "respectable" price during a crisis.

---

## 5. The Volatility Cone

Professional traders use the **Volatility Cone** to see if current IV is abnormal.
- If current IV is near the **top** of the cone (+2 SD), options are "Costly." (Good for Sellers).
- If current IV is near the **bottom** (-2 SD), options are "Cheap." (Good for Buyers).

---

## Chapter Summary

- **Volatility Smile:** OTM options are more "expensive" in IV terms than ATM ones.
- **Gamma Spike:** ATM Gamma becomes a monster on expiry day.
- **Delta/Vol Interaction:** High IV keeps OTM options "alive."
- **The Cone:** A reality check for current volatility.

We've covered the "What" and the "How." Now, it's time to put it all into a single machine: **Chapter 21 - The Greek Calculator.**
