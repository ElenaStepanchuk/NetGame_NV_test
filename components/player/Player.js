import Canvas from "../canvas/Canvas.js";

class Player extends Canvas {
  constructor({ app, spritePath, width, height, y }) {
    super(app);
    this.sprite = PIXI.Sprite.from(spritePath);
    this.sprite.width = width;
    this.sprite.height = height;
    this.sprite.x = this.app.screen.width / 2 - 15;
    this.sprite.y = y;
    this.sprite.interactive = true;
  }

  addPlayer() {
    this.app.stage.addChild(this.sprite);
  }
}
export default Player;
