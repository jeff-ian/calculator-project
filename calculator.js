const clearButton = document.querySelector('.js-clear');
const percentageButton = document.querySelector('.js-percentage');
const deleteButton = document.querySelector('.js-delete');
const divideButton = document.querySelector('.js-divide');

const sevenButton = document.querySelector('.js-seven');
const eightButton = document.querySelector('.js-eight');
const nineButton = document.querySelector('.js-nine');
const multiplyButton = document.querySelector('.js-multiply');

const fourButton = document.querySelector('.js-four');
const fiveButton = document.querySelector('.js-five');
const sixButton = document.querySelector('.js-six');

const subtractButton = document.querySelector('.js-subtract');

const oneButton = document.querySelector('.js-one');
const twoButton = document.querySelector('.js-two');
const threeButton = document.querySelector('.js-three');

const addButton = document.querySelector('.js-add');

const rotateButton = document.querySelector('.js-rotate');
const zeroButton = document.querySelector('.js-zero');
const decimalButton = document.querySelector('.js-decimal');
const equalsButton = document.querySelector('.js-equals');

const displayELement = document.querySelector('.js-display');

let calculation =displayELement.innerHTML;

const updateCalculationValue = (value) => {
  calculation += value;
  displayELement.innerHTML = calculation;
}

clearButton.addEventListener('click', () => {
  calculation = '';
  displayELement.innerHTML= ''
  
});




percentageButton.addEventListener('click', () => {
  updateCalculationValue(' % ');
  
});

deleteButton.addEventListener('click', () => {
  calculation = calculation.slice(0,-1);
  displayELement.innerHTML = calculation
});




divideButton.addEventListener('click', () => {
  updateCalculationValue(' / ');
});

sevenButton.addEventListener('click', () => {
  updateCalculationValue('7');
});

eightButton.addEventListener('click', () => {
  updateCalculationValue('8');
});

nineButton.addEventListener('click', () => {
  updateCalculationValue('9');
});

multiplyButton.addEventListener('click', () => {
  updateCalculationValue(' * ');
});

fourButton.addEventListener('click', () => {
  updateCalculationValue('4');
});

fiveButton.addEventListener('click', () => {
  updateCalculationValue('5');
});

sixButton.addEventListener('click', () => {
  updateCalculationValue('6');
});

subtractButton.addEventListener('click', () => {
  updateCalculationValue(' - ');
});

oneButton.addEventListener('click', () => {
  updateCalculationValue('1');
});

twoButton.addEventListener('click', () => {
  updateCalculationValue('2');
});

threeButton.addEventListener('click', () => {
  updateCalculationValue('3');
});

addButton.addEventListener('click', () => {
  updateCalculationValue(' + ');
});

rotateButton.addEventListener('click', () => {

});

zeroButton.addEventListener('click', () => {
  updateCalculationValue('0');
});

decimalButton.addEventListener('click', () => {
  updateCalculationValue('.') ;
});

equalsButton.addEventListener('click', () => {
  const  calculate = Function(`return (${displayELement.innerHTML})`);
  const result = calculate();
  displayELement.innerHTML = result;
  calculation = String(result)
  
});

function scrollDisplayToEnd() {
  displayELement.scrollLeft = displayELement.scrollWidth;
}

scrollDisplayToEnd();

