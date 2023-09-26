//Bun Array
// Resource: https://www.youtube.com/watch?v=oigfaZ5ApsM
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

//Loading glaze the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    let selectGlaze = document.getElementById("glazingOptions");
    for (let j = 0; j < bunGlaze.length; j++) {
        let bunOption = document.createElement("option");
        bunOption.text = bunGlaze[j].option;
        bunOption.value = bunGlaze[j].price;
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
        selectCount.add(countOption);
    }
    selectCount.addEventListener("change", newPrice);
});

//Initial values
let basePrice =2.49;;
let bunPrice = 0;
let bunCount = 1;

function glazingChange(){
    bunPrice= parseFloat(document.getElementById("glazingOptions").value);
    console.log(bunPrice);
    document.getElementById("glazingOptions").addEventListener("change", newPrice);
    newPrice();
    }

function countChange(){
    bunCount= parseInt(document.getElementById("countOptions").value);
    console.log (bunCount);
    document.getElementById("countOptions").addEventListener("change", newPrice);
    newPrice();
    }


function newPrice() {
        // price=bunPrice;
        // console.log("end "+price);
        // bunCount=countChange();
        let calcPrice = (basePrice + bunPrice) * bunCount;
        // console.log("endcalc"+calcPrice);
        // console.log("endprice"+bunPrice);
        // console.log("endcount"+bunCount);
        document.querySelector(".detail-price").innerText = "$" + calcPrice.toFixed(2);
    }

newPrice();



    
    // let bunPrice = parseFloat(document.getElementById("glazingOptions").value);
    // let bunCount = parseInt(document.getElementById("countOptions").value);

    // let calcPrice = (basePrice + bunPrice) * bunCount;
    // let priceElement = document.querySelector(".detail-price");
    // priceElement.innerText = "$" + calcPrice.toFixed(2);



    // const priceChange =element.value;
    // (basePrice+glazingPrice)*packPrice;
