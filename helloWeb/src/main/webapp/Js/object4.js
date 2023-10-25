//object4.js

const member = {
    name : "홍길동",
    age : 20,
    height:178,
    showInfo: function(){
        return `이름은 ${name}, 나이는 ${age}, 키는${height}`
    },
    html:'',

    makeTr: function(student ={sno, sname, engScore, mathScore}){
        let tr =''
        tr +='<tr>'
        for(let prop in student){
            tr += '<td>' + student[prop] +'</td>'
        }
        tr+='</tr>'
      
        return tr;
    },
    makeHtml(studAry){
        let table ='<table border ="1">'
        table +='<tbody>'
        //table += studAry.reduce((acc,stud) =>acc +this.makeTr(stud), ' ');
        let obj = this;
        table += studAry.reduce(function(acc, stud){
           return acc + obj.makeTr(stud)
        }, ' ')
        table +='</tbody>'
        table +='</table>'
        member.html = table //this.html = table
    },
    showPage(dom){
        dom.innerHTML = this.html;
    }
}
//객체의 속성. for ..in
 for(let prop in member){
    //member.name/ member['age']
    console.log(prop);
    console.log(member[prop]);
    if((typeof member[prop])  != 'function'){
        console.log(member[prop])
    }
    
 } 


const students = [
    {sno :'001', sname : "최해주", engScore : 80, mathScore : 85},
    {sno :'002', sname : "김채민", engScore : 82, mathScore : 83},
    {sno :'003', sname : "최다예", engScore : 84, mathScore : 88}

]


member.makeHtml(students);
member.showPage(document.getElementById('show'));