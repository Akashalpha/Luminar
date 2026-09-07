// Write a program that takes:

// purchaseAmount
// isPremiumMember (true/false)
// couponApplied (true/false)

// Rules:

// If the purchase amount is $100 or more:
// If the customer is a premium member:
// If a coupon is applied, print "30% Discount Applied"
// Otherwise, print "20% Discount Applied"
// Otherwise:
// If a coupon is applied, print "15% Discount Applied"
// Otherwise, print "10% Discount Applied"
// Otherwise:
// Print "No Discount Available"

const purchaseAmount = 100;
let isPremiumMember = false;
let couponApplied = true;
if (purchaseAmount >= 100) {
  if (isPremiumMember) {
    if (couponApplied) {
      console.log("30% Discount Applied");
    } else {
      console.log("20% Discount Applied");
    }
  } else {
    if (couponApplied) {
      console.log("15% Discount Applied");
    }
  }
} else {
  console.log("No Discount Available");
}
