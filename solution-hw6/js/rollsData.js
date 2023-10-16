//rolls array
document.addEventListener('DOMContentLoaded', function () {
    //rolls array
    console.log("rollsData Load Check");

    //code taken from Lab 06

    function submitRoll() {
        const rollEditorTitle = document.querySelector(".detail-tagline");
        const rollEditorGlaze = this.glaze;
        const rollEditorSize = this.size;
        const rollEditorPrice = document.querySelector(".detail-price");

        const roll = addNewRoll(rollEditorTitle, rollEditorGlaze, rollEditorSize, rollEditorPrice);

        saveToLocalStorage();

        console.log("roll editor title "+ rollEditorTitle);
    }



    function saveToLocalStorage() {
        const cartRollArray = Array.from(cartRollSet);
        console.log(cartRollArray);

        const cartRollArrayString = JSON.stringify(cartRollArray);
        console.log(cartRollArrayString);

        localStorage.setItem("storedNotes", cartRollArrayString);
    }

    function retrieveFromLocalStorage() {
        const cartRollArrayString = localStorage.getItem("storedNotes");
        const cartRollArray = JSON.parse(cartRollArrayString);
        for (const rollData of cartRollArray) {
            const roll = addNewRoll(rollData.rollImageElement, rollData.rollTypeElement, 
                rollData.rollGlazeElement, rollData.rollPackElement, rollData.rollPriceElement); //incomplete here
            createElement(roll);
        }
    } //rollType, rollGlaze, packSize, basePrice

    if (localStorage.getItem("storedNotes" != null)){
        retrieveFromLocalStorage();
    }
});