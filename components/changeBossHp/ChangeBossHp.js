const Graphics = PIXI.Graphics;
class ChangeBossHp {
  constructor({ deadedBoss, app }) {
    this.app = app;
    this.deadedBoss = deadedBoss;
    this.deadedBossHpWin = new Graphics();
  }
  changeHp() {
    if (this.deadedBoss === 1) {
      this.deadedBossHpWin = new Graphics();
      this.deadedBossHpWin
        .lineStyle(10, 0x00ff00, 1)
        .moveTo(1000, 35)
        .lineTo(1050, 35);
      this.app.stage.addChild(this.deadedBossHpWin);
    } else if (this.deadedBoss === 2) {
      this.deadedBossHpWin = new Graphics();
      this.deadedBossHpWin
        .lineStyle(10, 0x00ff00, 1)
        .moveTo(1000, 35)
        .lineTo(1100, 35);
      this.app.stage.addChild(this.deadedBossHpWin);
    } else if (this.deadedBoss === 3) {
      this.deadedBossHpWin = new Graphics();
      this.deadedBossHpWin
        .lineStyle(10, 0x00ff00, 1)
        .moveTo(1000, 35)
        .lineTo(1150, 35);
      this.app.stage.addChild(this.deadedBossHpWin);
    }
    if (this.deadedBoss === 4) {
      this.deadedBossHpWin = new Graphics();
      this.deadedBossHpWin
        .lineStyle(10, 0x00ff00, 1)
        .moveTo(1000, 35)
        .lineTo(1200, 35);
      this.app.stage.addChild(this.deadedBossHpWin);
    }
  }
}

export default ChangeBossHp;
