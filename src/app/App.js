import Box from './components/Box';
import MainMenu from './components/MainMenu';
import Button from './components/Button';
import Picture from './components/Picture';
import { RankingBox } from './components/RankingBox';
import WhiteButton from './components/WhiteButton';
import Modal from './components/Modal';
import Timer from './components/Timer';
import Rules from './components/Rules';
import QuestionAnswers from './components/QuestionAnswers';
import Logo from './components/Logo';
import Playground from './components/Playground';
import { initialGMIndex } from "./tools/constants";
import { whiteBtnText } from "./tools/constants";
class App {
  constructor(options) {
    this.playground = new Playground('swquiz-app');
    this.logo = new Logo('logo');
    this.box = new Box('box');
    this.button = new Button('button', 'play the game', 'play-button');
    const scores = [{player: "Anna", correctAnswers: 10, allAnswers:20},{player: "Kamil", correctAnswers: 7, allAnswers:20}, {player: "Ela", correctAnswers: 3, allAnswers:20}];
    this.rankingBox = new RankingBox('ranking-box', scores );
    this.modal = new Modal('modalBox');
    this.mainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], initialGMIndex);
    this.picture = new Picture('picture');
    this.whiteButton = new WhiteButton('whiteButton', whiteBtnText[0], 'whiteButton');
    this.whiteButton.addIcon('../../static/assets/ui/hof.svg');

    this.whiteBtn = document.querySelector('.whiteButton');
    this.whiteBtn.addEventListener('click', () => {
      const whiteBtnContent = document.querySelector('.whiteButton span');
      const whiteBtnIcon = document.querySelector('.whiteButton img');
      const rulesElement = document.querySelector('#rules');
      const rankingElement = document.querySelector('#ranking-box');

      if (whiteBtnContent.textContent === whiteBtnText[0]) {
        whiteBtnContent.textContent = whiteBtnText[1];
        whiteBtnIcon.setAttribute('src', '../../static/assets/ui/school.svg');
        rulesElement.style.display = "none";
        rankingElement.style.display = "flex";
      } else {
        whiteBtnContent.textContent = whiteBtnText[0];
        whiteBtnIcon.setAttribute('src', '../../static/assets/ui/hof.svg');
        rankingElement.style.display = "none";
        rulesElement.style.display = "flex";
      };
    });

    this.rules = new Rules('Mode Rules', 'rules');
    this.btns = document.querySelectorAll('.mainMenu > div > button');
    this.mainMenuPanel.addClasses(this.mainMenuPanel.gameModeIndex, this.btns);
    this.questionAnswers = new QuestionAnswers('#answers', ['Luke Skywalker', 'Jar Jar Binks', 'Padme Amidala', 'Darth Vader'], 'Darth Vader')
    const time = 80;
    this.timer = new Timer(time,'timer-box');
    setInterval(() => {
      this.timer.decrement()
    }, 1000);
    this.btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.mainMenuPanel.btnIndex(index, this.btns);
        this.rules.handleRulesContent(index);
        this.box.handleBoxContent(index);
        this.picture.handleExemplaryPicture(index);
      });
    })
  }
}

export default App

