const totalCost = function (tax, shipping, cost) {
    return (Number(tax) / 100) * Number(cost) + Number(cost) + Number(shipping);
  };
  
  const totalCostCurr = (tax) => (shipping) => (cost) =>
    totalCost(tax, shipping, cost);
  
  export const taxes = {
      tax12: totalCostCurr(12),
      tax18: totalCostCurr(18),
  };
  
  export const shipping = {
      petfood: taxes.tax12(2.5),
      smartphones: taxes.tax12(5),
      televisions: taxes.tax18(15),
  };
  