## Desafio: Refatoração de código JavaScript para TypeScript

### Critérios de aceite:
- O código deve compilar sem erros com o TypeScript
- As tipagens devem estar corretas
- O código deve seguir boas práticas de programação
- As funcionalidades devem ser mantidas

### Contexto:
Seu time do talent pipeline foi contratado para desenvolver uma aplicação web para gerenciamento de estoque de reposição de peças da Ford no Brasil. Atualmente, a aplicação está sendo desenvolvida em JavaScript, mas vocês perceberam que o TypeScript oferece vantagens como tipagem estática e melhores práticas de programação.

### User Case:
Como gerente de estoque, eu quero poder adicionar, editar e remover itens do meu estoque. Além disso, eu quero poder visualizar a quantidade atual de uma peça específica e ser notificado quando a quantidade estiver abaixo de um limite estabelecido.

## O desafio é refatorar o código JavaScript existente para TypeScript, mantendo as funcionalidades existentes e seguindo os critérios de aceite.

### Código JavaScript para o desafio de gerenciamento de estoque:

~~~javascript
let stock = {};

function addItem(itemName, quantity) {
  if (stock.hasOwnProperty(itemName)) {
    stock[itemName] += quantity;
  } else {
    stock[itemName] = quantity;
  }
}

function removeItem(itemName, quantity) {
  if (stock.hasOwnProperty(itemName)) {
    if (stock[itemName] < quantity) {
      console.log(Error: Not enough ${itemName} in stock);
    } else {
      stock[itemName] -= quantity;
    }
  } else {
    console.log(Error: ${itemName} not found in stock);
  }
}

function checkStock(itemName) {
  if (stock.hasOwnProperty(itemName)) {
    console.log(${itemName} stock: ${stock[itemName]});
  } else {
    console.log(Error: ${itemName} not found in stock);
  }
}

function setStockLimit(itemName, limit) {
  if (stock.hasOwnProperty(itemName)) {
    if (stock[itemName] < limit) {
      console.log(Warning: ${itemName} stock is low);
    }
  } else {
    console.log(Error: ${itemName} not found in stock);
  }
}
~~~
