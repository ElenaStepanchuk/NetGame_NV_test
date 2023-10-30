class Player {
  constructor({ app, spritePath, width, height, y, x }) {
    this.app = app;
    this.sprite = PIXI.Sprite.from(spritePath);
    this.sprite.width = width;
    this.sprite.height = height;
    this.sprite.x = x;
    this.sprite.y = y;
    this.sprite.interactive = true;
  }

  addPlayer() {
    this.app.stage.addChild(this.sprite);
  }
}
export default Player;
