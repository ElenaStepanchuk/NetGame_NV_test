class Ship {
  constructor(imgPath, shipWidth, shipHeight, x, y) {
    this.shipSprite = app.stage.addChild(PIXI.Sprite.from(imgPath));
    this.shipSprite.width = shipWidth;
    this.shipSprite.height = shipHeight;
    this.shipSprite.x = x;
    this.shipSprite.y = y;
    this.shipSprite.interactive = true;
  }
}
export default Ship;
