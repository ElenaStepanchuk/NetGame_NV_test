import Shoot from "../shoot/Shoot.js";

class Keyboard {
  constructor({ app, sprite, bullets }) {
    this.app = app;
    this.sprite = sprite;
    this.bullets = bullets;
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
        // bullets: this.bullets,
        sprite: this.sprite,
      });
      this.shoot.shooting();
    }
  }
}
export default Keyboard;
