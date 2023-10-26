//string1.js

let str1= "Hello";//기본데이터 타입
let str2= new String("Hello");//객체 타입

console.log(typeof str1, typeof str2);
console.log(str1 == str2) //값만 비교 -> True 값 출력됨
console.log(str1 === str2) //값&타입 비교 -> False 값 출력됨

console.log(str1.toUpperCase());//문자열이면 문자열메소드 쓰면 됨, 타입변환이 자동으로 되니까

let result = "  공백 제거 합니다.                      ".trim();
console.log(result, '문자갯수: ', result.length);

//trim(), trimStart(), trimEnd()
//replace(), ☆split(), ☆slice(),☆substring()
//toString(), ☆indexOf(), lastIndexOf(), charAt(), includes()
//concat(), 

result = "Hello,World, Niec, World".replace(',','.');//첫번째 ,만 바꿈 다바꾸려면 다른 표현식 같이 써야함
console.log(result);
result = "Hello,World, Niec, World".replace(/,/g,'.');//,다 바꿔줌
result = "Hello,World, Niec, World".replace(/\s/g,'.')//역슬래시는 공백 다 없어줌
console.log(result);
//[]:배열객체, {}:객체, /값/:정규표현식객체

