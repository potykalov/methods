import Character from "../Character.js";

describe("Character", () => {
  it("return object of character", () => {
    const expected = {
      name: "Dmitriy",
      type: "Bowman",
      health: 100,
      level: 1,
    };
    const received = new Character("Dmitriy", "Bowman");

    expect(received).toEqual(expected);
  });

  it("returns an error when the name is shorter than 2 characters", () => {
    const expected = new Error("Имя короче 2 или длинее 10 букв");
    const received = () => {
      new Character("D", "Bowman");
    };

    expect(received).toThrow(expected);
  });

  it("returns an error if a missing type is passed", () => {
    const expected = new Error("Персонажа не существует");
    const received = () => {
      new Character("Dmitriy", "Batman");
    };

    expect(received).toThrow(expected);
  });
});
