async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
    console.log(`Item ${name} removido do carrinho.`);
  }
}

async function removeItem(userCart, index) {}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total do carrinho: R$ ${result.toFixed(2)}`);
}

async function displayCart(userCart) {
  console.log('Itens no carrinho:');
  userCart.forEach((item) => {
    console.log(
      `- ${item.name}: R$ ${item.price.toFixed(2)} x ${
        item.quantity
      } = R$ ${item.subtotal().toFixed(2)}`,
    );
  });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };
