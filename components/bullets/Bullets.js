const Graphics = PIXI.Graphics;

class Bullets {
  constructor({ app, sprite }) {
    this.app = app;
    this.sprite = sprite;
    this.bulletSpeed = 10;
    this.bullets = [];
    this.bullet = null;
  }
  createBullet() {
    this.bullet = new Graphics();
    this.bullet.lineStyle(5, 0xffea00, 1).moveTo(30, -20).lineTo(30, 0);
    this.bullet.x = this.sprite.x;
    this.bullet.y = this.sprite.y;
    this.bullet.speed = this.bulletSpeed;
    this.app.stage.addChild(this.bullet);
    this.bullets.push(this.bullet);
    // console.log(this.bullet);
    return this.bullet;
  }
}
export default Bullets;
