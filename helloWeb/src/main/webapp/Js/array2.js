//arry2.js:MOKAROO데어터.json 파일의 데이터 활용
const json =`
[{"id":1,"first_name":"Gaylor","email":"gkorda0@dedecms.com"},
{"id":2,"first_name":"Osmund","email":"oodam1@reddit.com"},
{"id":3,"first_name":"Raff","email":"rausting2@nps.gov"},
{"id":4,"first_name":"Sid","email":"slaye3@foxnews.com"},
{"id":5,"first_name":"Abdel","email":"abittlestone4@joomla.org"},
{"id":6,"first_name":"Katusha","email":"kmettrick5@webs.com"},
{"id":7,"first_name":"Neda","email":"ncopland6@samsung.com"},
{"id":8,"first_name":"Lyndell","email":"llathwell7@intel.com"},
{"id":9,"first_name":"Leyla","email":"lsegoe8@admin.ch"},
{"id":10,"first_name":"Cirillo","email":"crickerby9@dell.com"}]`//배열 안의 객체 /*필드는 쌍따옴표로 묶어야하고 문자열도 쌍다옴표로 묶는다*/
//json -> object.JSON.parse()사용.

let members = JSON .parse(json);//json데이터를 자바스크립트 객체로 바꿔줌

console.log(members);json
let delMember ="Abdel";//배열에서 해당되눈 데이터 지우려고함
let yourinfo = {name:"Seo", email:"Seo@email.com"}

//splice활용

members.forEach((member,idx)=>{
	 if(member.first_name == delMember){
		 members.splice(idx, 1)
	 }
 })
 
 members.forEach((member,idx)=>{
	 if(member.first_name == "Leyla"){
	 members.splice(idx,1,{id:member.id, first_name:yourinfo.name, email:yourinfo.email})
	 }
 })
console.log(members)

//let inpVal = window.prompt("이름과 이메일 입력하세요 예) 홍길동, hong@email.com");
//console.log(inpVal);

//const b = ','
//members.push({id:members.id, first_name:inpVal.toString(0,3), email:inpVal.slice(-inpVal.indexOf(b))})
//console.log(members)


/*const infoAry = inpVal.split(',');
let nid = members[members.length -1].id +1;
let newMember = {id : nid, first_name:infoAry[0], email:infoAry[1].trim()}

memebers.push(newMember);
console.log(members);*/




const dupAry = [["라이언",5], ["어피치",3], ["콘",2], ["무지",4]]
console.log(dupAry)
console.table(dupAry)














