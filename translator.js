const engToMorseCode = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "/",
};

const morseToEnglish = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
   "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
};

//english to morse translator function
export const translateEnglishToMorse = (englishWord) => {

  if (typeof englishWord !== "string") { 
    return "invalid input"; 
  }
  
  const makeLowerCase = englishWord.toLowerCase();
  const splitCharacters = makeLowerCase.split("");

  const morseTranslation = splitCharacters.map((letterKey) => {
    return engToMorseCode[letterKey];
  });

  return morseTranslation.join(" ");
};

export const translateMorseToEnglish = (morseCode) => {
  const usingSplitAgain = morseCode.split(" ");

  console.log(usingSplitAgain);

  const englishTranslation = usingSplitAgain.map((letterKey) => {
    return morseToEnglish[letterKey];
  });

  return englishTranslation.join("");
};
