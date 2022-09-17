function add(a, b){
    return a+b;
}

function multiply(a, b){
    return a*b;
}

function subtract(a, b){
    return a-b;
}

function divide(a, b){
    return a/b;
}

function operate(func, a, b){
    return func(a, b);
}

const operators =[
    {func:add,
        symb:'+',
        name:'add',},
    {func: subtract,
        symb:'-',
        name: 'subtract',},
    {func:multiply,
            symb:'×',
            name: 'multiply',},
    {func:divide,
        symb:"÷",
        name:"divide"},
    {func:operate,
    symb:"=",
    name:"equal"}];

const digits = [["C", ".", 0], [1, 2, 3], [4, 5, 6], [7, 8, 9]];

const calBox = document.createElement('div');
calBox.classList.add("calBox");
document.body.appendChild(calBox);

const display = document.createElement('div');
display.classList.add('disp');
calBox.appendChild(display);

const expresion = document.createElement('div');
expresion.classList.add("expresion");
expresion.textContent="0";
display.appendChild(expresion);

const result = document.createElement('div');
result.classList.add("result");
result.textContent="";
display.appendChild(result);

const keys = document.createElement('div');
keys.classList.add('keys');
calBox.appendChild(keys);

const digKeys = document.createElement('div');
digKeys.classList.add('digKeys');
keys.appendChild(digKeys);

const opKeys = document.createElement('div');
opKeys.classList.add('opKeys');
keys.appendChild(opKeys);

operators.forEach(operator => {
    const key = document.createElement('button')
    key.classList.add('operator');
    key.textContent = operator.symb;
    opKeys.appendChild(key);})

digits.forEach(row => {
    const r = document.createElement('div');
    r.classList.add('digRow');
    digKeys.appendChild(r);
    row.forEach(digit => {
    const key = document.createElement('button');
    if(digit!="C") key.classList.add("digit")
    else key.classList.add("Clear")
    key.textContent = digit;
    r.appendChild(key);
})});


const numbers = document.querySelectorAll('.digit');
Array.from(numbers).forEach(number => number.addEventListener('click', e => { 
    const text = e.target.textContent;
    expresion.textContent += text;
}))


const clear = document.querySelector('.Clear');
clear.addEventListener('click', e => {
    expresion.textContent="";
    result.textContent="";
})

