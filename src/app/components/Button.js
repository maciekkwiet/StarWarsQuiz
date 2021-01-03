class Button {
  constructor(id, content, styleName) {
    this._id = id;
    this._content = content;
    this._styleName = styleName;
    this.render();
  }

  _renderContent() {
    const container = document.querySelector(`#${this._id}`);
    const content = document.createElement('span');
    const button = document.createElement('button');
    container.appendChild(button);
    button.appendChild(content);
    content.innerHTML = this._content;

    button.setAttribute('class', this._styleName);
  }

  render() {
    this._renderContent();
  }
}

export default Button;