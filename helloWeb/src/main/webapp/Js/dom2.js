//dom2.js
//#show>table>tbody>tr>td:사과+td>1000
const fruits =[
	{name:"사과", price: 1000, farmer:"ddd"},
	{name:"복숭아", price: 2000, farmer:"rrr"},
	{name:"포도", price: 1500, farmer : "hhh"},
	{name:"레몬", price: 500, farmer : "bbb"}
]

let table = document.createElement('table');
console.log(table);
let thead = document.createElement('thead');
table.appendChild(thead)
let tbody = document.createElement('tbody');
table.setAttribute('border','1');
table.appendChild(tbody)

fruits.forEach(fruit=>{
	let tr = document.createElement('tr')
	for(let prop in fruit){
		const td1 = document.createElement('td');
		td1.innerHTML = fruit[prop];
		tr.appendChild(td1)
	}
	tbody.appendChild(tr)
})

document.getElementById('show').appendChild(table)