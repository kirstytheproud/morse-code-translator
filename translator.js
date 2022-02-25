
// stub out functions we need

//english to morse translator function
export const translateEnglishToMorse = (englishWord) => {
    console.log("its connected")

}


//english to morse translator function
export const translateMorseToEnglish = (morseCode) => {

}


const englishToMorseButton = document.getElementById("english-to-morse");
const morseToEnglishButon = document.getElementById("morse-to-english");

englishToMorseButton.addEventListener("click", translateEnglishToMorse)