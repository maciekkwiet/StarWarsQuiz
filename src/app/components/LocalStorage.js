const compareNumbers = (a,b)=>b.score-a.score;

export const getLocalStorage = (gameModeIndex)=>JSON.parse(localStorage.getItem(gameModeIndex))||[];

export const setLocalStorage = (actualLocalStorage, gameModeIndex, playerName, playerCorrectAnswers, playerAllAnswers)=>{
  const newLocalStorage = actualLocalStorage.slice(0,2);
  const newPlayer = {name:playerName, correctAnswers:playerCorrectAnswers, allAnswers:playerAllAnswers}
  newLocalStorage.push(newPlayer);
  newLocalStorage.forEach(el => el.score = el.correctAnswers/el.allAnswers);
  const newHighScores = newLocalStorage.sort(compareNumbers);
  localStorage.setItem(gameModeIndex, JSON.stringify(newHighScores));
};

export const scoreCheck=(actualLocalStorage, playerCorrectAnswers, playerAllAnswers)=>{
  const lastScores = actualLocalStorage[actualLocalStorage.lenght-1];
  return playerCorrectAnswers / playerAllAnswers > lastScores.correctAnswers / lastScores.allAnswers;
};
