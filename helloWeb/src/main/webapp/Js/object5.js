//object5.js

const obj ={
    sno:1001,
    sname:'홍길동',
    address: '대구 중구 100번지',
    friends:[
        {name:'김민수', phone: '010-1111'},
        {name:'최현수', phone: '010-2222'}

    ],
    hobbies:[
        '독서', '영화보기', '여행', '요리'
    ]
}

obj.pets  = ['고양이', '강아지','햄스터']
console.log(obj.pets[2])
obj.pets[2] = '금붕어'
console.log(obj.pets[2])

console.log('이름: ', obj['sname']);
console.log('친구는: ', obj.friends.length, '명입니다');
console.log('첫번째 친구 이름: ', obj['friends'][0].name);
obj['friends'][1]['phone'] = '010-3333';
console.log('두번째 친구 전화번호: ', obj['friends'][1]['phone']);

obj.addFriend = function(friend){
    this.friends.push(friend);
}
console.log(obj.friends)
obj.addFriend({name:'장현수', phone: '010-4444'})
obj.hobbies.forEach(hobby=>console.log('취미는',hobby));



