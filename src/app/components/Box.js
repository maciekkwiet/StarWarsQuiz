class Box {
  constructor(content, id) {
    this.render(content, id);
  }

  contentRender(content, id) {
    const container = document.querySelector(`#${id}`);
    const boxContent = document.createElement('span');
    const text = container.appendChild(boxContent);
    text.innerHTML = content;
  }

  render(content, id) {
    this.contentRender(content, id);
  }
}

export default Box;


