const Graphics = PIXI.Graphics;

class StartButton {
  constructor({ app }) {
    this.app = app;
    this.button = new Graphics();
    this.widthCanvas = 1280;
    this.heightCanvas = 720;
    this.button.interactive = true;
    this.button.buttonMode = true;
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
    this.startGame = new PIXI.Text("START GAME", this.styleText);
    this.startGame.interactive = true;
    this.startGame.buttonMode = true;
    this.startGame.x = this.widthCanvas / 2 - 80;
    this.startGame.y = this.heightCanvas / 2 - 20;
  }

  addButton() {
    window.addEventListener("keydown", this.clickButton.bind(this));
    this.button
      .beginFill(0xffea00)
      .lineStyle(2, 0xffffff, 1)
      .drawRect(
        this.widthCanvas / 2 - 200,
        this.heightCanvas / 2 - 50,
        400,
        100
      )
      .endFill();
    this.app.stage.addChild(this.button);
    this.app.stage.addChild(this.startGame);
  }
  clickButton(e) {
    if (e.key === " ") {
      this.app.stage.removeChild(this.button);
      this.app.stage.removeChild(this.startGame);
    }
  }
}

export default StartButton;
