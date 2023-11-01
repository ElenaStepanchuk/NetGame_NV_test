import Shoot2 from "../shoot2/Shoot2.js";
import LooseGame from "../looseGame/LooseGame.js";
import WinGame from "../winGame/WinGame.js";

class Keyboard2 {
  constructor({ app, sprite, target }) {
    this.app = app;
    this.sprite = sprite;
    this.target = target;
    this.windowCount = 0;

    this.widthCanvas = 1280;
    this.audioSpiceShip = new Audio("../../audio/spiceShipShoot.mp3");
    this.targetShoot = null;

    this.shoot = new Shoot2({
      app: this.app,
      target: this.target,
      sprite: this.sprite,
      windowCount: this.windowCount,
    });

    this.handleKeyDown = this.handleKeyDown.bind(this);
    window.addEventListener("keydown", this.handleKeyDown);

    this.shootTimer = setInterval(() => {
      this.windowCount = this.windowCount + 1;
    }, 1000);

    this.shootBoss = setInterval(() => {
      if (
        (this.shoot.shootedValueBullet === 10 && this.shoot.deadedBoss < 4) ||
        this.shoot.deadedSprite === 1 ||
        this.windowCount > 60
      ) {
        this.app.stage.removeChild(this.sprite);
        this.app.stage.removeChild(this.target);
        const gameOwer = new LooseGame({ app: this.app });
        clearInterval(this.shootTimer);
        clearInterval(this.shootBoss);
        gameOwer.endGame();
        window.removeEventListener("keydown", this.handleKeyDown);
        return;
      } else if (
        this.shoot.deadedBoss === 4 &&
        this.shoot.shootedValueBullet <= 10 &&
        this.windowCount < 60
      ) {
        this.app.stage.removeChild(this.sprite);
        this.app.stage.removeChild(this.target);
        const gameWin = new WinGame({ app: this.app });
        clearInterval(this.shootTimer);
        clearInterval(this.shootBoss);
        gameWin.endGame();
        window.removeEventListener("keydown", this.handleKeyDown);
        return;
      } else {
        this.shoot.createBossBullets();
        this.shoot.shooting();
      }
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
      if (
        (this.shoot.shootedValueBullet === 10 && this.shoot.deadedBoss < 4) ||
        this.shoot.deadedSprite === 1 ||
        this.windowCount > 60
      ) {
        this.app.stage.removeChild(this.sprite);
        this.app.stage.removeChild(this.target);
        clearInterval(this.shootTimer);
        const gameOwer = new LooseGame({ app: this.app });
        gameOwer.endGame();
        window.removeEventListener("keydown", this.handleKeyDown);
        return;
      } else if (
        this.shoot.deadedBoss === 4 &&
        this.shoot.shootedValueBullet <= 10 &&
        this.windowCount < 60
      ) {
        this.app.stage.removeChild(this.sprite);
        this.app.stage.removeChild(this.target);
        const gameWin = new WinGame({ app: this.app });
        clearInterval(this.shootTimer);
        gameWin.endGame();
        window.removeEventListener("keydown", this.handleKeyDown);
        return;
      } else {
        this.audioSpiceShip.play();
        this.shoot.createShipBullets();
        this.shoot.shooting();
      }
    }
  }
}
export default Keyboard2;
