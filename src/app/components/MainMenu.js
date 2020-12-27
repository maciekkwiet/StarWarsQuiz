class MainMenu {
  constructor(id, content, gameModeIndex) {
    this.content = content;
    this.gameModeIndex = gameModeIndex;
    this.render(id, content);
    this.underscores = document.querySelectorAll('.mainMenu > div > div');
    this.addClasses(gameModeIndex)
  }

  btnIndex(index) {
    this.removeClasses(index);
    this.addClasses(index);
    this.gameMode(index);
  };

  removeClasses(index) {
    const btns = document.querySelectorAll('.mainMenu > div > button');
    this.underscores.forEach(un => un.classList.remove('mainMenuActive'));
    btns?.forEach(btn => btn.classList.remove('black'));
  };

  addClasses(index) {
    const btns = document.querySelectorAll('.mainMenu > div > button');
    this.underscores[index].classList.add('mainMenuActive');
    btns ? btns[index].classList.add('black') : null;
  };

  renderContent(id, content) {
    const mainMenuContainer = document.querySelector(`#${id}`);
    mainMenuContainer.classList.add('mainMenu');
    for (let i = 0; i < content.length; i++) {
      let modeContainer = document.createElement('div');
      const btn = modeContainer.appendChild(document.createElement('button'));
      modeContainer.appendChild(document.createElement('div'));
      mainMenuContainer.appendChild(modeContainer);
      btn.textContent = content[i];
      btn.addEventListener('click', () => this.btnIndex);
    }
  }

  gameMode(index) {
    this.gameModeIndex = index;
  }

  render(id, content) {
    this.renderContent(id, content);
  }
}

export default MainMenu
