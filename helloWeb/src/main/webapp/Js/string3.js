//string3.js

let today = new Date();//Date날짜객체
today.getFullYear();//2023
today.getMonth();//9
today.getDate();//26
//지정하는 값으로 날짜를 변경
today.setFullYear(2022);
today.setMonth(10);
today.setDate(26);
today.setHours(10);

console.log(today.toISOString());//17:34 - 9 = 08:34(우리나라)
console.log(today.toString());
console.log(today.toLocaleDateString());

function dateFormat(today){
	//yyyy-MM-dd hh24:mm:ss
	return today.getFullYear()+"-"+
	("0"+(today.getMonth()+1)).slice(-2)+"-"+
	("0"+today.getDate()).slice(-2)+"-"+
	today.getHours()+"-"+
	today.getMinutes()+"-"+
	today.getSeconds();
	
}
console.log(dateFormat(today));
