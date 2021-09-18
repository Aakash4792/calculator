const calc = document.querySelector('.submit-form');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result');


calc.addEventListener('click',e=>{

    let value = e.target.dataset.num;
    if(e.target.classList.contains('clear')){
        display.textContent = '';
    }else if(e.target.classList.contains('result')){
        if(display.textContent===''){
            alert('Please enter a value');
        }else{
            let answer = eval(display.textContent);
            display.textContent = answer;
        }
        
    }else if(e.target.classList.contains('val')){
        display.textContent += value;
    }
    


})