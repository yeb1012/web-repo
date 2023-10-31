//dom1.js

const fruits = ['딸기', '복숭아', '포도', '자두', '수박'];

//#show>ul>li
//createElement, appendChild, innerHTML 속성

//ul생성
let ul = document.createElement('ul');

//li생성
/*fruits.forEach(fruit => {
	const li = document.createElement('ul');
	li.innerHTML = fruit;//<li>수박</li>
	ul.appendChild(li);//<ul><li>수박</li>....</ul>
})*/

let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');

li1.innerHTML = fruits[0];
li2.innerHTML = fruits[1];
li3.innerHTML = fruits[2];
li4.innerHTML = fruits[3];
li5.innerHTML = fruits[4];

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

let show = document.getElementById('show')
show.appendChild(ul);

 //document.getElementById('show').appendchild(ul);

