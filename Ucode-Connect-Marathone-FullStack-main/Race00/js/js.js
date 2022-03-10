let numbers = '';
let sign = ''; 
let finish  = false;
let stroka = '';
let buff = '';

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/', '^', '√', '(', ')', '!', '%', 'Dell'];

const out = document.querySelector('.calc-screen h2');
const out_stroka = document.querySelector('.calc-screen p');

function clearAll () {
    numbers = '';
    sign = '';
    stroka = '';
    buff = '';
    finish = false;
    out.textContent = 0;
    out_stroka.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

function factorial(n){
    if (n == 1 || n == 0) 
        return 1;
    else 
        return n*factorial(n-1);       
}

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        numbers = key;
        buff += numbers;
        stroka += numbers;
        out.textContent = stroka;
        console.log(stroka);
        return;
    }

    if (action.includes(key)) {
        sign = key;

        if(sign == '^'){
            sign = '**';
        }

        if(sign == 'Dell'){
            stroka = stroka.substring(0, stroka.length - 1);
            sign = '';
        }

        if(sign == '%') {
            sign = '/100'
        }

        if(sign == '!') {
            buff = stroka.match(/\d+$/ig);
            sign = factorial(buff);
            stroka = stroka.replace(/\d+$/ig, '');
        }

        stroka += sign;
        numbers = '';
        out.textContent = stroka;
        console.log(stroka);
        return;
    }

    if (key === '=') {
        finish = true;
        if(eval(stroka) % 1 === 0)    
            out_stroka.textContent = 'Result:' + eval(stroka);
        else
            out_stroka.textContent = 'Result:' + eval(stroka).toFixed(5);
        out.textContent = stroka;
    }
}
