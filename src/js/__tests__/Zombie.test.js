import Zombie from "../Zombie.js";

describe("Undead", () => {
  it("return object of character Undead", () => {
    const expected = {
      name: "Max",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    const received = new Zombie("Max");

    expect(received).toEqual(expected);
  });
});
