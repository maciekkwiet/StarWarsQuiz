import { boxContent, questionContent } from '../constants';
import { initialGMIndex } from '../constants';

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
  handleBoxContent(index, isQuestion) {
    const content = document.querySelector('#box span');
    isQuestion
      ? (content.textContent = questionContent[index])
      : (content.textContent = boxContent[index]);
  }

  render(id) {
    this.contentRender(id);
  }
}

export default Box;
