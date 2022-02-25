import { translateEnglishToMorse } from "./translator.js";
import { translateMorseToEnglish } from "./translator.js";
import { expect, it, describe } from "@jest/globals";

describe("translate words from english to morse", () => {
  // positive test case for a single word
  it("walk should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("walk");
    expect(result).toBe(".-- .- .-.. -.-");
  });
  it("crab should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("crab");
    expect(result).toBe("-.-. .-. .- -...");
  });
  it("revolutionaries should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("revolutionaries");
    expect(result).toBe(".-. . ...- --- .-.. ..- - .. --- -. .- .-. .. . ...");
  });
  it("rhythms should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("rhythms");
    expect(result).toBe(".-. .... -.-- - .... -- ...");
  });

  // positive tests for a single letter

  it("x should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("x");
    expect(result).toBe("-..-");
  });
  it("w should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("w");
    expect(result).toBe(".--");
  });
  it("q should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("q");
    expect(result).toBe("--.-");
  });
  it("z should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("z");
    expect(result).toBe("--..");
  });

  // positive tests for multiple words
  it("I want pizza should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("I want pizza");
    expect(result).toBe(".. / .-- .- -. - / .--. .. --.. --.. .-");
  });
  it("You are quirky should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("You are quirky");
    expect(result).toBe("-.-- --- ..- / .- .-. . / --.- ..- .. .-. -.- -.--");
  });
  it("Never mind what he says should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("Never mind what he says");
    expect(result).toBe("-. . ...- . .-. / -- .. -. -.. / .-- .... .- - / .... . / ... .- -.-- ...");
  });

  // negative tests for edge cases
});

describe("translates morse code to english", () => {
  // positive test case for a single word
  it("walk should translate correctly to english", () => {
    const result = translateMorseToEnglish(".-- .- .-.. -.-");
    expect(result).toBe("walk");
  });
  it("crab should translate correctly to english", () => {
    const result = translateMorseToEnglish("-.-. .-. .- -...");
    expect(result).toBe("crab");
  });
  it("revolutionaries should translate correctly to english", () => {
    const result = translateMorseToEnglish(".-. . ...- --- .-.. ..- - .. --- -. .- .-. .. . ...");
    expect(result).toBe("revolutionaries");
  });
  it("rhythms should translate correctly to english", () => {
    const result = translateMorseToEnglish(".-. .... -.-- - .... -- ...");
    expect(result).toBe("rhythms");
  });

  // positive tests for a single letter

  it("x should translate correctly to english", () => {
    const result = translateMorseToEnglish("-..-");
    expect(result).toBe("x");
  });
  it("w should translate correctly to english", () => {
    const result = translateMorseToEnglish(".--");
    expect(result).toBe("w");
  });
  it("q should translate correctly to english", () => {
    const result = translateMorseToEnglish("--.-");
    expect(result).toBe("q");
  });
  it("z should translate correctly to english", () => {
    const result = translateMorseToEnglish("--..");
    expect(result).toBe("z");
  });

  // positive tests for multiple words
  it("I want pizza should translate correctly to english", () => {
    const result = translateMorseToEnglish(".. / .-- .- -. - / .--. .. --.. --.. .-");
    expect(result).toBe("I want pizza");
  });
  it("You are quirky should translate correctly to english", () => {
    const result = translateMorseToEnglish("-.-- --- ..- / .- .-. . / --.- ..- .. .-. -.- -.--");
    expect(result).toBe("You are quirky");
  });
  it("Never mind what he says should translate correctly to english", () => {
    const result = translateMorseToEnglish("-. . ...- . .-. / -- .. -. -.. / .-- .... .- - / .... . / ... .- -.-- ...");
    expect(result).toBe("Never mind what he says");
  });




});