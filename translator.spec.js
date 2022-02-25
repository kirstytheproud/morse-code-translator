import { translateEnglishToMorse } from "./translator.js";
import { expect, it, describe } from "@jest/globals";

describe("translate words from english to morse", () => {
  // positive test case for a single word
  it("walk should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("walk");
    expect(result).toBe(".-- .- .-.. -.-");
  });

  // positive tests for a single letter

  // positive tests for multiple words

  // negative tests for edge cases
});

describe("translates morse code to english", () => {});