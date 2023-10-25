//function4.js
//생성자함수..Member
function Member(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
  
}

//makeTr함수.
/*function makeTr(member){
    let html = '';
    html+='<tr style="background-color:pink" >'
    html += '<td>' + member.name +'</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html+='</tr>'
    return html;
}*/

function makeTr(member){
    let html = '';
    html+='<tr style="background-color:pink" >'
    html += '<td>' + member.name +'</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html +=`<td><button onclick = "this.parentElement.parentElement.remove()">삭제</button></td>`
    html+='</tr>'
    return html;
}
document.getElementById('saveBtn').onclick =function(e){//이벤트핸들러
 console.log(e.target);
 let name = document.getElementById('name').value;
 let age = document.getElementById('age').value;
 let height = document.getElementById('height').value;

 if(!name || !age || !height){
	alert('값을 입력하세요');
	return;//함수종료
 }
 
 const mem = new Member(name, age, height);
 let str = makeTr(mem);
 
 document.getElementById('list').innerHTML += str;

 //입력 초기화
 document.getElementById('name').value = "";
 document.getElementById('age').value = "";
 document.getElementById('height').value = "";
 document.getElementById('name').focus();

}

 //function Member()..., makeTr(member),