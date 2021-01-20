import { getScoreLocalStorage } from '../LocalStorage';
import { RankingBox } from './RankingBox';

class MainMenu {
  constructor(id, content, gameModeIndex, rankingBox) {
    this.content = content;
    this.gameModeIndex = gameModeIndex;
    this.render(id, content);
    this.underscores = document.querySelectorAll('.mainMenu > div > div');
    this.rankingBox = rankingBox;
  }

  btnIndex(index, btns) {
    this.removeClasses(btns);
    this.addClasses(index, btns);
    this.gameMode(index);
    this.scores = getScoreLocalStorage(this.gameModeIndex);
    this.rankingBox = new RankingBox('ranking-box', this.scores);
  };

  removeClasses(btns) {
    this.underscores.forEach(un => un.classList.remove('mainMenuActive'));
    btns?.forEach(btn => btn.classList.remove('black'));
  };

  addClasses(index, btns) {
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

