function add(a, b) {
    return Number(a) + Number(b);
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function operate(func, a, b) {
    return func(a, b);
}

const operators = [
    {
        func: add,
        symb: '+',
        name: 'add',
        op: "+",
    },
    {
        func: subtract,
        symb: '-',
        name: 'subtract',
        op: "-",
    },
    {
        func: multiply,
        symb: '×',
        name: 'multiply',
        op: "*",
    },
    {
        func: divide,
        symb: "÷",
        name: "divide",
        op: "/",
    },
    {
        func: operate,
        symb: "=",
        name: "equal"
    }];

let f = function () { };
let fristVal;
let secVal;
let res = 0;
let flag = 0;

const digits = [["C", ".", 0], [1, 2, 3], [4, 5, 6], [7, 8, 9]];

const calBox = document.createElement('div');
calBox.classList.add("calBox");
document.body.appendChild(calBox);

const display = document.createElement('div');
display.classList.add('disp');
calBox.appendChild(display);

const expresion = document.createElement('div');
expresion.classList.add("expresion");
expresion.textContent = "0";
display.appendChild(expresion);


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
    opKeys.appendChild(key);
    key.addEventListener('click', e => {
            if (f(1, 1) == undefined) {
                res = dispVal;
            }
            else {
                fristVal = res;
                secVal = dispVal;
                res = f(fristVal, secVal);
                expresion.textContent = Math.round(res * 100) / 100;
            }
            if (operator.name != "equal"){
                f = operator.func;
                dispVal = "";
            }
            else {
                f = function (){ };
                dispVal = res;
            }
    })
})

digits.forEach(row => {
    const r = document.createElement('div');
    r.classList.add('digRow');
    digKeys.appendChild(r);
    row.forEach(digit => {
        const key = document.createElement('button');
        if (digit != "C") key.classList.add("digit")
        else key.classList.add("Clear")
        key.textContent = digit;
        r.appendChild(key);
    })
});

let dispVal = "";

const numbers = document.querySelectorAll('.digit');
Array.from(numbers).forEach(number => number.addEventListener('click', e => {
    expresion.textContent = dispVal;
    const text = e.target.textContent;
    if (expresion.textContent.length <= 19) {
        if (expresion.textContent == "0" && text != ".") {
            expresion.textContent = "";
        }
        if ((expresion.textContent.includes(".") && text != '.') || !expresion.textContent.includes(".")) {
            expresion.textContent += text;
        }
        dispVal = expresion.textContent;
    }
}))


const clear = document.querySelector('.Clear');
clear.addEventListener('click', e => {
    expresion.textContent = "0";
    dispVal = "0";
    res = "0";
    f = function () { };
})



