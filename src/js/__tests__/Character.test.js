import Character from "../Character.js";

describe("Character", () => {
  it("return object of character", () => {
    const expected = {
      name: "Dmitriy",
      type: "Bowerman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    const received = new Character("Dmitriy", "Bowerman");

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

  it("increases the character's level", () => {
    const expected = {
      name: "Dmitriy",
      type: "Bowerman",
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    };
    const received = new Character("Dmitriy", "Bowerman");

    received.levelUp();

    expect(received).toEqual(expected);
  });

  it("deals damage, reducing health", () => {
    const expected = {
      name: "Dmitriy",
      type: "Bowerman",
      health: 85,
      level: 1,
      attack: 25,
      defence: 25,
    };
    const received = new Character("Dmitriy", "Bowerman");

    received.damage(20);

    console.log(received);

    expect(received).toEqual(expected);
  });
});
