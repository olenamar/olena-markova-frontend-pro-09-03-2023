const form = document.querySelector('.form');

const funSort = () => {
    const numberImput = form.number.value;
    const inputValue = numberImput.split(",").map((number) => Number(number));
    const radioUp = document.querySelector('.up');
    const sortRadio = radioUp.checked;
    inputValue.sort((a, b) => {
        if(sortRadio === true) {
            if(a < b) {
            return a - b;
            }
            } else {
                if(a > b) {
                return b - a;
            }
      
        } 
    });
    console.log(inputValue);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    funSort();
})