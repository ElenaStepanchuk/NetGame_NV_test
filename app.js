const Application = PIXI.Application;
const widthCanvas = 1280;
const heightCanvas = 720;

import Ship from "./components/ship/Ship";

const app = new Application({
  width: widthCanvas,
  height: heightCanvas,
  transparent: true,
  antialias: true,
});
app.renderer.view.style.position = "absolute";
document.body.appendChild(app.view);

// const shipSpriteWidth = 60;
// const shipSpriteHeight = 140;

// function addingSpiceShip() {
//   const shipSprite = PIXI.Sprite.from("./images/spaceShip.png");
//   app.stage.addChild(shipSprite);
//   shipSprite.width = shipSpriteWidth;
//   shipSprite.height = shipSpriteHeight;
//   shipSprite.x = app.screen.width / 2 - 15;
//   shipSprite.y = 570;
//   shipSprite.interactive = true;
// }
// addingSpiceShip();
