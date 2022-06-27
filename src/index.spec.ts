import { solution, removeCenterChars } from ".";

describe("solution", () => {
  it("should end with remaining letters", () => {
    expect(solution("ACCAABBC")).toBe("AC");
  });

  it("should end with initial string", () => {
    expect(solution("BABABA")).toBe("BABABA");
  });

  it("should end with no remaining letters", () => {
    expect(solution("CACCAABBAC")).toBe("");
  });
});

describe("removeCenterChars", () => {
  it("should work", () => {
    expect(removeCenterChars("ACCA", 1, 3)).toBe("AA");
  });
});
