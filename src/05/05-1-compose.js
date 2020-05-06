/*
function compose(){
    const funcArr = Array.prototype.slice.call(arguments);
    return funcArr.reduce(
        function (prevFunc, nextFunc) {
            return function() {
                const args = Array.prototype.slice.call(arguments);
                return nextFunc(prevFunc.apply(null, args));
            }
        },
        function(k) { return k; }
    );
}

전개 연산자로 간결하게 만들기
↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
*/

function compose(...funcArr){
    return funcArr.reduce(
        function (prevFunc, nextFunc){
            return function(...args){
                return nextFunc(prevFunc(...args));
            }
        },
        function(k) { return k; }
    )
}

const formulaWithCompose1 = compose([multiplyTwo, multiplyThree, addFour]);

const formulaWithCompose2 = compose(
    multiplyTwo,
    multiplyThree,
    addFour
);
const x = 10;
//앞의 공식 함수 formula와 동일한 64 값이 반환됨
foumulaWithCompose2(10);

//=> ((x * 2) * 3) + 4와 동일한 함수 표현식
const formulaWithCompose3 = compose(
    multiplyX(2),
    multiplyX(3),
    addX(4));

//조합 함수 없이 표현한 경우 
const formulaWithCompose4 = add(4)(multiplyX(3)(multiplyX(2)));

//(((x * 2) + 5) * 3) + 4 연산이 추가된 공식
const formulaWithCompose5 = compose(
    multiplyX(2),
    addX(5),
    multiplyX(3),
    addX(4)
);

//조합 함수 없이 표현한 경우
const formulaWithCompose5 = addX(4)(multiplyX(3)(addX(5)(multiplyX(2))));