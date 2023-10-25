//calendar

//calendar=>table
const calendar={
    week:["일","월","화","수","목","금","토"]}
function makeHead(){
 let head='<thead><tr>'
        for(let a of week){
            head += `<th>${a}</th>`
        }
    head+='</tr></thead>'
}
function makeBody(){
    let body ='<tbody>'
        for(let i=0; i<=4; i++){
           body+= '<tr>'
           for(let j = 1; j<=7; j++){
               body+= `<td>${i*7+j}</td>`}
              body+='</tr>'}
        body+='</tbody>'
}
function makeOctober(){
    let table ='<table>'
    table+=this.makeHead()
    table+=this.makeBody()
    table+='</table>'
    document.getElementById('show').innerHTML = table

}

makeOctober()
