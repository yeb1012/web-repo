//object2.js

Member.prototype.setBloodType = function(bloodType){
    this.bloodType =bloodType;}
Member.prototype.getBloodType = function(){
    return this.bloodType;
}

const mem2 =new Member('홍길동', 22, 123.4);
mem2.setBloodType ('O');
console.log(mem2.getBloodType());

//자바스크립트 클래스 추가 가능(이 파일 안에서만)
String.prototype.truncate=function(){
    console.log(this);
    return this.substring(0,5);
}

let result = "HelloWorld".truncate();
console.log(result);
let result2 = "123456789".truncate();
console.log(result2);