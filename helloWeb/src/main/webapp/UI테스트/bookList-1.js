const table={
	makeHead(titles = ['도서코드','도서명','저자','출판사','가격','삭제']){
		let headTag ="<thead><tr>"
		titles.forEach(title=>{
			headTag += "<th>"+title+"</th>"
		})
		headTag+="</tr></thead>"
		return headTag;
	},
	
	makeBody(dataAry = [{bookCode, bookTitle, bookAuthor, bookPress, bookPrice}]){
		let bodyTag ="<tbody>"
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
	makeTr(bookList ={}){
		let trTag = "<tr>";
		for (let prop in bookList){
			trTag += "<td>" + bookList[prop] + "<button id='del'>삭제</button> </td>";
			
		}
		trTag += "</tr>";
		return trTag;
	}
	
}

export{table}