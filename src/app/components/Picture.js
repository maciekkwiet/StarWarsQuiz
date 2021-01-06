import { exemplaryPicture } from "../tools/constants";
import { initialGMIndex } from "../tools/constants";

class Picture {
  constructor(id) {
    this.render(id);
  }

  contentRender(id) {
    const container = document.querySelector(`#${id}`);
    const pictureSrc = '../static/assets/img/modes/people/1.jpg';
    const picture = document.createElement('img');
    picture.classList.add('quiz__picture');
    picture.setAttribute('src', exemplaryPicture[initialGMIndex]);
    picture.setAttribute('alt', 'Photo from the Star Wars series');
    container.appendChild(picture);
  }
  handleExemplaryPicture(index) {
    const picture = document.querySelector('.quiz__picture');
    picture.setAttribute('src', exemplaryPicture[index]);
  }

  render(id) {
    this.contentRender(id);
  }
}

export default Picture;