'use-strict'

const inputNumber = document.querySelector('.number')
const radioUp = document.querySelector('.up');

const form  = document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = inputNumber.value.split(', ');
    let arrNumber = inputValue.map((number => Number(number)));
    const radioSort = radioUp.checked;
    if(radioSort){
        arrNumber.sort((a, b) => {
            return a - b;
        }); 
    } else {arrNumber.sort((a, b) => {
            return b - a;
        }); 
    }
console.log(arrNumber)  
});  