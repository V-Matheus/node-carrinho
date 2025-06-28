async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const deletedItem = index - 1;
  if (deletedItem >= 0 && userCart.length > deletedItem) {
    userCart.splice(deletedItem, 1);
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if(indexFound === -1) {
    console.log(`Item ${item.name} não encontrado no carrinho.`);
    return;
  }

  if(userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity--;
    console.log(`Quantidade do item ${item.name} reduzida para ${userCart[indexFound].quantity}.`);
  } else {
    userCart.splice(indexFound, 1);
    console.log(`Item ${item.name} removido do carrinho.`);
  }
}

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
