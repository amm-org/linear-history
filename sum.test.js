import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { sum } from "./sum.js";

describe("sum", () => {
  it("returns 0 with no arguments", () => {
    assert.equal(sum(), 0);
  });

  it("adds two numbers", () => {
    assert.equal(sum(2, 3), 5);
  });

  it("adds many numbers", () => {
    assert.equal(sum(1, 2, 3, 4, 5), 15);
  });
});
