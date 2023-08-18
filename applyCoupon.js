document.getElementById('coupon_btn').addEventListener('click', function(){
  let total = document.getElementById("total-cost").textContent;
  let totalNumber = parseFloat(total);
  let couponCode = document.getElementById("coupon_code").textContent;
  let couponInput = document.getElementById("coupon_input").value;

  if (couponCode === couponInput) { // Use strict equality (===) here
      totalNumber = totalNumber * 0.7; // Apply the 30% discount
      document.getElementById("total-cost").innerText = totalNumber.toFixed(2); // Display the updated total
  }

  document.getElementById("coupon_input").value = '';
});
