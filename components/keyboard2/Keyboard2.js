import Shoot2 from "../shoot2/Shoot2.js";

class Keyboard2 {
  constructor({ app, sprite, target, windowCount }) {
    this.app = app;
    this.sprite = sprite;
    this.target = target;
    this.windowCount = windowCount;
    this.widthCanvas = 1280;
    this.audioSpiceShip = new Audio("../../audio/spiceShipShoot.mp3");
    this.killedTarget = 0;
    this.targetShoot = null;

    this.shoot = new Shoot2({
      app: this.app,
      target: this.target,
      sprite: this.sprite,
      windowCount: this.windowCount,
    });

    window.addEventListener("keydown", this.handleKeyDown.bind(this));

    setInterval(() => {
      this.shoot.createBossBullets();
      this.shoot.shooting();
    }, 2000);
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
      if (this.shoot.shootedValueBullet < 10) {
        this.audioSpiceShip.play();
      }

      this.shoot.createShipBullets();
      this.shoot.shooting();
    }
  }

  valueDeadTarget() {
    this.killedTarget = this.shoot.deadedTarget;
    console.log(this.killedTarget);
  }
}
export default Keyboard2;
