var cart = []

var getCart = () => {
 return cart
}

function setCart(c) {
  cart = c
}

var addToCart = (item) => {
	var price = Math.floor(Math.random() * 100)
 	var cartItem = {[item]: price};

 	cart.push(cartItem)
 	
 	console.log(item + " has been added to your cart.");
 	return cart
}

var viewCart = () => {
	if (cart.length > 0){
		var cartString = new Array();

		for (var i = 0; i < cart.length; i++){
			var price = Object.values(cart[i])
			var item = Object.keys(cart[i])

			var string = item + " at $" + price

			cartString.push(string);

			cartString
		}

		var cartStringNew = cartString.join(', ');

		var sayString = "In your cart, you have "+ cartStringNew + "."

		console.log(sayString)
	}

	else{
		console.log('Your shopping cart is empty.');
	}
}

var total = () => {

	var totalArray = new Array()

	for(var i = 0; i < cart.length; i++){
  		var price = Object.values(cart[i])

  		totalArray.push(price[0])

  		totalArray
  	}

  	var sum = totalArray.reduce((a,b) => a + b, 0)

  	return sum
}
var removeFromCart = (item) => {

	for (let i = 0; i < cart.length; i++){
		if (cart[i].hasOwnProperty(item)) {
			cart.splice(i, 1)
			return cart
		}
	}
	console.log(`That item is not in your cart.`)
}
		
var placeOrder = (cardNumber) => {
	if(cardNumber === undefined){
		return console.log("We don't have a credit card on file for you to place your order.");
	}
	console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
	cart = [];

}

