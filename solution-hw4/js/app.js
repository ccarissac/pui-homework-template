//Bun Array
// Resource: https://www.youtube.com/watch?v=oigfaZ5ApsM
console.log("rollsData Load Check");

let bunGlaze =[
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

//Count Array
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

//Query Strings: https://www.youtube.com/watch?v=Z_o7iilNdLQ
//URL Search
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
// console.log("rollType:", rollType);

//global variables
let bunPrice = 0;
let bunCount = 1;

let selectGlaze = document.getElementById("glazingOptions");
let selectCount = document.getElementById("countOptions");

// console.log("baseprice"+rolls[rollType].basePrice);
let baseRollPrice = rolls[rollType].basePrice;
// console.log("base roll price"+baseRollPrice);
let rollImage="";
let cart=[];

function updatePage(){
    // console.log("rollType:", rollType);
    let newTitle= document.querySelector(".detail-tagline").innerHTML = rollType + " Cinnamon Roll";
    
    // console.log("new title");
    let newImage= document.querySelector(".product-image");
    newImage.src= "assets/products/"+rolls[rollType].imageFile;
    // console.log(newImage);
    
    let newBasePrice= document.querySelector(".detail-price");
    newBasePrice.innerHTML= "$" + baseRollPrice.toFixed(2);
}

updatePage();


class Roll{
    constructor(rollType, rollGlaze, packSize, basePrice) {
    this.type= rollType;
    this.glazing= rollGlaze;
    // console.log("rollGlaze"+rollGlaze);
    this.size= packSize;
    // console.log("packSize"+packSize);
    this.basePrice= basePrice;
    }
}


//Loading glaze the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    let selectGlaze = document.getElementById("glazingOptions");
    for (let j = 0; j < bunGlaze.length; j++) {
        let bunOption = document.createElement("option");
        bunOption.text = bunGlaze[j].option;
        // console.log("bunoption+text"+bunOption.text);
        bunOption.value = bunGlaze[j].price;
        // bunOption.count= j;
        selectGlaze.add(bunOption);
    }
    selectGlaze.addEventListener("change", newPrice);
});

//Loading count dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    let selectCount = document.getElementById("countOptions");
    for (let j = 0; j < allCount.length; j++) {
        let countOption = document.createElement("option");
        countOption.text=allCount[j].size;
        countOption.value=allCount[j].adapt;
        // countOption.count= j;
        selectCount.add(countOption);
    }
    selectCount.addEventListener("change", newPrice);
});



function glazingChange(){
    bunPrice= parseFloat(document.getElementById("glazingOptions").value);
    // console.log(bunPrice);
    document.getElementById("glazingOptions").addEventListener("change", newPrice);
    newPrice();
    }

function countChange(){
    bunCount= parseInt(document.getElementById("countOptions").value);
    // console.log (bunCount);
    document.getElementById("countOptions").addEventListener("change", newPrice);
    newPrice();
    }

const addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", cartAdd);
console.log("clicked!");

function cartAdd () {
    // console.log("cartAdd function called");
    let rollGlaze = selectGlaze.options[selectGlaze.selectedIndex].text;
    let packSize = selectCount.options[selectCount.selectedIndex].text;
    cartRoll= new Roll(rollType, rollGlaze, packSize, baseRollPrice);
        // console.log("cartAdd function called");
        cart.push(cartRoll);
        console.log(cart);
    }

function newPrice() {
    let calcPrice = (baseRollPrice + bunPrice) * bunCount;
    document.querySelector(".detail-price").innerText = "$" + calcPrice.toFixed(2);
}

newPrice();

// selectGlaze.addEventListener("change", newPrice);
// selectCount.addEventListener("change", newPrice);
