const products = [
  { name: "Rice (50 kg bag)", qty: 4, minQty: 2, buy: 21000, sell: 23500 },
  { name: "Groundnut oil (1 L)", qty: 1, minQty: 6, buy: 1100, sell: 1300 },
  { name: "Sugar (1 kg)", qty: 0, minQty: 5, buy: 750, sell: 900 },
  { name: "Maggi cubes (packet)", qty: 30, minQty: 10, buy: 900, sell: 1000 },
];

const lowStock = products.filter((p) => p.qty <= p.minQty);
console.log("Products to restock:");
for (const p of lowStock) {
  console.log(`- ${p.name}: ${p.qty} left`);
}

const stockValue = products.reduce((total, p) => total + p.qty * p.buy, 0);
console.log(`Stock value at buying price: ${stockValue} XAF`);

// profit per unit
function profitPerUnit(product) {
  return product.sell - product.buy;
}

let best = products[0];
for (const p of products) {
  if (profitPerUnit(p) > profitPerUnit(best)) {
    best = p;
  }
}
console.log(`Highest profit per unit: ${best.name} (${profitPerUnit(best)} XAF)`);

// --- Assignment task 1: products completely out of stock ---
function getOutOfStock(list) {
  return list.filter((p) => p.qty === 0);
}

console.log("Out of stock products:");
for (const p of getOutOfStock(products)) {
  console.log(`- ${p.name}`);
}

// --- Assignment task 2: stock value at selling price and profit ---
const sellingValue = products.reduce((total, p) => total + p.qty * p.sell, 0);
const totalProfit = products.reduce((total, p) => total + p.qty * profitPerUnit(p), 0);

console.log(`Stock value at selling price: ${sellingValue} XAF`);
console.log(`Profit if everything is sold: ${totalProfit} XAF`);