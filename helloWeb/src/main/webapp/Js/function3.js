//function3.js
function Member(name, age, height){ //생성자함수 첫글자 대문자로
    console.log(this);
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function(){
        return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
    }
}
var myName = 'Hong';//전역변수
const member =new Member('홍길동', 20, 123.4);
console.log(member.showInfo());
//window.alert('jjjjj');

const members = [

    new Member('홍길동', 18, 167.9),
    new Member('이길동', 20, 157.9),
    new Member('박길동', 21, 180.9)
]

//함수: table 생성
 
function makeTable(memberAry=[]){
    let str = "";
    str +='<table border ="1" >'
    str +='<tbody>'
    memberAry.forEach(function(item){
        str += makeTr(item)
    });
    str += '</tbody>'
    str += '</table>'
    document.getElementById('show').innerHTML = str;
    function makeTr(member){
        let html = '';
        html+='<tr style="background-color:pink" >'
        html += '<td>' + member.name +'</td>';
        html += '<td>' + member.age + '</td>';
        html += '<td>' + member.height + '</td>';
        html += '<td>' + member.showInfo() + '</td>';
        html+='</tr>'
        return html;//makeTable 함수 안에서만 활용될 수 있는 함수
                    //makeTabled밖에서 선언되 있다면 밖에서도 사용 가능
    }

}//makeTable끝
makeTable(members);