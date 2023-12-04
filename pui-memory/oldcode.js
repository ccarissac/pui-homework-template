  //create new set 
const cartRollSet = new Set();

//arrays
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    },
    //added back in Vanilla and Gluten-free for sake of project was not in the original database
    "Vanilla": {
        "basePrice": 2.49,
        "imageFile": "vanilla-cinnamon-roll.jpg"
    },
    "Gluten-Free": {
        "basePrice": 2.49,
        "imageFile": "gluten-free-cinnamon-roll.jpg"
    },
};
//glaze options array
let bunGlaze = [
    {
        option: "Keep original",
        price: 0
    },
    {
        option: "Sugar Milk",
        price: 0
    },
    {
        option: "Vanilla Milk",
        price: 0.5
    },
    {
        option: "Double Chocolate",
        price: 1.5
    },
];
//pack count options array
let allCount = [
    {
        size: "1",
        adapt: 1,
    },
    {
        size: "3",
        adapt: 3
    },
    {
        size: "6",
        adapt: 5,
    },
    {
        size: "12",
        adapt: 10,
    },
]

//creating Roll class to easily create new rolls
class Roll {
    constructor(rollType, rollGlaze, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlaze;
        this.size = packSize;
        this.basePrice = basePrice;
        this.indBunPrice = parseFloat(this.getPrice(basePrice).toFixed(2));

        this.element = null;
    }
    //calculating price of individual buns
    getPrice() {
        for (let i = 0; i < bunGlaze.length; i++) {
            if (bunGlaze[i].option == this.glazing) {
                var glazingPrice = bunGlaze[i].price;
            }
            //get around because original is referred to differently between the arrays
            if (this.glazing == "Original") {
                var glazingPrice = bunGlaze[0].price;
            }
        }
        for (let i = 0; i < allCount.length; i++) {
            if (allCount[i].size == this.size) {
                var packPrice = allCount[i].adapt;
            }
        }
        // console.log("pack", packPrice);

        let finalIndPrice = (this.basePrice + glazingPrice) * packPrice;
        // console.log("final price", finalIndPrice);
        //store value of ind bun price in getPrice()
        return finalIndPrice;
    }
}

{/* <div class="cart-body">
<!-- <div class = "cart-list"> -->
  <template id="cart-item-template">
    <div class="cart-item-one">
      <div class="cart-image-remove">
          <img class="product-image" src="assets/products/original-cinnamon-roll.jpg" width="200" alt="Photo of Original Cinnamon Roll, looking delicious"/>
          <p class="cart-remove">Remove</p>
      </div>
      <div class="cart-text">
        <h3 class="cart-item-name"> Original Cinnamon Roll </h3>
        <h3 class="cart-item-glaze"> Glazing: Keep Original </h3> 
        <h3 class="cart-item-size"> Pack Size: 1 </h3> 
      </div>
        <h2 class="cart-item-price">$2.49</h2>
    </div>
  </template> */}

//code for changing the dropdown menu and calculating product-detail price

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
// console.log("rollType:", rollType);

//global variables
let bunPrice = 0;
let bunCount = 1;

let selectGlaze = document.getElementById("glazingOptions");
let selectCount = document.getElementById("countOptions");

let baseRollPrice = rolls[rollType].basePrice;

let rollImage = "";


let cart = [];

//update product detail page
function updatePage() {
    let newTitle = document.querySelector(".detail-tagline").innerHTML = rollType + " Cinnamon Roll";
    let newImage = document.querySelector(".product-image");
    newImage.src = "assets/products/" + rolls[rollType].imageFile;
    let newBasePrice = document.querySelector(".detail-price");
    newBasePrice.innerHTML = "$" + baseRollPrice.toFixed(2);
}

updatePage();



//Loading glaze the dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    let selectGlaze = document.getElementById("glazingOptions");
    for (let j = 0; j < bunGlaze.length; j++) {
        let bunOption = document.createElement("option");
        bunOption.text = bunGlaze[j].option;
        // console.log("bunoption+text"+bunOption.text);
        bunOption.value = bunGlaze[j].price;
        selectGlaze.add(bunOption);
    }
    selectGlaze.addEventListener("change", newPrice);
});

//Loading count dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    let selectCount = document.getElementById("countOptions");
    for (let j = 0; j < allCount.length; j++) {
        let countOption = document.createElement("option");
        countOption.text = allCount[j].size;
        countOption.value = allCount[j].adapt;
        selectCount.add(countOption);
    }
    selectCount.addEventListener("change", newPrice);
});

//Checking to see if different option has been selected
function glazingChange() {
    bunPrice = parseFloat(document.getElementById("glazingOptions").value);
    // document.getElementById("glazingOptions").addEventListener("change", newPrice);
    newPrice();
}

function countChange() {
    bunCount = parseInt(document.getElementById("countOptions").value);
    // document.getElementById("countOptions").addEventListener("change", newPrice);
    newPrice();
}

//checking to see if add to cart button has been clicked
const addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", cartAdd);

//calculate price function
function newPrice() {
    let calcPrice = (baseRollPrice + bunPrice) * bunCount;
    document.querySelector(".detail-price").innerText = "$" + calcPrice.toFixed(2);
}

newPrice();

