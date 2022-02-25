
const englishDisplay = document.querySelector(".input-box--english")
const morseCodeDisplay = document.querySelector(".input-box--morse")

const englishToMorseButton = document.getElementById("english-to-morse");
const morseToEnglishButon = document.getElementById("morse-to-english");

let result = "";

const engToMorseCode = {  
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

const morseToEnglish = {
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
}

// stub out functions we need

//english to morse translator function
export const translateEnglishToMorse = (englishWord) => {
    englishWord = englishDisplay.value
    const usingSplit = englishWord.split('');
    console.log(usingSplit);
    
    const morseTranslation = usingSplit.map(letterKey =>{
        return engToMorseCode[letterKey];

    })
    morseCodeDisplay.value = morseTranslation.join(' ');
  

}


//english to morse translator function
export const translateMorseToEnglish = (morseCode) => {
    morseCode = morseCodeDisplay.value
    // englishDisplay.value = morseCodeDisplay.value;

    // const usingSplit = morseCode.split('');
    // console.log(usingSplit);
    
    const englishTranslation = morseCode.map(letterKey =>{
        return morseToEnglish[letterKey];

    })
    morseCodeDisplay.value = englishTranslation.join(' ');
  



}


englishToMorseButton.addEventListener("click", translateEnglishToMorse)
morseToEnglishButon.addEventListener("click", translateMorseToEnglish)


