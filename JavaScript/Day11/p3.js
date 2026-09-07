// create a curryed function that accepts:
//    price
//    Quantity
//    Discount percentage
// Return final price

const shop = (price) => {
  return (Quantity) => {
    return (Discount) => {
      let total = price * Quantity;
      let FinalPrice = total - (total * Discount) / 100;
      return FinalPrice;
    };
  };
};

let result = shop(10)(5)(10);
console.log(result);
