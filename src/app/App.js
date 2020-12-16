import Box from './components/Box';
import { MainMenu } from './components/MainMenu';
export const App = ({ options }) => {
  new Box('MODE:Who is the character', 'box');
  const MainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], 0);

};
