const weapons = [
  "Пистолет",
  "Пистолет-Пулемет",
  "Дробовик",
  "Винтовка",
  "Снайперская Винтовка",
  "Пулемет",
];
class Player {
  constructor(name, skinColor) {
    this.name = name;
    this.level = 1;
    this.exp = 100;
    this.id = +String(Date.now()).slice(8, Infinity);
    this.lvlUpCondition = 100;
    this.weapon = weapons[0];
    this.kill = this.alive = false;
    this.skinColor = skinColor;
    this.alive = true;
  }

  showKill(kill) {
    this.alive = false;
    console.log(this.alive);
  }

showAlive(){
  console.log(this.alive);
}

  showExp() {
    console.log("здоровье: " + this.exp);
  }

  showName() {
    console.log("имя: " + this.name);
  }

  showLvl() {
    console.log(`Ваш уровень: ${this.level}`);
  }

  upWeapon(i) {
    this.weapon = weapons[i];
  }

  showWeapon() {
    console.log("ваше оружие: " + this.weapon);
  }

  showSkin() {
    console.log(`Цвет кожи: ${this.skinColor}`);
  }

  levelUpgrade(givenExp) {
    this.exp += givenExp;
    if (this.exp >= this.lvlUpCondition) {
      this.lvlUpCondition *= 2;
      console.log("Upgrade lvl");
      ++this.level;
    }
  }
}

const Franklin = new Player("Franklin", "black");
Franklin.showName();
Franklin.showExp();
Franklin.showAlive();
Franklin.levelUpgrade(100);
Franklin.showLvl();
Franklin.upWeapon(3);
Franklin.showWeapon();
Franklin.showSkin();
Franklin.showExp();
Franklin;

const Michael = new Player("Michael", "white");
Michael.showName();
Michael.showExp();
Michael.showLvl();
Michael.levelUpgrade(100);
Michael.showLvl();
Michael;

const Trevor = new Player("Trevor", "white");

Trevor;
Trevor.showName();
Trevor.showExp();
Trevor.showLvl();
Trevor.levelUpgrade(100);
Trevor.showLvl();
