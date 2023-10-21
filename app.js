import Canvas from "./components/canvas/Canvas.js";
import Player from "./components/player/Player.js";
import Asteroid from "./components/asteroid/Asteroid.js";

const addCanvas = new Canvas();
addCanvas.renderCanvas();

const ship = new Player({
  spritePath: "./images/spaceShip.png",
  width: 60,
  height: 140,
  y: 570,
});
ship.addPlayer();

const asteroid = new Asteroid();
asteroid.createArrayAsteroids();

// //////////////////////////////////
// const Application = PIXI.Application;
// const widthCanvas = 1280;
// const heightCanvas = 720;

// const app = new Application({
//   width: widthCanvas,
//   height: heightCanvas,
//   transparent: true,
//   antialias: true,
// });

// app.renderer.view.style.position = "absolute";
// document.body.appendChild(app.view);

// function addingSpiceShip() {
//   const shipSprite = PIXI.Sprite.from("./images/spaceShip.png");
//   app.stage.addChild(shipSprite);
//   shipSprite.width = 60;
//   shipSprite.height = 140;
//   shipSprite.x = app.screen.width / 2 - 15;
//   shipSprite.y = 570;
//   shipSprite.interactive = true;
//   console.log(
//     shipSprite,
//     shipSprite.width,
//     shipSprite.height,
//     shipSprite.x,
//     shipSprite.y,
// app
//   );
// }
// addingSpiceShip();
// /////////////////////////////////////////////////
