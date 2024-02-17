// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')
    
//     const playGroundScreen = document.getElementById('play-ground-screen');
//     playGroundScreen.classList.remove('hidden')
// }
function handleKeyBoardPress(event){
    const keyPressed = event.key;
    // console.log(keyPressed)
    if(keyPressed === 'escape'){
        gameOver();
    }

    document.addEventListener('keyup',handleKeyBoardPress);
const currentAlphabetElementId = document.getElementById('current-alphabet');
const currentAlphabetElement = currentAlphabetElementId.innerText;
const currentAlphabet = currentAlphabetElement.toLowerCase();
// console.log(currentAlphabet);

if(keyPressed === currentAlphabet){
    console.log('you win');
    removeBackgroundColor(currentAlphabet);
    continueGame();
     
    const currentValue = getTextValueElementById('current-score')
    const newValue = currentValue + 1;
    setTextValueElementById('current-score',newValue);



    // const currentScoreElementById = document.getElementById('current-score');
    // const currentScoreElementText = currentScoreElementById.innerText;
    // const currentScore =parseInt(currentScoreElementText);
    // const newScore = currentScore + 1;
    
    // currentScoreElementById.innerText = newScore;
}else{
    const updatedLife =getTextValueElementById('current-life');
    const newLife = updatedLife - 1;
    setTextValueElementById('current-life',newLife); 

    if(newLife === 0){
        gameOver();
    }



    // console.log('you loss a life')
    // const currentLifeElementById = document.getElementById('current-life')
    // const currentLifeElementText = currentLifeElementById.innerText;
    // const currentLife = parseInt(currentLifeElementText);
    // const newLife = currentLife - 1;

    // currentLifeElementById.innerText = newLife;
}
}

document.addEventListener('keyup',handleKeyBoardPress);




function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const setCurrentAlphabetElementById= document.getElementById('current-alphabet');
    setCurrentAlphabetElementById.innerText = alphabet;

    setBackGroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground-screen');
    setTextValueElementById('current-life',5);
    setTextValueElementById('current-score',0);
    continueGame();
}
function gameOver(){
    hideElementById('play-ground-screen');
    showElementById('final-score');

    const lastScore = getAlphabetById('current-score');
    setTextValueElementById('game-score',lastScore);

    const currentAlphabet = getAlphabetById('current-alphabet');
    removeBackgroundColor(currentAlphabet);
}