//function.js
let sum1 = 0;
[10, 20, 30].forEach(function(num){
    sum1 += num;//consumer : 매개값을 소진, 반환값은 없음.
})
console.log('forEach:', sum1)
sum1=0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary){//매개값이 하나 더 정의
    console.log(acc, item, idx);
    return item; //일땐 sum1값 30
    //return acc + item; 일땐 sum1값 60 //function : 매개값을 소진, 반환값을 생성
},0);
console.log('reduce:', sum1)


function sum(a=0, b=0, ...args){//parameters.
    console.log(args);
   // return a + b ;//+args.for;
    return a + b + args.reduce(function(acc, item){return acc+item});//==(acc,item)=>acc + item)
}
function sum2(a=0, b=0, ...args){//parameters.
    console.log(args);
    let result = 0;
    result = a + b;
    args.forEach(function(num){result += num})//num=>result += num);
    return result;
}

console.log(sum(10, 20, 30, 40, 50, 60)); //arguments
console.log(sum2(10, 20, 30, 40, 50, 60));


//reduce 연습
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;

max =numAry.reduce((acc, item) => acc>item?acc:item);
console.log('최대값: ', max);
