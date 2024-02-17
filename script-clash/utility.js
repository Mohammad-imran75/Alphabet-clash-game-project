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
function removeBackgroundColor(elementId){
    const color = document.getElementById(elementId);
    color.classList.remove('bg-orange-400');
}
function getTextValueElementById(elementId){
    const valueElementId = document.getElementById(elementId);
    const valueText = valueElementId.innerText;
    const value = parseInt(valueText);
    return value;
}
function getAlphabetById(elementId){
    const currentAlphabet =document.getElementById(elementId);
    const text = currentAlphabet.innerText
    return text ;
}
function setTextValueElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);
    const alphabet = alphabets[index];
    return alphabet;
}