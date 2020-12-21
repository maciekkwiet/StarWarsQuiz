import Box from './components/Box';
import { MainMenu } from './components/MainMenu';
import Button from './components/Button';
import Picture from './components/Picture';
export const App = ({ options }) => {
  new Box('MODE:Who is the character', 'box');
  new Button('button', 'play the game');
  const MainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], 0);
  new Picture('picture');
};
