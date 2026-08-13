import Undead from "../Undead.js";

describe("Undead", () => {
  it("return object of character Undead", () => {
    const expected = {
      name: "Kirill",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    const received = new Undead("Kirill");

    expect(received).toEqual(expected);
  });
});
