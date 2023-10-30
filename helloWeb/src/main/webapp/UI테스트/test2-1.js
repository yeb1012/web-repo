
//test2
const novemberCal={ 
 makeHead() {
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	let head = `<thead><tr>`;
	for (let a of week) {
		head += `<th>${a}</th>`;
	}
	head += `</tr></thead>`
	return head
},

 makeBody() {
	let body = `<tbody><tr>`
	for(let i=1; i<=3; i++){
		body += `<td>  </td>`}
	for( let i = 1; i<31; i++){
	body += `<td align="right">` + i + `</td>`
	if(i%7==4)
	{body+=`</tr><tr>`}
	}
	for(let i=1; i<=2; i++){
		body += `<td>  </td>`}
	body+=`</tr></tbody>`
	return body;
},

 makeTable(){
	let table =`<table border = "1">`;
	table += this.makeHead();
	table += this.makeBody();
	table +=`</table>`
	return table
	},
	
show(){
	document.getElementById('show').innerHTML = "November"
	document.getElementById('show').innerHTML += this.makeTable()
	}
	
	


}

novemberCal.show();

