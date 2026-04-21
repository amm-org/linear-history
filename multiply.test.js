import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { multiply } from "./multiply.js";

describe("multiply", () => {
  it("returns 1 with no arguments (empty product)", () => {
    assert.equal(multiply(), 1);
  });

  it("multiplies two numbers", () => {
    assert.equal(multiply(2, 3), 6);
  });

  it("multiplies many numbers", () => {
    assert.equal(multiply(1, 2, 3, 4, 5), 120);
  });
});
