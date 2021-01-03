import { rulesContent } from "../tools/constants";

class Rules {
  constructor(content, id) {
    this.rulesContent = rulesContent;
    this.render(content, id);
  }
  contentRender(content, id) {
    const container = document.querySelector(`#${id}`);
    const rulesHeader = document.createElement('div');
    const icon = document.createElement('img');
    icon.setAttribute('src', '../static/assets/ui/school.svg');
    rulesHeader.appendChild(icon);
    const ButtonTittle = document.createElement('span');
    const text = rulesHeader.appendChild(ButtonTittle);
    text.innerHTML = content;
    container.appendChild(rulesHeader);
    const modeRules = document.createElement('p');
    container.appendChild(modeRules);
    modeRules.textContent = this.rulesContent[0];
  }

  handleRulesContent(index) {
    const rulesContainer = document.querySelector('#rules p');
    rulesContainer.textContent = rulesContent[index];
  }
  render(content, id) {
    this.contentRender(content, id);
  }
}

export default Rules;