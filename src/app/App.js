import Box from './components/Box';
import { MainMenu } from './components/MainMenu';
import Button from './components/Button';
import WhiteButton from './components/WhiteButton';
import Modal from './components/Modal';
import Timer from './components/Timer';
export const App = ({ options }) => {
  new Box('MODE: who is this character', 'box');
  new Button('button', 'play the game');
  new Modal('modal', 'content');
  const MainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], 0);
  const whiteButton = new WhiteButton('whiteButton', 'Hall of fame', 'whiteButton');
  whiteButton.addIcon('../../static/assets/ui/hof.svg');
  const time = 80
  const timer  = new Timer(time,'timer-box')
  setInterval(function() {
    timer.decrement()
  },1000);
}
