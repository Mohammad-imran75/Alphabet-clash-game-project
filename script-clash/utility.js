function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackGroundColorById(elementId){
    const color = document.getElementById(elementId);
    color.classList.add('bg-orange-400');
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    console.log(index);
    const alphabet = alphabets[index];
    return alphabet;
}