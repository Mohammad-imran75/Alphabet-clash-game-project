// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')
    
//     const playGroundScreen = document.getElementById('play-ground-screen');
//     playGroundScreen.classList.remove('hidden')
// }
function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const setCurrentAlphabetElementById= document.getElementById('current-alphabet');
    setCurrentAlphabetElementById.innerText = alphabet;

    setBackGroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground-screen');
    continueGame();
}