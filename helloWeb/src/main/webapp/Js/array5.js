//array5.js

const arr1 =['펭수', '라이언', '어피치', '콘', '무지']
arr1.sort();//배열자체를 변경
console.log(arr1);

const arr2 = [4,8,1,12,23,9]
arr2.sort();//숫자 크기가 아닌 가나다 순으로 배열->1,12,23,4,8,9
arr2.sort(function(a,b){//오름차순으로 배열->1,4,8,9,12,23
	if(a<b){
		return -1;//1
	}else{
		return 1;//-1일때는 내림차순으로 배열
	}
})
console.log(arr2);
const json =`
[{"id":1,"first_name":"Gaylor","email":"gkorda0@dedecms.com"},
{"id":2,"first_name":"Osmund","email":"oodam1@reddit.com"},
{"id":8,"first_name":"Lyndell","email":"llathwell7@intel.com"},
{"id":9,"first_name":"Leyla","email":"lsegoe8@admin.ch"},
{"id":10,"first_name":"Cirillo","email":"crickerby9@dell.com"}]`

let members = JSON.parse(json);
members.sort(function(a,b){//members는 순서가 없으니 조건을 만들어주면된다
	if(a.first_name < b.first_name)
	return -1
	else
	return 1
}).reverse()//sort를 역순으로

console.log(members)