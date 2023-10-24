class Text {
  constructor({ app, text, x, y }) {
    this.app = app;
    this.text = text;
    this.text.x = x;
    this.text.y = y;
  }
  addText() {
    this.app.stage.addChild(this.text);
  }
  removeText() {
    this.app.stage.removeChild(this.text);
  }
}
export default Text;
