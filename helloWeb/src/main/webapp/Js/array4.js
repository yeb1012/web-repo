//arry4.js
const json =`
[{"id":1,"first_name":"Gaylor","email":"gkorda0@dedecms.com"},
{"id":2,"first_name":"Osmund","email":"oodam1@reddit.com"},
{"id":8,"first_name":"Lyndell","email":"llathwell7@intel.com"},
{"id":9,"first_name":"Leyla","email":"lsegoe8@admin.ch"},
{"id":10,"first_name":"Cirillo","email":"crickerby9@dell.com"}]`

let members = JSON.parse(json);


let result = members.find(function(item, idx, ary){
	if(item.id>5){
		return true;
	}
	return false;
	//return item.id >5;
})//find메소드는 조건을 만족하는 첫번째 값을 가져옴 id8,9,10다 가져오는거 아님 id=8만 출력함

console.log(result)

result = members.filter(function(item, idx, ary){
	
	return item.id>5;
})//filter메소드는 조건을 만족하는 모든 값을 가져옴
console.log(result)

result = members.filter((item, idx)=>{
	
	return idx>=1&&idx<3;})//true인 값을 반환
	
result = members.reduce((acc,item,idx)=>{
	if(idx>=1&&idx<3){
		acc.push(item);
	}
	return acc;
},[])
console.log(result)

//some, every =>true/ false some은 하나만 true있어도 값을 반환, every는 모두 다 true여야 값을 반환
result = members.some((member)=>{
	console.log(member)
	return member.first_name.length>5;
	
})
console.log("some",result)
result = members.every((member)=>{
	console.log(member)
	return member.first_name.length>5;
	
})
console.log("every",result)

//*)map :A -> B //새로운 요소를 담을때 map사용

result = members.map(member => {
	let obj ={id: member.id, name: member.first_name, email: member.email, grade:'C'}
	return obj;
})
console.log(result)
