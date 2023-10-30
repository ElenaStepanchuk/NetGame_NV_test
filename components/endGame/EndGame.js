import Text from "../text/Text.js";

class EndGame {
  constructor({ app, sprite, arrAsteroids }) {
    this.app = app;
    this.sprite = sprite;
    this.arrAsteroids = arrAsteroids;
    this.styleText = new PIXI.TextStyle({
      fontFamily: "Monserrat",
      FontSize: 48,
      fill: "deepskyblue",
      stroke: "#ffffff",
      strokeThickness: 4,
      dropShadow: true,
      dropShadowDistance: 10,
      dropShadowAngle: Math.PI / 2,
      dropShadowBlur: 4,
      dropShadowColor: "#000000",
    });
    this.widthCanvas = 1280;
    this.heightCanvas = 720;
    this.windowMessage = null;
  }
  endGame() {
    this.endGame = new PIXI.Text("YOU   LOOSE", this.styleText);
    this.windowMessage = new Text({
      app: this.app,
      text: this.endGame,
      x: this.widthCanvas / 2 - 60,
      y: this.heightCanvas / 2,
    });

    this.windowMessage.addText();
  }
}
export default EndGame;
