import Box from './components/Box';
import MainMenu from './components/MainMenu';
import Button from './components/Button';
import { RankingBox } from './components/RankingBox';
import WhiteButton from './components/WhiteButton';
import Modal from './components/Modal';
import Timer from './components/Timer';
import Rules from './components/Rules';
import GameOverScreen from './components/ModalContent';
class App {
  constructor(options) {
    this.box = new Box('MODE: who is this character', 'box');
    this.button = new Button('button', 'play the game', 'play-button');
    const scores = [{player: "Anna", correctAnswers: 10, allAnswers:20},{player: "Kamil", correctAnswers: 7, allAnswers:20}, {player: "Ela", correctAnswers: 3, allAnswers:20}];
    this.rankingBox = new RankingBox('ranking-box', scores );
    this.modal = new Modal('modalBox');

    const answers = [{
      questionPicture: "../../static/assets/img/modes/people/1.jpg",
      playerAnswer: "DarthVader",
      computerAnswer: "Darth Father",
      correctAnswer: "Luke Skywalker",
      playerAnswerIsCorrect: false,
      computerAnswerIsCorrect: false,
    },
    {
      questionPicture: '../../static/assets/img/modes/people/36.jpg',
      playerAnswer: "Jar Jar Binks",
      computerAnswer: "Jar Jar Binks",
      correctAnswer: "Jar Jar Binks",
      playerAnswerIsCorrect: true,
      computerAnswerIsCorrect: true,
    },
    ];
    const closeWindow = (name, punctation) => {
      console.log(name, punctation);
      this.modal.closeModal();
    };
    this.gameOverScreen = new GameOverScreen(answers, closeWindow, 'modalBox');
    
    this.mainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], 0);
    this.whiteButton = new WhiteButton('whiteButton', 'Hall of fame', 'whiteButton');
    this.whiteButton.addIcon('../../static/assets/ui/hof.svg');
    this.rules = new Rules('Mode Rules', 'rules');
    this.btns = document.querySelectorAll('.mainMenu > div > button');
    this.mainMenuPanel.addClasses(this.mainMenuPanel.gameModeIndex, this.btns);
    const time = 80;
    this.timer = new Timer(time,'timer-box');
    setInterval(() => {
      this.timer.decrement()
    }, 1000);
    this.btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.mainMenuPanel.btnIndex(index, this.btns);
        this.rules.handleRulesContent(index);
      });
    })
  }
}

export default App
