
export let gameModeIndex;
const gameMode=(index)=>gameModeIndex=index;

export const MainMenu = () => {
  const wrapper = document.getElementById("swquiz-app");
  const mainMenuContainer = document.createElement('div');
  mainMenuContainer.classList.add('mainMenu');
  wrapper.appendChild(mainMenuContainer); 
  const modeDesc=['People','Vehicles','Starships'];
  
  for(let i =0;i<3;i++){
  mainMenuContainer.appendChild(document.createElement('div'));}
  const modeContainers = document.querySelectorAll('.mainMenu > div');
  
  modeContainers.forEach(el=>{
    el.appendChild(document.createElement('button'));
    el.appendChild(document.createElement('div'));
  });
  
  const underscores = document.querySelectorAll('.mainMenu >div > div');
  const btns = document.querySelectorAll('.mainMenu > div > button');
  
  btns.forEach((btn,index)=>{
  btn.textContent=modeDesc[index];
  
  const btnIndex = ()=>{
      underscores.forEach(un=>un.classList.remove('mainMenuActive'));
      btns.forEach(btn=>btn.classList.remove('black'));
      underscores[index].classList.add('mainMenuActive');
      btns[index].classList.add('black');
      gameMode(index);};
  
btn.addEventListener('click',btnIndex);
});
}
