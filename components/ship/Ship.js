class Ship {
  constructor(imgPath, shipWidth, shipHeight, x, y) {
    this.shipSprite = PIXI.Sprite.from(imgPath);
    this.shipSprite.width = shipWidth;
    this.shipSprite.height = shipHeight;
    this.shipSprite.x = x;
    this.shipSprite.y = y;
    this.shipSprite.interactive = true;
  }

  // const shipSprite = PIXI.Sprite.from("../images/spaceShip.png");
  // app.stage.addChild(shipSprite);
  //   shipSprite.width = shipSpriteWidth;
  //   shipSprite.height = shipSpriteHeight;
  //   shipSprite.x = app.screen.width / 2 - 15;
  //   shipSprite.y = 570;
  //   shipSprite.interactive = true;
}
export default Ship;

// const shipSpriteWidth = 60;
// const shipSpriteHeight = 140;
// const shipSprite = new Ship(
//   "../images/spaceShip.png",
//   shipSpriteWidth,
//   shipSpriteHeight,
//   app.screen.width / 2 - 15,
//   570
// );
// app.stage.addChild(shipSprite);
