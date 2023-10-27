import { describe, expect, test } from "bun:test";
import { isFalse, isTrue } from "./booleans";

describe("isTrue()", () => {
  test("`false` should return `false`", () => {
    expect(isTrue(false)).toBeFalse();
  });

  test("`true` should return `true`", () => {
    expect(isTrue(true)).toBeTrue();
  });
});

describe("isFalse()", () => {
  test("`false` should return `true`", () => {
    expect(isFalse(false)).toBeTrue();
  });
  test("`true` should return `false`", () => {
    expect(isFalse(true)).toBeFalse();
  });
});
