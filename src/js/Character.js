class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя короче 2 или длинее 10 букв");
    }

    if (
      type !== "Bowerman" &&
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
    this.attack = 25;
    this.defence = 25;
  }

  levelUp() {
    if (this.health < 0) {
      throw new Error("Нельзя повысить левел умершего");
    }

    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export default Character;
