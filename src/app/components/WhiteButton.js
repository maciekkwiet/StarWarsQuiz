class WhiteButton {
  constructor(content, id) {
    this.render(content, id);
  }

  contentRender(content, id) {
    const container = document.querySelector(`#${id}`);
    const icon = document.createElement('img');
    icon.setAttribute('src', '../static/assets/ui/hof.svg');
    container.appendChild(icon);
    const Content = document.createElement('span');
    const text = container.appendChild(Content);
    text.innerHTML = content;
  }

  render(content, id) {
    this.contentRender(content, id);
  }
}

export default WhiteButton;