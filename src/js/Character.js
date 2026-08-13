class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя короче 2 или длинее 10 букв");
    }

    if (
      type !== "Bowman" &&
      type !== "Swordsman" &&
      type !== "Magician" &&
      type !== "Daemon" &&
      type !== "Undead" &&
      type !== "Zombie"
    ) {
      throw new Error("Персонажа не существует");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

export default Character;
