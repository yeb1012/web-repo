/**
 * service.js
 */

//	async function studentList() {
//		let req = await fetch('../studentList.do')
//		let json = await req.json(); //{"retCode":"OK"}->{retCode:"ON"}
//		let tbody = document.querySelector('#list');
//		try {
//			json.forEach(student => {
//				tbody.append(makeTr(student));
//			})
//  	} catch (err) {
//			consol.log('error =>', err)
//		}
//	fetch('../studentList.do')
//	.then(resolve => resolve.json())
//	.then(result => {
//		console.log(result);
//		let tbody = document.querySelector('#list');
//		result.forEach(student => {
//			tbody.append(makeTr(student));
//		})
//	})
//	.catch(err => console.log('error=>', err))


export default {
	//목록처리
	async studentList(successCallback, errorCallback) {//서버로부터 잘 가저오면 success콜백, 잘 못가져오면 error콜백
		let req = await fetch('../studentList.do');
		let json = await req.json();
		try {
			successCallback(json);//req를 자바스크립객체로 바꾼다음에 석세스 콜백 매개함수로
		} catch (err) {
			errorCallback(err);
		}

	},

	//단건조회
	async getStudent(id, successCallback, errorCallback) {//서버로부터 잘 가저오면 success콜백, 잘 못가져오면 error콜백
		let req = await fetch('../getStudent.do?id='+id);
		let json = await req.json();
		try {
			successCallback(json);//req를 자바스크립객체로 바꾼다음에 석세스 콜백 매개함수로
		} catch (err) {
			errorCallback(err);
		}

	},
	//등록
	async addStudent(optobj, successCallback, errorCallback) {//서버로부터 잘 가저오면 success콜백, 잘 못가져오면 error콜백
		let req = await fetch('../addStudent.do', optobj);
		let json = await req.json();
		try {
			successCallback(json);//req를 자바스크립객체로 바꾼다음에 석세스 콜백 매개함수로
		} catch (err) {
			errorCallback(err);
		}

	},
	//수정
	async editStudent(optobj, successCallback, errorCallback) {//서버로부터 잘 가저오면 success콜백, 잘 못가져오면 error콜백
		let req = await fetch('../editStudent.do',optobj);
		let json = await req.json();
		try {
			successCallback(json);//req를 자바스크립객체로 바꾼다음에 석세스 콜백 매개함수로
		} catch (err) {
			errorCallback(err);
		}

	},
	//삭제
	async removeStudent(id, successCallback, errorCallback) {//서버로부터 잘 가저오면 success콜백, 잘 못가져오면 error콜백
		let req = await fetch('../delStudent.do?sid='+id);
		let json = await req.json();
		try {
			successCallback(json);//req를 자바스크립객체로 바꾼다음에 석세스 콜백 매개함수로
		} catch (err) {
			errorCallback(err);
		}


	}
}