const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const displayCount = document.getElementById('display-count');


let counter = 0;
plusButton.addEventListener('click', () =>{
    counter += 1;
    displayCount.innerText = counter;
    
})

minusButton.addEventListener('click', () =>{
    if(counter>= 1){
        counter -= 1;
        displayCount.innerText = counter;
    }
})