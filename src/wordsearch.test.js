import {beforeEach, describe, test, expect} from "@jest/globals"

import wordsearch from './wordsearch'

const board = [
  ['u', 'n', 'i', 'x', 'o', 'h', 't', 'u'],
  ['m', 'm', 'k', 'g', 'i', 'y', 'p', 'h'],
  ['m', 'o', 'n', 'z', 'a', 'v', 'k', 'j'],
  ['l', 'e', 'p', 's', 'u', 'x', 'z', 'c'],
  ['k', 'h', 'x', 'g', 'd', 'n', 'y', 'r'],
  ['c', 'c', 'i', 'm', 'i', 'm', 'w', 'a'],
  ['y', 'd', 'x', 'a', 'o', 'p', 'r', 't'],
  ['w', 's', 'q', 'b', 'r', 'i', 'd', 's']
]

describe("wordsearch.horizontal", () => {
  test("returns true when word is contained in a row", () => {
    const result = wordsearch.horizontal(board, "word");
    expect(result).toBe(true);
  })
})
