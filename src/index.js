import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = []
const myWhishlist = []

const item1 = await createItem('Camiseta', 29.90, 2);
const item2 = await createItem('Calça', 89.90, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart);

await cartService.deleteItem(myCart, item1.name);
await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);
