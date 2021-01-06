export default class GameOverScreen {
    constructor(answers, id) {
      this.render(answers, id);
    }
  
    contentRender(answers, id) {
      const modalBox = document.querySelector(`#${id}`);
      const gameOverCaption= document.createElement('span');
      const text = modalBox.appendChild(gameOverCaption);
      text.innerHTML = "game over";
      text.classList.add("game-over");
    
      const finalComment= document.createElement('p');
      const comment = modalBox.appendChild(finalComment);
      comment.innerHTML = checkWhoWon(answers);
      comment.classList.add("final-comment");

      const tableName= document.createElement('p');
      const name = modalBox.appendChild(tableName);
      name.innerHTML = "Detailed answers";
      name.classList.add("table-name");
    
      const summary= document.createElement('div');
      const summaryContent = modalBox.appendChild(summary);
      summaryContent.classList.add("summary");

      const picture= document.createElement('img');
      picture.src = "../../static/assets/img/modes/MasterYoda.png";
      const YodaImg = summary.appendChild(picture);
      



    }
  
    render(answers, id) {
      this.contentRender(answers, id);
    }
  }

function checkWhoWon (answers) {
    let correctPlayerAnswers = [];
    let correctComputerAnswers = [];
            for (let i=0; i < answers.length; i++) {
    
            if (answers[i].playerAnswer === answers[i].correctAnswer) {
                correctPlayerAnswers.push(answers[i].playerAnswer)
            }
            }
            for (let i=0; i < answers.length; i++) {
        
            if (answers[i].computerAnswer === answers[i].correctAnswer) {
                correctComputerAnswers.push(answers[i].ComputerAnswer)
            }
             }
            if (correctPlayerAnswers > correctComputerAnswers) {
                return `The force is strong in you young Padawan! During 1 minute you have answered ${correctPlayerAnswers.length}/${answers.length} questions. And Computer quessed ${correctComputerAnswers.length}/${answers.length}.`
            } else if (correctPlayerAnswers < correctComputerAnswers) {
                return `The force is strong in Computer! During 1 minute Computer quessed ${correctComputerAnswers.length}/${answers.length} questions. And You ${correctPlayerAnswers.length}/${answers.length}.`
            } else {
                return `During 1 minute you and Computer quessed ${correctComputerAnswers.length}/${answers.length} questions.`
            }
}
