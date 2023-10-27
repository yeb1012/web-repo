//ajax1.js
//Asynchronous Javascript And XML
//비동기VS동기-비동기를 쓸 때 시간을 줄여줌

import { table } from './ajaxModule.js'
let friends = [];
setTimeout(function() {
	friends.push('홍길동');
	setTimeout(function() {
		friends.push('김길동');
		setTimeout(function() {
			friends.push('박길동');
		}, 1000)//함수, 지연시간

	}, 500)//함수, 지연시간

}, 2000)//함수, 지연시간
console.log("비동기", friends);

setTimeout(function() {
	friends.push('홍길동');
}, 1000)//함수, 지연시간
setTimeout(function() {
	friends.push('김길동');
}, 500)//함수, 지연시간
setTimeout(function() {
	friends.push('박길동');
}, 2000)//함수, 지연시간
console.log("비동기2", friends);

//friends.push('이길동');
//friends.push('최길동');
//friends.push('장길동');
console.log("동기", friends);


//보류
//newMember값을 활용해서 tbody="list" 추가

//1) ajax 실행
let xhtp = new XMLHttpRequest();//비동기
//xhtp.open('GET', '../MemberService');//xhtp형식
xhtp.open('GET', '../MemberService2');//json형식
xhtp.send();
//xhtp.onload = loadXML;
xhtp.onload = loadJson;


function loadJson(){
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);//json문자열=>오브젝트로
	console.log(result);
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let result2 = table.makeTable(titles, result);
	//console.log(result);
	document.getElementById('show').innerHTML = result2;
	
}

function loadXML() {
	console.log(xhtp.responseXML)
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record');
	console.log(records)//배열처럼 보여줌
	console.log(records[0].children[0].innerHTML)
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	for (let record of records) {//배열메소드는 사용할수 없음
		let obj={
			mid: record.children[0].textContent,//mid
			mpassword: record.children[1].textContent,
			name: record.children[2].textContent,
			phone: record.children[3].textContent
		 }
	   dataAry.push(obj);
	}

	let result = table.makeTable(titles, dataAry);
	//console.log(result);
	document.getElementById('show').innerHTML = result;
	
	let newMember={mid : "M009", mpassword : "9999", name:"민식이", phone:"010-2415-9568"}
	let member = '<tr><td>'+newMember.mid+'</td><td>'+newMember.mpassword+'</td><td>'+newMember.name+'</td><td>'+newMember.phone+'</td></tr>'

document.getElementById('list').innerHTML += member;


}//endofload