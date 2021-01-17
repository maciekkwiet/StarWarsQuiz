class ComputerPlayer {
    askQuestion(answersList) {
        const selectedAnswerIndex = Math.floor(Math.random() * answersList.length);
        return answersList[selectedAnswerIndex];
    
    }
}

export default ComputerPlayer;
