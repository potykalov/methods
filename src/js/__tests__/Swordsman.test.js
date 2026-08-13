import Swordsman from "../Swordsman.js";

describe("Swordsman", () => {
  it("return object of character Swordsman", () => {
    const expected = {
      name: "Sergey",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    const received = new Swordsman("Sergey");

    expect(received).toEqual(expected);
  });
});
