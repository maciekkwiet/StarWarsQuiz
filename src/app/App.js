import Box from './components/Box';
import MainMenu from './components/MainMenu';
import Button from './components/Button';
import Picture from './components/Picture';
import { RankingBox } from './components/RankingBox';
import WhiteButton from './components/WhiteButton';
import Modal from './components/Modal';
import Timer from './components/Timer';
import Lightsaber from './components/lightsaber';
import Rules from './components/Rules';
import Logo from './components/Logo';
import Playground from './components/Playground';
import Question from './components/Question';
import { 
  initialGMIndex,
  whiteBtnText,
  playBtnText,
  scores,
  mainMenuNames 
} from './constants';

class App {
  constructor(options) {
    this.time = 80;
    this.numberOfQuestions = 4;

    this.playground = new Playground('swquiz-app');
    this.logo = new Logo('logo');
    this.box = new Box('box');
    this.button = new Button('button', playBtnText, 'play-button');
    this.rankingBox = new RankingBox('ranking-box', scores);
    this.modal = new Modal('modalBox');
    this.rules = new Rules('Mode Rules', 'rules');
    this.mainMenuPanel = new MainMenu(
      'mainMenu',
      mainMenuNames,
      initialGMIndex,
    );
    this.picture = new Picture('picture');
    this.whiteButton = new WhiteButton(
      'whiteButton',
      whiteBtnText[0],
      'whiteButton',
    );

    this.whiteBtn = document.querySelector('.whiteButton');
    this.btns = document.querySelectorAll('.mainMenu > div > button');
    this.playBtn = document.querySelector('.play-button');

    this.whiteButton.addIcon('../../static/assets/ui/hof.svg');
    this.mainMenuPanel.addClasses(this.mainMenuPanel.gameModeIndex, this.btns);

    this.btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.mainMenuPanel.btnIndex(index, this.btns);
        this.rules.handleRulesContent(index);
        this.box.handleBoxContent(index, false);
        this.picture.handleExemplaryPicture(index);
      });
    });

    this.whiteBtn.addEventListener('click', () => {
      this.rulesContent()
    });

    this.playBtn.addEventListener('click', () => {
      this.renderGame()
    });
  }

  rulesContent() {
    const whiteBtnContent = document.querySelector('.whiteButton span');
    const whiteBtnIcon = document.querySelector('.whiteButton img');
    const rulesElement = document.querySelector('#rules');
    const rankingElement = document.querySelector('#ranking-box');

    if (whiteBtnContent.textContent === whiteBtnText[0]) {
      whiteBtnContent.textContent = whiteBtnText[1];
      whiteBtnIcon.setAttribute('src', '../../static/assets/ui/school.svg');
      rulesElement.style.display = 'none';
      rankingElement.style.display = 'flex';
    } else {
      whiteBtnContent.textContent = whiteBtnText[0];
      whiteBtnIcon.setAttribute('src', '../../static/assets/ui/hof.svg');
      rankingElement.style.display = 'none';
      rulesElement.style.display = 'flex';
    }
  }

  async renderGame() {
    const question = new Question(this.mainMenuPanel.gameModeIndex, this.numberOfQuestions);

    const whiteButton = document.getElementById('whiteButton');
    const rules = document.getElementById('rules');
    const rankingBox = document.getElementById('ranking-box');
    const playButton = document.getElementById('button');
    const quizPicture = document.getElementsByClassName('quiz__picture')[0];

    whiteButton.style.display = 'none';
    rules.style.display = 'none';
    rankingBox.style.display = 'none';
    playButton.style.display = 'none';

    this.box.handleBoxContent(this.mainMenuPanel.gameModeIndex, true);

    await question.getQuestionData().then(() => {
      const questionData = question.questionData;
      quizPicture.setAttribute('src', atob(questionData.image));
    });

    this.timer = new Timer(this.time,'timer-box');
    this.lightsaber = new Lightsaber(this.time, 'saber');

    setInterval(() => {
      this.timer.decrement();
      this.lightsaber.progress(this.time);
    }, 1000);
  }
  
  isAnswerCorrect (correctAnswer, playerAnswer) {
    return correctAnswer === playerAnswer;
  }
}

export default App;