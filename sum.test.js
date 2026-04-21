import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { soma } from "./sum.js";

describe("sum", () => {
  it("returns 0 with no arguments", () => {
    assert.equal(soma(), 0);
  });

  it("adds two numbers", () => {
    assert.equal(soma(2, 3), 5);
  });

  it("adds many numbers", () => {
    assert.equal(soma(1, 2, 3, 4, 5), 15);
  });
});
