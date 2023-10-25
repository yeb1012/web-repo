//function2.js
console.log('function2.js');
//Member member = new Member();
const member = {
 name: "홍길동",
 age: 18,
 height: 178.9,
 showInfo: function(){
    return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
 }
}
const member2 = {
    name: "홍미동",
    age: 20,
    height: 182.9,
    showInfo: function(){
       return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
   }
   const member3 = {
    name: "홍임동",
    age: 25,
    height: 168.9,
    showInfo: function(){
       return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
   }
const members = [member, member2, member3]
//DOM:documuet object model
member.showInfo();

let show =document.getElementById('show');//table>(thead>tr>th)*2 +(tbody>tr>td)*2
let str = "";
//코드작성...
str+='<table border="1">';
str+='<tbody>';
members.forEach(function(item) {
    str += makeTr(item);
});
str+='</tbody>';
str+='</table>';

show.innerHTML = str;//table>tbody(>tr>td*4)*3

function makeTr(member={name, age, height, showInfo}){
    let html = '';
    html+='<tr>'
    html += '<td>' + member.name +'</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html+='</tr>'
    return html;
}

console.log(makeTr(member));