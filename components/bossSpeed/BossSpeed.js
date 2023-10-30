class BossSpeed {
  constructor({ target }) {
    this.target = target;
    this.windowCount = 0;
    setInterval(() => {
      this.windowCount = this.windowCount + 1;
    }, 1000);
    this.bossSpeed = 1;
    PIXI.Ticker.shared.add(this.gameLoop.bind(this));
  }
  targetSpeed() {
    if (this.windowCount < 9) {
      this.target.x += this.bossSpeed;
      return;
    } else if (this.windowCount > 10 && this.windowCount < 15) {
      this.target.x -= this.bossSpeed * 2;
      return;
    } else if (this.windowCount > 16 && this.windowCount < 19) {
      this.target.x += this.bossSpeed * 3;
      return;
    } else if (this.windowCount > 20 && this.windowCount < 24) {
      this.target.x -= this.bossSpeed * 2;
      return;
    } else if (this.windowCount > 25 && this.windowCount < 34) {
      this.target.x += this.bossSpeed;
      return;
    } else if (this.windowCount > 35 && this.windowCount < 40) {
      this.target.x -= this.bossSpeed * 2;
      return;
    } else if (this.windowCount > 41 && this.windowCount < 48) {
      this.target.x += this.bossSpeed;
      return;
    } else if (this.windowCount > 49 && this.windowCount < 56) {
      this.target.x -= this.bossSpeed;
      return;
    } else if (this.windowCount > 57 && this.windowCount < 60) {
      this.target.x += this.bossSpeed;
      return;
    }
  }

  gameLoop(delta) {
    this.targetSpeed(delta);
  }
}
export default BossSpeed;
