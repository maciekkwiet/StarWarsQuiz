export class Player {
    constructor(onQuestion, onAnswer) {
     this.onQuestion = onQuestion;
     this.onAnswer = onAnswer;
    }

    askQuestion(content){
        this.onQuestion(content);
    }

    answerQuestion(content){
        this.onAnswer(content)
    }
}