class StarsAnime {
  constructor({ app }) {
    this.app = app;
    this.starTexture = PIXI.Texture.from("./images/star.png");

    this.starAmount = 1000;
    this.cameraZ = 0;
    this.fov = 20;
    this.baseSpeed = 0.025;
    this.speed = 0;
    this.warpSpeed = 0;
    this.starStretch = 5;
    this.starBaseSize = 0.05;

    this.stars = [];

    this.init();
  }

  init() {
    this.app.renderer.background.color = 0x292929;

    for (let i = 0; i < this.starAmount; i++) {
      const star = {
        sprite: new PIXI.Sprite(this.starTexture),
        z: 0,
        x: 0,
        y: 0,
      };
      star.sprite.anchor.x = 0.5;
      star.sprite.anchor.y = 0.7;
      this.randomizeStar(star, true);
      this.app.stage.addChild(star.sprite);
      this.stars.push(star);
    }

    document.body.appendChild(this.app.view);

    this.app.ticker.add((delta) => {
      this.update(delta);
    });
  }

  randomizeStar(star, initial) {
    star.z = initial
      ? Math.random() * 2000
      : this.cameraZ + Math.random() * 1000 + 2000;

    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;
    star.x = Math.cos(deg) * distance;
    star.y = Math.sin(deg) * distance;
  }

  update(delta) {
    this.speed += (this.warpSpeed - this.speed) / 20;
    this.cameraZ += delta * 10 * (this.speed + this.baseSpeed);

    for (let i = 0; i < this.starAmount; i++) {
      const star = this.stars[i];
      if (star.z < this.cameraZ) this.randomizeStar(star);

      const z = star.z - this.cameraZ;
      star.sprite.x =
        star.x * (this.fov / z) * this.app.renderer.screen.width +
        this.app.renderer.screen.width / 2;
      star.sprite.y =
        star.y * (this.fov / z) * this.app.renderer.screen.width +
        this.app.renderer.screen.height / 2;

      const dxCenter = star.sprite.x - this.app.renderer.screen.width / 2;
      const dyCenter = star.sprite.y - this.app.renderer.screen.height / 2;
      const distanceCenter = Math.sqrt(
        dxCenter * dxCenter + dyCenter * dyCenter
      );
      const distanceScale = Math.max(0, (2000 - z) / 2000);
      star.sprite.scale.x = distanceScale * this.starBaseSize;
      star.sprite.scale.y =
        distanceScale * this.starBaseSize +
        (distanceScale * this.speed * this.starStretch * distanceCenter) /
          this.app.renderer.screen.width;
      star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
    }
  }
}

export default StarsAnime;
