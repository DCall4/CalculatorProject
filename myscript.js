const numbers = document.querySelector('#numbers');
const numbutts = document.querySelectorAll("button");
const screen = document.querySelector('#screen');
const answer = document.querySelector('#answer');

let firstoperand = 0;
let secondoperand = 0;
let firstophold = 0;
let secondophold = 0;
let addflag = false;
let subflag = false;
let mulflag = false;
let divflag = false;
let operator = '';
let equalflag = false;
//screen.classList.add('screen');

numbutts.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') { //clears screen when clear is pushed
            screen.textContent = '';
            answer.textContent = '';
            firstoperand = 0;
            secondoperand = 0;
            firstophold = 0;
            return
        } else if (button.id === ' = ') {
                secondoperand = parseFloat(answer.textContent);
                firstoperand = parseFloat(firstophold);
                firstophold = 0;
                equalflag = true;
                //console.log(firstoperand);
               // console.log(secondoperand);
            if (addflag === true){
                answer.textContent = firstoperand + secondoperand;
                firstoperand = parseFloat(answer.textContent);
                addflag = false
            } else if (subflag === true){
                answer.textContent = secondoperand - firstoperand;
                firstoperand = parseFloat(answer.textContent);
                subflag = false;
               
            } else if (mulflag === true){
                answer.textContent = firstoperand * secondoperand;
                firstoperand = parseFloat(answer.textContent);
                mulflag = false;
                
            } else if (divflag === true){
                answer.textContent = secondoperand / firstoperand;
                firstoperand = parseFloat(answer.textContent);
                divflag = false;
               
            }
            screen.textContent = '';
            
        } else if (button.id === '0' ||
            button.id === '1' ||
            button.id === '2' ||
            button.id === '3' ||
            button.id === '4' ||
            button.id === '5' ||
            button.id === '6' ||
            button.id === '7' ||
            button.id === '8' ||
            button.id === '9' ||
            button.id === '.'){
                
                screen.textContent += button.id;
                firstophold +=button.id;
            } else if (button.id === 'delete') {
                if (screen.textContent.at(-1) != ' ' ){
                    screen.textContent = screen.textContent.slice(0, -1);
                    return
                } else {
                    screen.textContent = screen.textContent.slice(0, -3);
                    return
                }
            } else if (button.id === ' + '){
                console.log(firstoperand);
                secondoperand = firstoperand;
                
                answer.textContent = firstoperand;
                if (equalflag === false){
                    firstoperand = parseFloat(firstophold);
                    firstophold = 0;
                }
                screen.textContent += button.id;
                if (addflag === true){
                    answer.textContent = firstoperand + secondoperand;
                    firstoperand = parseFloat(answer.textContent);
                } else if (subflag === true){
                    answer.textContent = secondoperand - firstoperand;
                    firstoperand = parseFloat(answer.textContent);
                    subflag = false;
                   
                } else if (mulflag === true){
                    answer.textContent = firstoperand * secondoperand;
                    firstoperand = parseFloat(answer.textContent);
                    mulflag = false;
                    
                } else if (divflag === true){
                    answer.textContent = secondoperand / firstoperand;
                    firstoperand = parseFloat(answer.textContent);
                    divflag = false;
                   
                } 
                addflag = true;
                equalflag = false;
            } else if (button.id === ' - '){
                secondoperand = firstoperand;
                
                if (equalflag === false){
                    firstoperand = parseFloat(firstophold);
                    firstophold = 0;
                    }
                screen.textContent += button.id;
       
                if (addflag === true){
                    answer.textContent = firstoperand + secondoperand;
                    firstoperand = parseFloat(answer.textContent);
                    addflag = false;
                } else if (subflag === true){
                    answer.textContent = secondoperand - firstoperand;
                    firstoperand = parseFloat(answer.textContent);
                } else if (mulflag === true){
                    answer.textContent = firstoperand * secondoperand;
                    firstoperand = parseFloat(answer.textContent);
                    mulflag = false;
                } else if (divflag === true){
                    answer.textContent = secondoperand / firstoperand;
                    firstoperand = parseFloat(answer.textContent);
                    divflag = false;
                } 
                subflag = true;
                equalflag = false;
            } else if (button.id === ' * '){
                secondoperand = firstoperand;
                
                if (equalflag === false){
                    firstoperand = parseFloat(firstophold);
                    firstophold = 0;
                    }
                screen.textContent += button.id;
                mulflag = true;
                if (addflag === true){
                    answer.textContent = firstoperand + secondoperand;
                    firstoperand = parseFloat(answer.textContent);
                    addflag = false;
                } else if (subflag === true){
                    answer.textContent = secondoperand - firstoperand;
                    firstoperand = parseFloat(answer.textContent);
                    subflag = false;
                } else if (mulflag === true){
                    answer.textContent = firstoperand * secondoperand;
                    firstoperand = parseFloat(answer.textContent);
                } else if (divflag === true){
                    answer.textContent = secondoperand / firstoperand;
                    firstoperand = parseFloat(answer.textContent);
                    divflag = false;
                } 
                mulflag = true;
                equalflag = false;
            } else if (button.id === ' / '){
                secondoperand = firstoperand;
                
                if (equalflag === false){
                    firstoperand = parseFloat(firstophold);
                    firstophold = 0;
                    }
                screen.textContent += button.id;
                divflag = true;
                if (addflag === true){
                    answer.textContent = firstoperand + secondoperand;
                    firstoperand = parseFloat(answer.textContent);
                    addflag = false;
                } else if (subflag === true){
                    answer.textContent = secondoperand - firstoperand;
                    firstoperand = parseFloat(answer.textContent);
                    subflag = false;
                } else if (mulflag === true){
                    answer.textContent = firstoperand * secondoperand;
                    firstoperand = parseFloat(answer.textContent);
                    mulflag = false;
                } else if (divflag === true){
                    answer.textContent = secondoperand / firstoperand;
                    firstoperand = parseFloat(answer.textContent);
                }
                divflag = true;
                equalflag = false;
            } 
    });
});


const add = function(a, b) {
    return a + b;
      
  };
  
  const subtract = function(a, b) {
    return a - b;
      
  };
  
  const sum = function(arr) {
    const initialvalue = 0;
    const sumWithInitial = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialvalue
    );
    return sumWithInitial;
      
  };
  
  const multiply = function(a, b) {
    return a * b;
  
  };

const divide = function(a, b) {
    return a % b;
}
  
  const power = function(a, b) {
    return Math.pow(a, b);
      
  };
  
  const factorial = function(num) {
    if (num === 0 || num === 1){
      return 1;
    }
    for (let i = num - 1; i > 1; i--){
      num *= i;
    }
      return num;
  };

  const operate = function(a, oper, b) {
    if (oper === '+'){
        add(a, b);
    }
    if (oper === '-'){
        subtract(a, b);
    }
    if (oper === '*'){
        multiply(a, b);
    }
    if (oper === '%'){
        divide(a, b);
    }
      }