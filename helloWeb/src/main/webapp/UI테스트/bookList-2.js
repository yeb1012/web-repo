import { table } from './bookList-1.js'
let xhtp = new XMLHttpRequest();
xhtp.open('get', '../BookListServlet');
xhtp.send();
xhtp.onload =Json;

function Json() {
	let result = JSON.parse(xhtp.responseText);
	let titles = ["도서코드", "도서명", "저자", "출판사", "가격"];
	let dataAry = [];
	result.forEach(book => {
		dataAry.push({ bookcode: book.bookCode, booktitle: book.bookTitle, bookauthor: book.bookAuthor, bookpress: book.bookPress, bookprice: book.bookPrice})
	})

	result = table.makeTable(titles, result);
	document.getElementById('show').innerHTML = result;
}