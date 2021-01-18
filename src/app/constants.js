export const rulesContent = [
  'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Luke Skywalker right now) from available options.',
  'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which vehicle from Star Wars is showed on the left from available options.',
  'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which starship from Star Wars is showed on the left from available options.',
];

export const boxContent = [
  'Who is this character?',
  'What is this vehicle?',
  'What is this starship?',
];

export const questionContent = [
  'Who is this character?',
  'What is this vehicle?',
  'What is this starship?',
];

export const exemplaryPicture = [
  '../static/assets/img/modes/people/1.jpg',
  '../static/assets/img/modes/vehicles/4.jpg',
  '../static/assets/img/modes/starships/5.jpg',
];

export const whiteBtnText = ['Hall of fame', 'Rules'];

export const playBtnText = 'Play the game';

export const initialGMIndex = 0;

export const scores = [
  { player: 'Anna', correctAnswers: 10, allAnswers: 20 },
  { player: 'Kamil', correctAnswers: 7, allAnswers: 20 },
  { player: 'Ela', correctAnswers: 3, allAnswers: 20 },
];

export const mainMenuNames = ['People', 'Vehicles', 'Starships']

export const TypesOfQuestion = {
  People: {
    maxId: 88,
    excluded: [17]
  },
  Starships: {
    maxId: 48,
    excluded: [1, 2, 3, 4, 6, 7, 8, 14, 16, 17, 18, 19, 20, 24, 25, 26, 30, 32, 33, 34, 35, 36, 37, 38, 42, 44, 45, 46]
  },
  Vehicles: {
    maxId: 42,
    excluded: [1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31, 32, 39, 40, 41]
  }
};
