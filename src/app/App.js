import Box from './components/Box';
import WhiteButton from './components/WhiteButton';
import Button from './components/Button';
export const App = ({ options }) => {
  new Box('MODE: who is this character', 'box');
  new Button('button', 'play the game');
  new WhiteButton('Hall of fame', 'whiteButton');
};
