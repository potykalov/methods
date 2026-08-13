import "core-js";

import Character from "./js/Character.js";
import Bowerman from "./js/Bowerman.js";
import Daemon from "./js/Daemon.js";
import Magician from "./js/Magician.js";
import Swordsman from "./js/Swordsman.js";
import Undead from "./js/Undead.js";
import Zombie from "./js/Zombie.js";

const char = new Character("Dmitriy", "Bowman");
const bowerman = new Bowerman("Dmitriy");
const daemon = new Daemon("Mark");
const magician = new Magician("Anton");
const swordsman = new Swordsman("Sergey");
const undead = new Undead("Kirill");
const zombie = new Zombie("Max");

console.log(char);
console.log(bowerman);
console.log(daemon);
console.log(magician);
console.log(swordsman);
console.log(undead);
console.log(zombie);
