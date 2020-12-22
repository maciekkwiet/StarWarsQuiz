import Box from './components/Box';
import { MainMenu } from './components/MainMenu';
import Button from './components/Button';
import WhiteButton from './components/WhiteButton';
export const App = ({ options }) => {
  new Box('MODE: who is this character', 'box');
  new Button('button', 'play the game', 'play-button');
  const MainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], 0);
  const whiteButton = new WhiteButton('whiteButton', 'Hall of fame', 'whiteButton');
  whiteButton.addIcon('../../static/assets/ui/hof.svg');
};
