export const RulesContent = (index) => {
  const rulesContainer = document.querySelector('#rules p');
  const rulesContent = ['You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.', 'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which vehicle from Star Wars is showed on the left from available options.', 'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which starship from Star Wars is showed on the left from available options.'];
  rulesContainer.textContent = rulesContent[index];
}



