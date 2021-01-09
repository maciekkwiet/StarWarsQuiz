export default class GameOverScreen {
    constructor(answers,closeWindow, id) {
      this.render(answers,closeWindow, id);
    }
  
    contentRender(answers,closeWindow, id) {

      const playerCorrectAnswers = answers.reduce(function(a,b) {
        if (b.playerAnswerIsCorrect === true) {
          return a + 1;
        } else {
          return a;
        }
      }, 0);
      const computerCorrectAnswers = answers.reduce(function(a,b) {
        if (b.computerAnswerIsCorrect === true) {
          return a + 1;
        } else {
          return a;
        }
      }, 0);

      const modalBox = document.querySelector(`#${id}`);
      const gameOverCaption= document.createElement('span');
      const text = modalBox.appendChild(gameOverCaption);
      text.innerHTML = "game over";
      text.classList.add("game-over");
    
      const finalComment= document.createElement('p');
      const comment = modalBox.appendChild(finalComment);
      comment.innerHTML = this.checkWhoWon(playerCorrectAnswers, computerCorrectAnswers, answers);
      comment.classList.add("final-comment");

      const tableName= document.createElement('p');
      const name = modalBox.appendChild(tableName);
      name.innerHTML = "Detailed answers:";
      name.classList.add("table-name");
    
      const summary= document.createElement('div');
      const summaryContent = modalBox.appendChild(summary);
      summaryContent.classList.add("summary");

      const picture= document.createElement('img');
      picture.src = "../../static/assets/img/modes/MasterYoda.png";
      const YodaImg = summary.appendChild(picture);
      
      const table= document.createElement('div');
      const tableContent = summary.appendChild(table);
      tableContent.classList.add("grid-table");

      const tHeaderColumn1= document.createElement('span');
      const tHeaderColumn1Content= table.appendChild(tHeaderColumn1);
      tHeaderColumn1Content.classList.add("table-header");

      const tHeaderColumn2= document.createElement('span');
      const tHeaderColumn2Content= table.appendChild(tHeaderColumn2);
      tHeaderColumn2Content.innerHTML = "You";
      tHeaderColumn2Content.classList.add("table-header");

      const tHeaderColumn3= document.createElement('span');
      const tHeaderColumn3Content= table.appendChild(tHeaderColumn3);
      tHeaderColumn3Content.innerHTML = "Computer";
      tHeaderColumn3Content.classList.add("table-header");

      const tHeaderColumn4= document.createElement('span');
      const tHeaderColumn4Content= table.appendChild(tHeaderColumn4);
      tHeaderColumn4Content.innerHTML = "Answer";
      tHeaderColumn4Content.classList.add("table-header");


      for (let i = 0; i < answers.length; i++) {
        const tableRowColumn1 = document.createElement('span');
        table.appendChild(tableRowColumn1);

        const question = document.createElement('img');
        question.src = answers[i].questionPicture;
        tableRowColumn1.appendChild(question);
        question.classList.add("img-row")

        const tableRowColumn2 = document.createElement('span');
        const playerAnswer = table.appendChild(tableRowColumn2);
        playerAnswer.innerHTML = answers[i].playerAnswer
        
        const tableRowColumn3 = document.createElement('span');
        const computerAnswer = table.appendChild(tableRowColumn3);
        computerAnswer.innerHTML = answers[i].computerAnswer

        if (answers[i].playerAnswerIsCorrect === true) {
          playerAnswer.classList.add("correct-answer");
        } else {
          playerAnswer.classList.add("incorrect-answer");
        }

        const tableRowColumn4 = document.createElement('span');
        const correctAnswer = table.appendChild(tableRowColumn4);
        correctAnswer.innerHTML = answers[i].correctAnswer

      
        if (answers[i].computerAnswerIsCorrect === true) {
          computerAnswer.classList.add("correct-answer");
        } else {
          computerAnswer.classList.add("incorrect-answer");
        }
      }
      const formContainer= document.createElement('div');
      const formDiv = modalBox.appendChild(formContainer);
      formDiv.classList.add("form-name");

      const form= document.createElement('form');
      const formWindow = formContainer.appendChild(form);
      formWindow.classList.add("form-box")

      const input =  document.createElement('input');
      const inputArea = form.appendChild(input);
      inputArea.classList.add("input-window")
      inputArea.setAttribute('type', 'text')
      inputArea.setAttribute('id', 'inputContent');
      inputArea.setAttribute('required','');
      inputArea.required = true;
      

      const description= document.createElement('p');
      const formDescription = formContainer.appendChild(description);
      formDescription.innerHTML = 'Please fill your name in order to receive eternal glory in whole Galaxy!'
      formDescription.classList.add("form-description");
    
      const button= document.createElement('button');
      const modalButton = modalBox.appendChild(button);
      modalButton.innerHTML = "may the force be with you";
      modalButton.classList.add("modal-button");
      
      const playerScore = `${playerCorrectAnswers}/${(answers.length)}`;

      modalButton.addEventListener("click",function(){
      if (document.querySelector("form").checkValidity() === true) {
        closeWindow(input.value, playerScore);
      } else {
        document.querySelector("form").reportValidity()}
      });

    }
  
    render(answers,closeWindow, id) {
      this.contentRender(answers, closeWindow, id);
    }

    checkWhoWon (player1Answers,player2Answers, allAnswers) {

      if (player1Answers > player2Answers) {
        return `The force is strong in you young Padawan! During 1 minute you have answered ${player1Answers}/${allAnswers.length} questions. And Computer quessed ${player2Answers}/${allAnswers.length}.`
      } else if (player1Answers < player2Answers) {
        return `The force is strong in Computer! During 1 minute Computer quessed ${player2Answers}/${allAnswers.length} questions. And You ${player1Answers}/${allAnswers.length}.`
      } else {
        return `During 1 minute you and Computer quessed ${player2Answers}/${allAnswers.length} questions.`
      }
    }
  }
