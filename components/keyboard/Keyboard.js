import Shoot from "../shoot/Shoot.js";
import LooseGame from "../looseGame/LooseGame.js";
import Text from "../text/Text.js";

class Keyboard {
  constructor({ app, sprite, arrAsteroids }) {
    this.app = app;
    this.sprite = sprite;
    this.arrAsteroids = arrAsteroids;
    this.windowCount = 0;

    this.widthCanvas = 1280;
    this.win = 0;

    this.shoot = new Shoot({
      app: this.app,
      arrAsteroids: this.arrAsteroids,
      sprite: this.sprite,
      windowCount: this.windowCount,
    });

    this.styleText = new PIXI.TextStyle({
      fontFamily: "Monserrat",
      FontSize: 14,
      fill: "yellow",
    });
    this.endGame = new PIXI.Text(
      "To start the game width boss, press the `b` key on your keyboard",
      this.styleText
    );
    this.widthCanvas = 1280;
    this.heightCanvas = 720;
    this.windowMessage = null;

    this.handleKeyDown = this.handleKeyDown.bind(this);
    window.addEventListener("keydown", this.handleKeyDown);

    this.shootTimer = setInterval(() => {
      this.windowCount = this.windowCount + 1;
    }, 1000);
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
        (this.shoot.shootedValueBullet === 10 &&
          this.shoot.deadedAsteroid < 7) ||
        this.windowCount > 60
      ) {
        this.app.stage.removeChild(this.sprite);
        for (let i = 0; i < 7; i++) {
          this.app.stage.removeChild(this.arrAsteroids[i]);
        }
        clearInterval(this.shootTimer);
        const gameOwer = new LooseGame({ app: this.app });
        gameOwer.endGame();
        window.removeEventListener("keydown", this.handleKeyDown);
        return;
      } else if (
        this.shoot.shootedValueBullet <= 10 &&
        this.shoot.deadedAsteroid === 7 &&
        this.windowCount < 60
      ) {
        this.app.stage.removeChild(this.sprite);
        for (let i = 0; i < 7; i++) {
          this.app.stage.removeChild(this.arrAsteroids[i]);
        }
        clearInterval(this.shootTimer);
        this.shoot.ValueTextShootedBullet.removeText();
        this.shoot.ValueTextDeadAsteroid.removeText();
        this.win++;
        this.addTextNextPlay();
        return;
      } else {
        this.shoot.createShipBullets();
        this.shoot.shooting();
      }
    }
  }

  addTextNextPlay() {
    if (this.win === 1) {
      this.windowMessage = new Text({
        app: this.app,
        text: this.endGame,
        x: this.widthCanvas / 2 - 340,
        y: this.heightCanvas / 2,
      });
      this.app.stage.removeChild(this.sprite);
      for (let i = 0; i < 7; i++) {
        this.app.stage.removeChild(this.arrAsteroids[i]);
      }
      this.windowMessage.addText();
    }
  }
}
export default Keyboard;
