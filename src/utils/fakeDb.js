// const addtoDb=(id)=>{
//     let card={}
//     const getCardValue=localStorage.getItem('card')
// // localStorage.setItem("card",id)
// if(getCardValue){
//     card=JSON.parse(getCardValue)
// }else{
//     localStorage.setItem("card",JSON.stringify(card))
// }
// use local storage to manage cart data
const addtoDb = id => {
    let shoppingCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
      const newQuantity = quantity + 1
      shoppingCart[id] = newQuantity
    } else {
      shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }
  const getStoredCart = () => {
    let shoppingCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
  }

// }
export { addtoDb, getStoredCart }

