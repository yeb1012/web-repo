//calendar



//calendar=>table
let c = '';
const today = date = new Date();
let todayDate=today.getDate();

const calendar={

    week:["일","월","화","수","목","금","토"],

 makeHead(){

 let head='<thead><tr>';

        for(let a of this.week){

            head += `<th>${a}</th>`;

        }

    head+='</tr></thead>';

    return head;

},


makeBody(){

    let body ='<tbody>';

        for(let i=0; i<=3; i++){

           body+= '<tr>';
            //오늘날짜는 백그라운드 :노란색, 폰트:bold

           for(let j = 1; j<=7; j++){
            //일요일이면 
              
            if((i*7)+j == today.getDate()){
                c=`"background-color : yellow", "font-weight: bolder", "border-radious :50%"`
              }
              console.log(today.getDate())
            if(j==1){body+=`<td style = "color : red",${c} align="right"> ${i*7+j}</td>`} 
            else if(j==7){body+=`<td style = "color : blue", ${c}align="right"> ${i*7+j}</td>`}  
            else {body+= `<td style =${c}, align="right">${i*7+j}</td>`}
              c='';
            
            
           }}

              

              body+='</tr>'
              body+= '<tr>'
              body+= `<td style = "color : red", align="right">29</td>`
              body+= `<td>30</td>`
              body+= `<td>31</td>`
              body+='</tr>'

        body+='</tbody>';

        return body;

},

 makeOctober(){

    let table ='<table border ="1">';

    table+=this.makeHead();

    table+=this.makeBody();

    table+='</table>';

    document.getElementById('show').innerHTML = table;



}

}

calendar.makeOctober();