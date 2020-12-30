import Button from './Button';

class WhiteButton extends Button {
  constructor(id, content, styleName) {
    super(id, content, styleName);
  }

  addIcon(iconPath) {
    const icon = document.createElement('img');
    icon.setAttribute('src', iconPath);
    const container = document.querySelector(`#${this._id}`);
    const button = container.getElementsByTagName('button');
    button.item(0).insertBefore(icon, button.item(0).firstChild);
  }
}

export default WhiteButton;