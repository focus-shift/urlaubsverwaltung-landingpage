const DISCOUNT = 0.25; // 25% discount for yearly payment during promotion period
const PRICE_PER_USER_UV = 2;
const PRICE_PER_USER_ZE = 2;


document.addEventListener('DOMContentLoaded', function () {
  const userInput = document.getElementById('price-user-count');
  const periodCheckbox = document.getElementById('price-period-checkbox');
  const productZeiterfassung = document.getElementById('product-zeiterfassung-checkbox');
  const priceResult = document.getElementById('price-result');

  function calculate() {
    let pricePerUser = PRICE_PER_USER_UV;
    const userCount = Math.max(5, parseInt(userInput.value, 10) || 5);
    const isYearly = periodCheckbox.checked;
    const hasProductZeiterfassung = productZeiterfassung && productZeiterfassung.checked;
    if (hasProductZeiterfassung) pricePerUser += PRICE_PER_USER_ZE;
    let totalPrice;
    if (isYearly) {
      totalPrice = userCount * pricePerUser * 12 * (1 - DISCOUNT);
    } else {
      totalPrice = userCount * pricePerUser;
    }
    priceResult.textContent = isYearly
      ? `${totalPrice.toFixed(2)} € / Jahr (zzgl. MwSt.)`
      : `${totalPrice.toFixed(2)} € / Monat (zzgl. MwSt.)`;
  }

  userInput.addEventListener('input', calculate);
  periodCheckbox.addEventListener('change', calculate);
  if (productZeiterfassung) productZeiterfassung.addEventListener('change', calculate);

  calculate();
});
