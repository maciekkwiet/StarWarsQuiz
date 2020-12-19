import Box from './components/Box';
import Button from './components/Button';
import { RankingBox } from './components/RankingBox';
export const App = ({ options }) => {
  new Box('MODE: who is this character', 'box');
  new Button('button', 'play the game');
  const scores = [{player: "Anna", correctAnswers: 10, allAnswers:20},{player: "Kamil", correctAnswers: 7, allAnswers:20}, {player: "Ela", correctAnswers: 3, allAnswers:20}];
  new RankingBox('ranking-box', scores );
};
