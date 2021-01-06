import { boxContent } from "../tools/constants";
import { initialGMIndex } from "../tools/constants";


class Box {
  constructor(id) {
    this.render(id);
  }

  contentRender(id) {
    const container = document.querySelector(`#${id}`);
    const content = document.createElement('span');
    container.appendChild(content);
    content.textContent = boxContent[initialGMIndex];

  }
  handleBoxContent(index) {
    const content = document.querySelector('#box span');
    content.textContent = boxContent[index];
  }

  render(id) {
    this.contentRender(id);
  }
}

export default Box;


