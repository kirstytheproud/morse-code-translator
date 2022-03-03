import { translateEnglishToMorse } from "./translator.js";
import { translateMorseToEnglish } from "./translator.js";

const englishInput = document.querySelector(".input-box--english");
const morseCodeInput = document.querySelector(".input-box--morse");
const englishToMorseButton = document.getElementById("english-to-morse");
const morseToEnglishButon = document.getElementById("morse-to-english");


const handleEnglishToMorseInput = () => {
  const englishDisplay = englishInput.value;
  const result = translateEnglishToMorse(englishDisplay);
  morseCodeInput.value = result;
  console.log("button works")
};

englishToMorseButton.addEventListener("click", handleEnglishToMorseInput);

const handleMorseToEnglishInput = () => {
    const morseCodeDisplay = morseCodeInput.value;
    const result = translateMorseToEnglish(morseCodeDisplay);
    englishInput.value = result;
    console.log("button works")
  };
  
  morseToEnglishButon.addEventListener("click", handleMorseToEnglishInput);
  