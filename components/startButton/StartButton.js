const Graphics = PIXI.Graphics;

class StartButton {
  constructor({ app, game }) {
    this.app = app;
    this.game = game;
    this.button = new Graphics();
    this.audioFonMusic = new Audio("/audio/fonMusic.mp3");
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
    this.startGame.interactive = true;
    this.startGame.buttonMode = true;

    this.styleText1 = new PIXI.TextStyle({
      fontFamily: "Monserrat",
      FontSize: 14,
      fill: "yellow",
    });
    this.instructionStart = new PIXI.Text(
      "To start the game, press the `s` key on your keyboard or click by mouse on the button `START GAME`",
      this.styleText1
    );

    this.instructionStart.x = this.widthCanvas / 2 - 540;
    this.instructionStart.y = this.heightCanvas / 2 + 80;

    this.clickButton = this.clickButton.bind(this);
    this.onClick = this.onClick.bind(this);
    window.addEventListener("keydown", this.clickButton);
    this.button.on("pointerdown", this.onClick);
    this.startGame.on("pointerdown", this.onClick);
  }
  onClick() {
    this.game.startLevel1();
    this.app.stage.removeChild(this.button);
    this.app.stage.removeChild(this.startGame);
    this.app.stage.removeChild(this.instructionStart);
    this.audioFonMusic.play();
    this.removeButtonListener();
  }

  addButton() {
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
    this.app.stage.addChild(this.instructionStart);
  }
  removeButtonListener() {
    window.removeEventListener("keydown", this.clickButton);
  }
  clickButton(e) {
    if (e.keyCode === 83) {
      this.app.stage.removeChild(this.button);
      this.app.stage.removeChild(this.startGame);
      this.app.stage.removeChild(this.instructionStart);
      this.audioFonMusic.play();
      this.removeButtonListener();
    }
  }
}

export default StartButton;
