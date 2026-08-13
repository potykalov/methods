import Bowerman from "../Bowerman.js";

describe("Bowerman", () => {
  it("return object of character Bowman", () => {
    const expected = {
      name: "Dmitriy",
      type: "Bowman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    const received = new Bowerman("Dmitriy");

    expect(received).toEqual(expected);
  });
});
