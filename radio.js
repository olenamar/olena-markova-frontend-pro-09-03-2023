const inputNumber = document.querySelector('.number')
const radioUp = document.querySelector('.up');
const radioDown = document.querySelector('.down')

const form  = document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = inputNumber.value.split(', ');
    arrNumber = inputValue.map((number => Number(number)));
    const radioUpSort = radioUp.checked;
    const radiDownSort = radioDown.checked;
    if(radioUpSort){
        arrNumber.sort((a, b) => {
            return a - b;
        }); 
    }
    if(radiDownSort){
        arrNumber.sort((a, b) => {
            return b - a;
        }); 
    }
console.log(arrNumber)  
});  