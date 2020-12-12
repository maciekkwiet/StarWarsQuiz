export class MainMenu {
  constructor(id, content, gameModeIndex) {
    this.gameModeIndex = gameModeIndex,
      this.render(id, content);
  }

  renderContent(id, content) {
    const mainMenuContainer = document.querySelector(`#${id}`);
    mainMenuContainer.classList.add('mainMenu');
    for (let i = 0; i < 3; i++) {
      mainMenuContainer.appendChild(document.createElement('div'));
    }
    const modeContainers = document.querySelectorAll('.mainMenu > div');

    modeContainers.forEach(el => {
      el.appendChild(document.createElement('button'));
      el.appendChild(document.createElement('div'));
    });

    const underscores = document.querySelectorAll('.mainMenu >div > div');
    const btns = document.querySelectorAll('.mainMenu > div > button');

    btns.forEach((btn, index) => {
      btn.textContent = content[index];

      const btnIndex = () => {
        underscores.forEach(un => un.classList.remove('mainMenuActive'));
        btns.forEach(btn => btn.classList.remove('black'));
        underscores[index].classList.add('mainMenuActive');
        btns[index].classList.add('black');
        this.gameMode(index);
      };

      btn.addEventListener('click', btnIndex);
    });

  }

  gameMode(index) {
    this.gameModeIndex = index;
    console.log(this.gameModeIndex);
  };
  render(id, content) {
    this.renderContent(id, content);
  }
}

