function multiply(a,b) {
    return a*b;
}

function multiplyTwo(a){
    return multiply(a,2);
}

function multiplyX(x) {
    return function(a){
        return multiply(a, x);
    }
}

//화살표 함수 표현식
const multiplyX = x => a => multiply(a, x);

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

/*
const result1 = multiplyThree(3);
const result2 = multiplyFour(3);
*/

const result1 = multiplyX(3)(3);
const result2 = multiplyX(4)(3);

const equation = (a, b, c) => x => ((x * a) * b) +c;
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => multiply(a, 2);
const addX = x => a => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

//함수가 뒤에서부터 실행됨. 단점 : 사람이 함수의 적용 흐름을 한번에 이해하기 어려움 즉, 코드의 가독성이 떨어짐
const formula = x => addFour(multiplyThree(multiplyTwo(x)));

[multiplyTwo, multiplyThree, addFour].reduce(
    function (prevFunc, nextFunc) {
        return function(value) {
            return nextFunc(prevFunc(value));
        }
    },
    function(k) { return k; }
);