import data from './data.json' assert{type: "json"};
import Row from './Row.js';
import { taxes, shipping } from './computeCost.js';
const productsDiv = document.querySelector('#products');

const renderRows = function (items) {
  const domNodes = items
    .map(({ product, cost, totalCost = 'N/A' }) =>
      Row(product, cost, totalCost)
    )
    .join('');

  productsDiv.innerHTML = domNodes;
};

(function () {
  const reviseData = data.map((item) => {
    return {
      ...item,
      totalCost: !item.shipping
        ? shipping[item.category](item.cost)
        : ['smartphones', 'petfood'].includes(item.category)
        ? taxes.tax12(item.shipping)(item.cost)
        : taxes.tax18(item.shipping)(item.cost),
    };
  });

  renderRows(reviseData);
})();
