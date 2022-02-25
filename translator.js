
const englishDisplay = document.querySelector(".input-box--english")
const morseCodeDisplay = document.querySelector(".input-box--morse")

const englishToMorseButton = document.getElementById("english-to-morse");
const morseToEnglishButon = document.getElementById("morse-to-english");

let result = "";

const morseCode = {  
"a": ".-",
"b": "-...",
"c": "-.-.",
"d": "-..",
"e": ".",
"f": "..-.",
"g": "--.",
"h": "....",
"i": "..",
"j": ".---",
"k": "-.-",
"l": ".-..",
"m": "--",
"n": "-.",
"o": "---",
"p": ".--.",
"q": "--.-",
"r": ".-.",
"s": "...",
"t": "-",
"u": "..-",
"v": "...-",
"w": ".--",
"x": "-..-",
"y": "-.--",
"z": "--..",
" ": "/",
}

// stub out functions we need

//english to morse translator function
export const translateEnglishToMorse = (englishWord) => {
    englishWord = englishDisplay.value
    const usingSplit = englishWord.split('');
    console.log(usingSplit);
    
    const morseTranslation = usingSplit.map(morse =>{
        return morse + morseCode;
    })
    morseCodeDisplay.value = morseTranslation;
    //   morseCodeDisplay.value = usingSplit;
// const morseCodeCharacters = usingSplit.join(' ');

}


//english to morse translator function
export const translateMorseToEnglish = (morseCode) => {
    morseCode = morseCodeDisplay.value
    englishDisplay.value = morseCodeDisplay.value;
 
}


englishToMorseButton.addEventListener("click", translateEnglishToMorse)
morseToEnglishButon.addEventListener("click", translateMorseToEnglish)


