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


//Loading glaze the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    let selectGlaze = document.getElementById("glazingOptions");
    for (var j = 0; j < bunGlaze.length; j++) {
        var bunOption = document.createElement("option");
    bunOption.text=bunGlaze[j].option;
    bunOption.value=bunGlaze[j].price;
    selectGlaze.add(bunOption);
    }
});

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

//Loading count dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    let selectCount = document.getElementById("countOptions");
    for (var j = 0; j < allCount.length; j++) {
        var countOption = document.createElement("option");
    countOption.text=allCount[j].size;
    countOption.value=allCount[j].adapt;
    selectCount.add(countOption);
    }
});

function glazingChange(element) {

    const priceChange =element.value;
    (basePrice+glazingPrice)*packPrice;
}