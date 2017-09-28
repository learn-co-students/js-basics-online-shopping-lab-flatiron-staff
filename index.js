var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100) + 1
 var new_item = {[item]: itemPrice}
 cart.push(new_item)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }
  else if (cart.length === 1) {
    var item = Object.keys(cart[0])[0]
    console.log(`In your cart, you have ${item} at $${cart[0][item]}.`)
  }
  else if (cart.length > 1) {
    let output = []
    for (let i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0]
    var price = cart[i][item]
    output.push(` ${item} at $${price}`)
    }
    console.log(`In your cart, you have${output.slice(0,output.length-1)}, and${output.slice(-1)}.`)
  }
}

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart = [...cart.slice(0,i),...cart.slice(i+1)]
    }
  }
  console.log(`That item is not in your cart.`)
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
