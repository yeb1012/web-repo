//object.js
console.log('object start...');

let obj1={
    name:'Hong',
    age:20
}
//객체의 주소값을 참조해서 똑같은 객체임
let obj2=obj1;
console.log(obj1);
obj2.age=22;
console.log(obj1);

//새로운 객체 만든거
let obj3 = {...obj1};
obj3.age = 24;
console.log(obj1);
console.log('obj3',obj3);

//클래스

class Member{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height =height;
    }

    setWeight(weight){
        this.weight = weight;
    }
    getWeight(){
        return this.weight;
    }
    showInfo(){
        return `이름은 ${this.name}이고, 나이는 ${this.age}세이다. 그리고 키는 ${this.height}cm이다`
    };
    //학생의 정보:학생번호, 이름, 영어, 수학
    makeTr(student={sno, sname, engScore, mathScore}){
        //tr>td*4
        let str ="";
   
        str+='<tr>'
        str+='<td>' +student.sno + '</td>'
        str+='<td>' +student.sname + '</td>'
        str+='<td>' +student.engScore + '</td>'//student['engSocre']
        str+='<td>' +student.mathScore + '</td>'
        str+='</tr>'
      
        return str;
    }
    makeHtml(studAry=[]){
        //html생성
        console.log("hhh")
        let table = "";
        table +='<table border ="1">'
        table +='<tbody>'
        //table += studAry.reduce((acc,stud) =>acc +this.makeTr(stud), ' ');
        let obj = this;
        table += studAry.reduce(function(acc, stud){
           return acc + obj.makeTr(stud)
        }, ' ')
        table +='</tbody>'
        table +='</table>'
        this.html = table
        console.log(table)
    }

    showPage(dom){
        //innerHtml속성에 html저장
        dom.innerHTML = this.html;
        
    }
}
    const mem1 = new Member('홍길동', 20, 156.7);
    console.log(mem1.showInfo());

    mem1.setWeight(62.5);
    console.log('홍길동의 몸무게는', mem1.getWeight(), 'kg이다');
