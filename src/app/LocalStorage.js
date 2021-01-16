const compareNumbers = (a,b) => b.score-a.score

export function getLocalStorage(gameModeIndex) {
  return JSON.parse(localStorage.getItem(`${gameModeIndex}`)) || [];
}

export function setLocalStorage(actualLocalStorage, gameModeIndex, playerName, playerCorrectAnswers, playerAllAnswers) {
  const newLocalStorage = actualLocalStorage ? actualLocalStorage.slice(0,2) : [];
  const newPlayer = {name: playerName, correctAnswers: playerCorrectAnswers, allAnswers: playerAllAnswers, score: playerCorrectAnswers / playerAllAnswers}
  newLocalStorage.push(newPlayer);
  const newHighScores = newLocalStorage.sort(compareNumbers);
  localStorage.setItem(gameModeIndex, JSON.stringify(newHighScores));
}

export function scoreCheck(actualLocalStorage, playerCorrectAnswers, playerAllAnswers) {
  if(actualLocalStorage.length < 3) return true
  const lastScores = actualLocalStorage[2];

  return playerCorrectAnswers / playerAllAnswers > lastScores.correctAnswers / lastScores.allAnswers;
}
