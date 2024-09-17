import { item } from "./model/item.model";

let stock : item[] = []; 

function addItem(itemName : string, quantity : number, limit : number) : void {
  try{
    stock.push(new item(itemName, quantity, limit))
  }catch(e){
     console.log(e.message)
  }
}

addItem("Bolacha", 10, 5);
addItem("Pão", 200, 10);
addItem("Arroz", 40, 5);
addItem("Bolo", 30, 5);


function removeItem(itemName : string) : void {
  for( let i = 0; i < stock.length; i++){
      if( stock[i].getName() == itemName ){
        stock.splice( i, 1)
        return;
      }
  }

  console.log(" Item não encontrado no estoque!")
    
}

function checkStock(itemName : string) {
  for( let i = 0; i < stock.length; i++){
    if( stock[i].getName()== itemName ){
      console.log(stock[i]) 
      return
    }
  }
  console.log(" Item não encontrado no sistema!")
}

function setStockLimit( itemName : string) {
  for(let i = 0; i < stock.length; i++){
    if(stock[i].getName()== itemName){
      if(stock[i].quantityIsLow() == true){
        console.log('A quantidade do produto está abaixo do limite!')
        return
      }

      console.log('A quantidade do produto é maior que o limite!')
    }

  }
  console.log("item não encontrado no estoque!")
}

function updateQuantity(itemName: string, quantity : number){
  for(let i = 0; i < stock.length; i++){
    if(stock[i].getName() == itemName){
      stock[i].setQuantity(quantity)

      return
    }
  }
  console.log("item não encontrado!")
}

console.log(stock)
updateQuantity("Bolacha", 25)

console.log(stock)
