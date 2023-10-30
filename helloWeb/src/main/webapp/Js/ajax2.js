//ajax2.js

import { table } from './ajaxModule.js'

//onclick 이벤트 등록, <button onclick = "addMember()">
//member={name:,age:}=> member.name
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modiBtn').onclick = modifyMember;


function addMember(e) { //e는 이벤트가 발생하면 사용할 핸들러(이벤트 유형이 넘어옴)
	let mid = document.getElementById('mid').value;
	let mpassword = document.getElementById('mpassword').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&mpassword=' + mpassword + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		console.log(xhtp.responseText);
		let result = JSON.parse(xhtp.responseText);

		//사용자 입력값: retCode=OK => {vo:mid, pass, name, phone}
		//tr생성해서 td생성. 화면출력. id="list"의 innerHTML 속성활용
		//retCode=NG=>alert('처리중 에러')그리고 추가도 되면 안됨

		if (result.retCode == "OK") {
			document.getElementById('list').innerHTML += table.makeTr(result.vo);
		} else {
			alert('처리 중 에러가 발생하였습니다(회원아이디' + result.vo + ')');
		}
	}
}


function modifyMember(e) {
	let mid = document.getElementById('mid').value;
	let mpassword = document.getElementById('mpassword').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../ModMemberServ.html? +&mpassword=' + mpassword + '&name=' + name + '&phone=' + phone +'&mid=' + mid);
	xhtp.send();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText);


		if (result.retCode == "OK") {
			document.querySelectorAll('#list tr').forEach(tr => {
				console.log(tr.children)
				if (tr.children[0].innerHTML == result.vo.mid) {
					tr.children[1].innerHTML = result.vo.mpassword
					tr.children[2].innerHTML = result.vo.name
					tr.children[3].innerHTML = result.vo.phone
				}
			})
		} else {
			alert('처리 중 에러가 발생하였습니다(회원아이디' + result.vo + ')');
		}
	}
}