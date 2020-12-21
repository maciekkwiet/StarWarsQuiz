import Box from './components/Box';
import Button from './components/Button';
import Modal from './components/Modal';
export const App = ({ options }) => {
  new Box('MODE: who is this character', 'box');
  new Button('button', 'play the game');
  new Modal('modal', 'content');
};
