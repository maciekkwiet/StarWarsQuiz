
export class Rules {
  constructor(content, id) {
    this.render(content, id);
  }
  contentRender(content, id) {
    const container = document.querySelector(`#${id}`);
    const rulesHeader = document.createElement('div');
    const icon = document.createElement('img');
    icon.setAttribute('src', '../static/assets/ui/school.svg');
    rulesHeader.appendChild(icon);
    const Content = document.createElement('span');
    const text = rulesHeader.appendChild(Content);
    text.innerHTML = content;
    container.appendChild(rulesHeader);
    const modeRules = document.createElement('p');
    container.appendChild(modeRules);
    modeRules.textContent = 'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.';
  }
  render(content, id) {
    this.contentRender(content, id);
  }
}

