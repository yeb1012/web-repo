//function.js
//함수선언.
function myFunc(std, score=60/*(초기값설정)*//*매개변수*/) {
    //if(score == undefined){
    //    score = 0;
    //}
    console.log(`${std} 점수는 ${score}`);
    return score;//리턴 구문이 없으면 undefined값을 반환한다
}
//함수  표현식
//var myFunc =  function myFunc(std, score=60/*(초기값설정)*//*매개변수*/) {
//    if(score == undefined){
//        score = 0;
//    }
//    console.log(`${std} 점수는 ${score}`);
//    return score;//리턴 구문이 없으면 undefined값을 반환한다
//}

myFunc('김지은',90/*매개값*/);
myFunc('김나은');
console.log(myFunc('홍길동'));

//이미 함수 표현식으로 선언 됬기에 얘가 안됨
//let myFunc = myFunc('홍길동');

