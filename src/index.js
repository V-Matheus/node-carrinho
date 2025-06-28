import createItem from './services/item.js';
const carrinho = []

const item1 = await createItem('Camiseta', 29.90, 2);
const item2 = await createItem('Calça', 89.90, 3);

console.log(item2.subtotal());
