import Box from './components/Box';
import MainMenu from './components/MainMenu';
import Button from './components/Button';
import WhiteButton from './components/WhiteButton';
import Modal from './components/Modal';
import { Rules } from './components/Rules';
import { RulesContent } from './tools/RulesContent';
class App {
  constructor(options) {
    this.box = new Box('MODE: who is this character', 'box');
    this.button = new Button('button', 'play the game', 'play-button');
    this.modal = new Modal('modalBox');
    this.mainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], 0);
    this.whiteButton = new WhiteButton('whiteButton', 'Hall of fame', 'whiteButton');


    this.whiteButton.addIcon('../../static/assets/ui/hof.svg');

    this.rules = new Rules('Mode Rules', 'rules');

    this.btns = document.querySelectorAll('.mainMenu > div > button');
    this.btns.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        this.mainMenuPanel.btnIndex(e, this.btns);
        RulesContent(index);
      });
    })
  }
}

export default App

