//ajaxModule.js

const table={
	makeHead(titles = ['회원아이디','회원비밀번호','이름','연락처']){
		let headTag ="<thead><tr>"
		titles.forEach(title=>{
			headTag += "<th>"+title+"</th>"
		})
		headTag+="</tr></thead>"
		return headTag;
	},
	
	makeBody(dataAry = [{mid, mpassword, name, phone}]){
		let bodyTag ="<tbody id ='list'>"
		dataAry.forEach(item=>{
			bodyTag+=this.makeTr(item);
		})
		bodyTag +="</tbody>"
		return bodyTag;
	},
	makeTable(titleAry, dataAry){
		let table ='<table border ="1">';
		table+=this.makeHead(titleAry) + this.makeBody(dataAry);
		table +="</table>";
		return table;
	},
	makeTr(member ={}){
		let trTag = "<tr onclick = 'showInfo(event,this)'>";
		for (let prop in member){
			trTag += "<td>" + member[prop] + "</td>";
			
		}
		trTag += "</tr>";
		return trTag;
	}
	
}

export{table}