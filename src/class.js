class Car {
  speed = 10;
  posX = 0;

  wheels;

  constructor(wheels) {
    this.wheels = wheels;
  }

  move() {
    // i = i - 1
    // i--
    for (var i = 20; i >= 0; i--) {
      console.log(i);
      this.posX += i;
    }
  }
}

class Ferarri extends Car {
  speed = 40;

  constructor() {
    super(4);
  }
}

const car = new Car(4);
const car2 = new Ferarri();

car.move();

car.wheels; // 4

car.move();
car.speed;
car2.speed; // 40