//cart code for creating template and removing items from cart
//code adapted from lab05
function createElement(roll) {
    const template = document.querySelector("#cart-item-template");
    if (!template) return;
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".cart-item-one");

    const btnDelete = roll.element.querySelector(".cart-remove");
    console.log("delete");
    btnDelete.addEventListener("click", () => {
        deleteRoll(roll);
    });

    const rollListElement = document.querySelector(".cart-body");
    rollListElement.prepend(roll.element);
    console.log("test createElement");

    updateElement(roll);
    console.log("yummy created element");
}

//update UI of the cart page
function updateElement(roll) {
    const rollImageElement = roll.element.querySelector(".product-image");
    const rollTypeElement = roll.element.querySelector(".cart-item-name");
    const rollGlazeElement = roll.element.querySelector(".cart-item-glaze");
    const rollPackElement = roll.element.querySelector(".cart-item-size");
    const rollPriceElement = roll.element.querySelector(".cart-item-price");
    const rollCartTotalElement = document.querySelector(".cart-checkout-price");

    console.log("test updateElement");

    rollImageElement.src = "assets/products/" + rolls[roll.type].imageFile;
    rollTypeElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + roll.glazing;
    rollPackElement.innerText = "Pack Size: " + roll.size;
    rollPriceElement.innerText = "$" + roll.indBunPrice.toFixed(2);
    rollCartTotalElement.innerText = "$" + cartTotal().toFixed(2);
}

//remove roll from set and DOM
//recalculate price when roll is removed
function deleteRoll(roll) {
    roll.element.remove();
    cartRollSet.delete(roll);

    saveToLocalStorage();

    const rollTotalPriceElement = document.querySelector(".cart-checkout-price");
    let currentTotalPrice = parseFloat(rollTotalPriceElement.innerText.replace('$', '')); // Extract the numeric value
    let newTotalPrice = currentTotalPrice - roll.indBunPrice;

    rollTotalPriceElement.innerText = "$" + parseFloat(newTotalPrice.toFixed(2));
}
//calculates total price of all buns in the cart
function cartTotal() {
    let totalPrice = 0.00;

    for (const roll of cartRollSet) {
        totalPrice = totalPrice + roll.indBunPrice;
        // console.log("totalPrice" + totalPrice);
    }

    return totalPrice;
}

//creating and adding new roll to set
function addNewRoll(rollType, rollGlaze, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlaze, packSize, basePrice);
    // console.log("New roll created: ", roll);
    cartRollSet.add(roll);
    // console.log("Roll added to the cart.");

    console.log("Current cart contents: ", cartRollSet);
    return roll;
}

//creating new item in the cart based on selections above
//pushing into console, and into the cart
function cartAdd() {
    console.log("test btnClicked");
    let rollGlaze = selectGlaze.options[selectGlaze.selectedIndex].text;
    let packSize = selectCount.options[selectCount.selectedIndex].text;

    addNewRoll(rollType, rollGlaze, packSize, baseRollPrice);
    console.log("test cartAdd");
    
    saveToLocalStorage();
    console.log("Data saved to local storage.");
}

//cart code for saving and retrieving from local storage
function saveToLocalStorage() {
    const cartRollArray = Array.from(cartRollSet);

    const cartRollArrayString = JSON.stringify(cartRollArray);

    localStorage.setItem("cartItems", cartRollArrayString);
    console.log("saved cart: ", cartRollArrayString);
}
// Retrieve the current shopping cart from local storage
function retrieveFromLocalStorage() {
    const cartShoppingRollArrayString = localStorage.getItem("cartItems");
    const cartShoppingRollArray = JSON.parse(cartShoppingRollArrayString);

    for (const rollData of cartShoppingRollArray) {
        const newRoll = addNewRoll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
        cartRollSet.add(newRoll);
        createElement(newRoll); //update UI
        }
    console.log("retrieved local");
    return cartShoppingRollArray
}

if (localStorage.getItem("cartItems") !== null) {
    retrieveFromLocalStorage();
}



  
function createElement(roll) {
    const template = document.querySelector("#cart-item-template");
    if (!template) return;
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".cart-item-one");

    const btnDelete = roll.element.querySelector(".cart-remove");
    console.log("delete");
    btnDelete.addEventListener("click", () => {
        deleteRoll(roll);
    });

    const rollListElement = document.querySelector(".cart-body");
    rollListElement.prepend(roll.element);
    console.log("test createElement");

    updateElement(roll);
    console.log("yummy created element");
}

//update UI of the cart page
function updateElement(roll) {
    const rollImageElement = roll.element.querySelector(".product-image");
    const rollTypeElement = roll.element.querySelector(".cart-item-name");
    const rollGlazeElement = roll.element.querySelector(".cart-item-glaze");
    const rollPackElement = roll.element.querySelector(".cart-item-size");
    const rollPriceElement = roll.element.querySelector(".cart-item-price");
    const rollCartTotalElement = document.querySelector(".cart-checkout-price");

    console.log("test updateElement");

    rollImageElement.src = "assets/products/" + rolls[roll.type].imageFile;
    rollTypeElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + roll.glazing;
    rollPackElement.innerText = "Pack Size: " + roll.size;
    rollPriceElement.innerText = "$" + roll.indBunPrice.toFixed(2);
    rollCartTotalElement.innerText = "$" + cartTotal().toFixed(2);
}