const compareNumbers = (a,b)=>b.score-a.score;

export const LocalStorageRanking=(gameModeIndex,playerCorrectAnswers,playerAllAnswers,playerName)=>{

  const savedScores = JSON.parse(localStorage.getItem(gameModeIndex))||[];
  let newPlayer = {name:playerName, correctAnswers:playerCorrectAnswers,allAnswers:playerAllAnswers };
  savedScores.push(newPlayer);
  savedScores.forEach(el => el.score = el.correctAnswers/el.allAnswers);
  let newHighScores =savedScores.sort(compareNumbers);
  let scoresToPush = newHighScores.splice(0,3);
  localStorage.setItem(gameModeIndex,JSON.stringify(scoresToPush));
}