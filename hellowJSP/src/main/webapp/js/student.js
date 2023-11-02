/**
 * 
 */

//페이지 로딩되면서 바로 실행
fetch('../studentList.do')
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	})
	.catch(err => console.log('error=>', err))

//등록버튼
document.querySelector('#addBtn').addEventListener('click', addCallback);
document.querySelector('#modBtn').addEventListener('click', modifyCallback);

//addCallback
function addCallback(e) {
	let id = document.querySelector('input[name=id]').value;
	//let name = document.getElementById('name').value;
	let password = document.querySelector('input[name=password]').value;
	let name = document.querySelector('input[name=name]').value;
	let dept = document.querySelector('select[name=seldept]').value;
	let birth = document.querySelector('input[name=birth]').value;

	let param = `id=${id}&password=${password}&name=${name}&dept=${dept}&birth=${birth}`;
	console.log(param)
	//ajax호출
	//get:url패턴, 값의제한
	//post: 파라미터 표현 x , 값의 제한 x, content-type지정
	//fetch()=>get방식
	fetch('../addStudent.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//x-www여기 값 틀리면 안됨
		body: param
	})
		.then(resolve => resolve.json())
		.then(result => {
			console.log(result);
			if (result.retCode == 'OK') {
				alert('등록 성공~~');
				let tr = makeTr({ studentId: id, studentName: name, studentBirthday: birth })//밑에꺼랑 똑같이 써라!!!
				document.querySelector('#list').append(tr);
			} else {
				alert('등록 실패 ㅠ.ㅠ')
			}
		})
		.catch(err => console.log('error: ', err))
}

//수정버튼 이벤트. 서블릿(db변경) ->화면변경
function modifyCallback(e) {
	let id = document.querySelector('.modal-body input[name=id]').value;
	let password = document.querySelector('.modal-body input[name=password]').value;
	let name = document.querySelector('.modal-body input[name=name]').value;
	let birth = document.querySelector('.modal-body input[name=birth]').value;
	let param = `id=${id}&password=${password}&name=${name}&birth=${birth}`;
	fetch('../editStudent.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//x-www여기 값 틀리면 안됨
		body: param
		
	})
		.then(resolve => resolve.json())
		.then(result => {
				console.log(result);
			if (result.retCode == 'OK') {
				alert('성공');
				result.vo.studentId;
				let targetTr =
				document.querySelector('tr[data-sid=' +result.vo.studentId + ']');
				let newTr = makeTr(result.vo);
				let parentElem = document.querySelector('#list');
				parentElem.replaceChild(newTr, targetTr);//부모요소에서 자식요소를 바꿈
				document.getElementById('myModal').style.display ='none';
			} else {
				alert('실패');
			}

		})
		.catch(err => console.log('error: ', err))

}//end of modify


function makeTr(obj) {
	let showFields = ["studentId", "studentName", "studentBirthday"]
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId);
	tr.addEventListener('dblclick', showModal)

	for (let prop of showFields) {
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}

	//삭제버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId)
	btn.innerHTML = '삭제';
	btn.addEventListener('click', function(e) {
		//ajax호출 -> 서블릿실행
		fetch('../delStudent.do?sid=' + obj.studentId)
			.then(resolve => resolve.json())
			.then(result => {
				console.log(result);
				if (result.retCode == 'OK') {
					alert('삭제성공~~');
					tr.remove();
				} else {
					alert('삭제 실패 ㅠ.ㅠ')
				}
			})
			.catch(err => console.log('error: ', err))
	})
	td.append(btn);
	tr.append(td);
	return tr;
}//end of makeTr




//modal 보여주기	
function showModal(e) {

	console.log(e.target.parentElement, this);
	let id = this.children[0].innerHTML;
	console.log(id);

	fetch('../getStudent.do?id=' + id)
		.then(resolve => resolve.json())
		.then(result => {

			console.log(result)

			modal.querySelector('h2').innerHTML = result.studentId;
			modal.querySelector('input[name=password]').value = result.studentPassword;
			modal.querySelector('input[name=name]').value = result.studentName;
			modal.querySelector('input[name=birth]').value = result.studentBirthday;

		})

		.catch(err => console.log('error: ', err))
	// Get the modal

	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	//let data = { id: "std1", name: "홍길동", pass: "1234", birth: "2002-08-14" };



	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}



