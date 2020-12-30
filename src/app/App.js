import Box from './components/Box';
import MainMenu from './components/MainMenu';
import Button from './components/Button';
import { RankingBox } from './components/RankingBox';
import WhiteButton from './components/WhiteButton';
import Modal from './components/Modal';
class App {
  constructor(options) {
    this.box = new Box('MODE: who is this character', 'box');
    this.button = new Button('button', 'play the game', 'play-button');
    const scores = [{player: "Anna", correctAnswers: 10, allAnswers:20},{player: "Kamil", correctAnswers: 7, allAnswers:20}, {player: "Ela", correctAnswers: 3, allAnswers:20}];
    this.rankingBox = new RankingBox('ranking-box', scores );
    this.modal = new Modal('modalBox');
    this.mainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], 0);
    this.whiteButton = new WhiteButton('whiteButton', 'Hall of fame', 'whiteButton');
    
    this.whiteButton.addIcon('../../static/assets/ui/hof.svg');

    this.btns = document.querySelectorAll('.mainMenu > div > button');
    this.btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.mainMenuPanel.btnIndex(e, this.btns)
      });
    })
  }
}

export default App
