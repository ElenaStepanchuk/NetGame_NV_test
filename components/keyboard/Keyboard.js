import Shoot from "../shoot/Shoot.js";
import Asteroid from "../asteroid/Asteroid.js";

class Keyboard {
  constructor({ app, sprite, arrAsteroids }) {
    this.app = app;
    this.sprite = sprite;
    this.arrAsteroids = arrAsteroids;
    this.widthCanvas = 1280;
    this.audioSpiceShip = new Audio("../../audio/spiceShipShoot.mp3");
    this.shoot = null;

    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    if (
      e.key === "ArrowRight" &&
      this.sprite.x < this.widthCanvas - this.sprite.width
    ) {
      this.sprite.x += 15;
    }
    if (e.key === "ArrowLeft" && this.sprite.x > 0) {
      this.sprite.x -= 15;
    }
    if (e.key === " ") {
      this.audioSpiceShip.play();

      this.shoot = new Shoot({
        app: this.app,
        arrAsteroids: this.arrAsteroids,
        sprite: this.sprite,
      });
      this.shoot.shooting();
    }
    console.log(this.arrAsteroids);
  }
}
export default Keyboard;
