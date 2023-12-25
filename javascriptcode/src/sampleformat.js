const renderRows = function (items) {
  const domNodes = items
    .map(({ product, cost, totalCost = "N/A" }) =>
      Row(product, cost, totalCost),
    )
    .join("");

  productsDiv.innerHTML = domNodes;
};
