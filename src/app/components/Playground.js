class Playground {
  constructor(id) {
    this.render(id);
  }

  contentRender(id) {
    const playground = document.querySelector(`#${id}`);
    playground.classList.add('playground');

  }

  render(id) {
    this.contentRender(id);
  }
}

export default Playground;