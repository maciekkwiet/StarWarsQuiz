import Box from './components/Box';
import { MainMenu, gameModeIndex } from './components/MainMenu';
export const App = ({ options }) => {
  // new Box('MODE:Who is the character', 'box');
  const MainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], gameModeIndex);

};
