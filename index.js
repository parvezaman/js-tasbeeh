const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const displayCount = document.getElementById('display-count');
const countLeft = document.getElementById('show-left');
const wannaReadInput = document.getElementById('wanna-read-input');
const wannaReadButton = document.getElementById('wanna-read-button');
let iWantedToRead = 0;

let counter = 0;
wannaReadButton.addEventListener('click', () =>{
    const iWannaRead = parseInt(wannaReadInput.value);
    iWantedToRead = iWannaRead;
    wannaReadInput.value = '';
})


plusButton.addEventListener('click', () =>{
    // debugger
    
    counter += 1;
    displayCount.innerText = counter;
    console.log(iWantedToRead);
    countLeft.innerText = `${iWantedToRead}/${iWantedToRead-counter}`; 
    if(counter == iWantedToRead){
        countLeft.innerText = `done`;
        plusButton.setAttribute('disabled', true);
    }
})

minusButton.addEventListener('click', () =>{
    if(counter>= 1){
        counter -= 1;
        displayCount.innerText = counter;
        countLeft.innerText = `${iWantedToRead}/${iWantedToRead-counter}`;
        if(counter < iWantedToRead){
            plusButton.removeAttribute('disabled', true);
        }
    }
})

