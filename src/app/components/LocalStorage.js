const compareNumbers = (a,b)=>b.score-a.score;

export const GetLocatStorage=(gameModeIndex)=>JSON.parse(localStorage.getItem(gameModeIndex))||[];
export const SetLocatStorage=(gameModeIndex,playerName,playerCorrectAnswers,playerAllAnswers)=>{
  if(ScoreCheck(gameModeIndex)){
    const actualLocalStorage = GetLocatStorage(gameModeIndex).slice(0,2);
    let newPlayer = {name:playerName, correctAnswers:playerCorrectAnswers,allAnswers:playerAllAnswers}
    actualLocalStorage.push(newPlayer);
    actualLocalStorage.forEach(el => el.score = el.correctAnswers/el.allAnswers);
    let newHighScores =actualLocalStorage.sort(compareNumbers);
    localStorage.setItem(gameModeIndex,JSON.stringify(newHighScores));
  }
};
export const ScoreCheck=(gameModeIndex,playerCorrectAnswers,playerAllAnswers)=>{
  const actualLocalStorage = GetLocatStorage(gameModeIndex);
  const lastScores =actualLocalStorage[actualLocalStorage.lenght-1];
  return playerCorrectAnswers/playerAllAnswers>lastScores.correctAnswers/lastScores.allAnswers;
};
