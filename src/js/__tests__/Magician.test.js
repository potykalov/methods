import Magician from "../Magician.js";

describe("Magician", () => {
  it("return object of character Magician", () => {
    const expected = {
      name: "Anton",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    const received = new Magician("Anton");

    expect(received).toEqual(expected);
  });
});
