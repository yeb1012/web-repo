//array3.js
let pos ="Hello, Wordld".indexOf(",");
console.log(pos)

let names = ["콘", "무지", "라이언", "어피치"]
pos=names.indexOf("무시"); //배열의 인덱스 번호
if(pos==-1){
	console.log("없는 이름");
}else{
console.log("무지의 위치는",pos+1);
}

//{name:"", age:}
let members = [
	{name: "이동민", age: 25},
	{name: "황선재", age: 25},
	{name: "신은주", age: 25},
	{name: "김동민", age: 25},
	
]

let search = "동민"
let count = 0;
members.forEach(function(ele){
	if(ele.name.slice(-2) ==search){
		count++;
	}
})

//let cnt = 0;
//memers.forEach(member=>{
	//if(member.name.indexOf(search)>-1){
	//	cnt++;
	//}
//})
console.log("동민이 이름은", count,"번")