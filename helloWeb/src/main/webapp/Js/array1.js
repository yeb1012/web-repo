//array1.js

const arr1=[]//어떤 유형이든 다 담을 수 있음
arr1.push(10)
arr1.push('ten')
arr1.push({name : "Hong", age:20})
arr1.pop();//뒤에서부터 하나씩 배열제거
//arr1.shift();//앞에서부터 하나씩 배열제거
arr1.unshift(20);//배열의 맨 처음에 담는 unshift
arr1.splice(1, 0, 30);//추가(가운데 숫자 0)(첫번째가 인덱스 값)(마지막은 대체할 값)
arr1.splice(1,1,30);//수정(가운데 숫자 1)
arr1.splice(1,1)//삭제()
arr1.splice(1,2,50,60)//1인덱스에 2개의 값을 가지고와서 50,과 60으로 대체하겠습니디ㅏ
console.log('크기 :',arr1.length);
arr1.length =3;//자바스크립트는 배열의 크기를 바꿀 수 있다 크기 4에서 3이되면 마지막거 출력안됨 배열을 리셋하고 싶다면 0으로 새로 지정하면됨
arr1.length = 5;//크기가 3에서 5로 커지면 값이 없는 4,5는 undefine으로 출력됨
for(let ary of arr1){
	console.log(ary)
}








