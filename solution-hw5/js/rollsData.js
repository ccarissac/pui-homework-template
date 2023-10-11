//rolls array
document.addEventListener('DOMContentLoaded', function () {
    //rolls array
    console.log("rollsData Load Check");

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
        }    
    };

    class Roll{
        constructor(rollType, rollGlaze, packSize, basePrice) {
        this.type= rollType;
        this.glazing= rollGlaze;
        // console.log("rollGlaze"+rollGlaze);
        this.size= packSize;
        // console.log("packSize"+packSize);
        this.basePrice= basePrice;
        // console.log("basePrice"+this.basePrice);
        this.indBunPrice= parseFloat(this.getPrice(basePrice).toFixed(2));

        this.element = null;
        }

        getPrice(){
            for (let i = 0; i < bunGlaze.length; i++){
                if (bunGlaze[i].option == this.glazing) {
                 var glazingPrice = bunGlaze[i].price;
                }
                if (this.glazing=="Original") {
                    var glazingPrice=bunGlaze[0].price;
                }
             }
            for (let i = 0; i < allCount.length; i++){
                if (allCount[i].size == this.size) {
                 var packPrice = allCount[i].adapt;
                }
             }
             console.log("pack",packPrice);
    
             let finalIndPrice = (this.basePrice+glazingPrice) * packPrice;
             console.log("final price", finalIndPrice);
             return finalIndPrice;
        }
    }

    const cartRollSet= new Set();

    // cartRollSet.add(new Roll("Original", "Sugar Milk", 1, 2.49));
    // cartRollSet.add(new Roll("Walnut", "Vanilla Milk", 12, 3.49));
    // cartRollSet.add(new Roll("Raisin", "Sugar Milk", 3, 2.99));
    // cartRollSet.add(new Roll("Apple", "Original", 3, 3.49));

    const rollOne = addNewRoll("Original", "Sugar Milk", 1, 2.49);
    const rollTwo = addNewRoll("Walnut", "Vanilla Milk", 12, 3.49);
    const rollThree = addNewRoll ("Raisin", "Sugar Milk", 3, 2.99);
    const rollFour = addNewRoll ("Apple", "Keep original", 3, 3.49);

    // createElement (rollOne);
    // createElement (rollTwo);
    // createElement (rollThree);
    // createElement (rollFour);

    function addNewRoll(rollType, rollGlaze, packSize, basePrice) {
        const roll = new Roll(rollType, rollGlaze, packSize, basePrice);
        // console.log(rollGlaze);
        cartRollSet.add(roll);

        return roll;
    }

    //code adapted from lab05

    function createElement(roll) {
        const template = document.querySelector("#cart-item-template");
        const clone = template.content.cloneNode(true);

        roll.element = clone.querySelector(".cart-item-one");

        const btnDelete = roll.element.querySelector(".cart-remove");
        btnDelete.addEventListener("click", () => {
            deleteRoll(roll);
        });

        const rollListElement = document.querySelector(".cart-body");
        rollListElement.prepend(roll.element);

        updateElement(roll);
    }

    function updateElement(roll) {
        const rollImageElement = roll.element.querySelector(".product-image");
        const rollTypeElement = roll.element.querySelector(".cart-item-name");
        const rollGlazeElement = roll.element.querySelector(".cart-item-glaze");
        const rollPackElement = roll.element.querySelector(".cart-item-size");
        const rollPriceElement = roll.element.querySelector(".cart-item-price");

        rollImageElement.src = "assets/products/" + rolls[roll.type].imageFile;
        rollTypeElement.innerText = roll.type + " Cinnamon Roll";
        // console.log("rollType: "+ rollTypeElement)
        rollGlazeElement.innerText = "Glazing: " + roll.glazing;
        rollPackElement.innerText = "Pack Size: " + roll.size;
        rollPriceElement.innerText = "$" + roll.indBunPrice.toFixed(2);
    }

 
    function deleteRoll(roll) {
        roll.element.remove();
        cartRollSet.delete(roll);

        const rollTotalPriceElement = document.querySelector(".cart-checkout-price");
        let currentTotalPrice = parseFloat(rollTotalPriceElement.innerText.replace('$', '')); // Extract the numeric value
        let newTotalPrice = currentTotalPrice - roll.indBunPrice;

        rollTotalPriceElement.innerText = "$" + parseFloat(newTotalPrice.toFixed(2));
    }



    for (const roll of cartRollSet) {
        createElement(roll);

        const rollTotalPriceElement = document.querySelector(".cart-checkout-price");
        rollTotalPriceElement.innerText = "$" + cartTotal();
    }




    function cartTotal() {
        console.log("cart total check");
        let totalPrice=0.0;

        for (const roll of cartRollSet){
            totalPrice= totalPrice + roll.indBunPrice;
            // totalPrice.toFixed(2);
            console.log("totalPrice" + totalPrice);
        }

        return totalPrice;
    }

    console.log("yo mama");
});