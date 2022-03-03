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
    it("Should take uppercase letters, for instance RHYTHMS should translate correctly to morse code", () => {
        const result = translateEnglishToMorse("RHYTHMS");
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
      const result = translateEnglishToMorse("i want pizza");
      expect(result).toBe(".. / .-- .- -. - / .--. .. --.. --.. .-");
    });
    it("You are quirky should translate correctly to morse code", () => {
      const result = translateEnglishToMorse("you are quirky");
      expect(result).toBe("-.-- --- ..- / .- .-. . / --.- ..- .. .-. -.- -.--");
    });
    it("Never mind what he says should translate correctly to morse code", () => {
      const result = translateEnglishToMorse("never mind what he says");
      expect(result).toBe(
        "-. . ...- . .-. / -- .. -. -.. / .-- .... .- - / .... . / ... .- -.-- ..."
      );
    });
  
    // negative tests for edge cases
  
    it("if nothing is entered, 'invalid input' is returned", () => {
      const result = translateEnglishToMorse();
      expect(result).toBe("invalid input")
    })
  });


  // tests for morse to english

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
    const result = translateMorseToEnglish(
      ".-. . ...- --- .-.. ..- - .. --- -. .- .-. .. . ..."
    );
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
    const result = translateMorseToEnglish(
      ".. / .-- .- -. - / .--. .. --.. --.. .-"
    );
    expect(result).toBe("i want pizza");
  });
  it("You are quirky should translate correctly to english", () => {
    const result = translateMorseToEnglish(
      "-.-- --- ..- / .- .-. . / --.- ..- .. .-. -.- -.--"
    );
    expect(result).toBe("you are quirky");
  });
  it("Never mind what he says should translate correctly to english", () => {
    const result = translateMorseToEnglish(
      "-. . ...- . .-. / -- .. -. -.. / .-- .... .- - / .... . / ... .- -.-- ..."
    );
    expect(result).toBe("never mind what he says");
  });
});
