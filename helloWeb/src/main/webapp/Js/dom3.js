//dom3.js
//table>(thead>tr>th>*5)+(tbody>tr>td*5)*건수
import table from './domtable.js';
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=ukuVB4wScBaSljTiEk6XP%2F9hrXe6mz2sUK3dPZqMBlNcJuiCdi7qjlYm9ux%2FFa6ucZLm8O07brhaZgZDrIHnvQ%3D%3D'
let titles = ['센터id', '센터명', '의료원', '연락처','위도','경도']
fetch(url)
	.then(resolve => resolve.json())
	.then(fetchCallback)
	.catch(err => console.log('error=>', err));

//fetch 호출되는 함수.callback함수.
function fetchCallback(result) {
	let rawData = result.data;//원래데이터
	console.log(rawData[88])
	let sidoAry = [];//sidoAry에 sido 정보를 중복된값 제거.
	rawData.forEach((data) => {
		//if(sidoAry.indexOf(data.sido)==-1){
		//sidoAry.push(data.sido);
		//}
		sidoAry.push(data.sido)
	})
	//console.log(sidoAry)
	let array = new Set(sidoAry);
	console.log(array)

	let sidoSel = document.querySelector('#sidoList')
	array.forEach(sido => {
		let opt = document.createElement('option');
		opt.innerHTML = sido;
		sidoSel.append(opt);
	})

	//select 태그에 change이벤트 발생
	sidoSel.addEventListener('change', changeCallback)
	function  changeCallback(e) {//익명함수
		console.log(e.target.value);
		//선택된 시도 값에 맞는 센터명만 출력
		let searchSido = e.target.value;
		let filterAry = rawData.filter(function(item) {
			return item.sido == searchSido
		})
		genTable(filterAry)
	}
	
	//초기화면
	let filterAry = rawData.filter(function(item) {
		return item.sido == "대구광역시"
	})
	genTable(filterAry);

}


function genTable(rawData = []) {
	//테이블 만들어지는 시점에 초기호ㅏ
	//document.getElementById('show');
	document.querySelector('#show').innerHTML = '';

	let thead = table.makeHead(titles);//헤더정보
	let mapData = rawData.reduce((acc,center) => {
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''),
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat:center.lat,
			lng:center.lng}
		acc.push(newCenter)
		return acc},[]);
		console.log(mapData);
		
		
	let tbody = table.makeBody(mapData);//[{},{},{},...{}]
	let tbl = document.createElement('table');
	tbl.setAttribute('border', 1);
	tbl.append(thead, tbody)
	document.querySelector('#show').append(tbl);
	
	//tr클릭이벤트 등록
	
	let targetTr = document.querySelectorAll('tbody tr');
	targetTr.forEach(tr=>{//쿼리 올 일때만 포이치 사용 가능
		tr.addEventListener('click', function(e){
			let lat =tr.children[4].innerHTML;
			let lng =tr.children[5].innerHTML;
			//location.href = 'daumapi.html?x='+lat+'&y='+lng;
			window.open('daumapi.html?x='+lat+'&y='+lng)
		})
	})
	

	
}


