//string2.js
const words = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam doloribus, necessitatibus hic nostrum possimus neque? Possimus aperiam et totam repellendus, quibusdam odit ab sunt, eius pariatur quae error itaque expedita.'
//1.공백을 기준으로 가지고 온 단어의 크기가 5보다 큰 문장을 콘솔출력.(length)
const word = words.split(' ');
for (let i = 0; i <word.length; i++) {
	if (word[i].length > 5) { console.log(word[i]) }
}



//2.주민번호 입력=> 남자인지 여자인지 구분 
function chechGender(ssn) {
	strgender = ssn.slice(-7, -6)
	if (strgender == 1 || strgender == 3) { return '남자' }
	else if (strgender == 2 || strgender == 4) { return '여자' }
}
let ssn = prompt("주민번호를 입력하세요");
console.log(chechGender(ssn))


//3.파일명과 파일의 확장자
let file = "d:/temp/sample/book.xls";
let fileName, fileExt;

console.log(file.substring(15, 19));
console.log(file.substring(20));