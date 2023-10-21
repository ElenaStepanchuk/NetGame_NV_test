// import StarsAnime from "../../components/starsAnime/StarsAnime.js";

class Canvas {
  constructor() {
    this.app = new PIXI.Application({
      width: 1280,
      height: 720,
      transparent: true,
      antialias: true,
    });
  }
  renderCanvas() {
    this.app.renderer.view.style.position = "absolute";
    document.body.appendChild(this.app.view);
  }
}

export default Canvas;
