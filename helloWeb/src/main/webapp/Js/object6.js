//object5.js : 객체복사

const obj1 = {
    name: "Hong",
    age:20,
    height:180
    //bloodType

}
console.log(obj1);
const obj3 = obj1;

const obj2 = Object.assign({name:"Hwang", age: 22, weight:50}, obj1); //obj1에 없는 속성도 추가해서 보여줌
console.log(obj2)
//상속-상속을 통해서 자식객체를 생성하면 부모객체를 참조
const obj4 = Object.create(obj1);
console.log("부모상속",obj4)
console.log(obj4.name)
console.log(obj4.age)


obj4.name ="Lee"//자식값이 바뀐 시점부터는 부모의 값 참조하지 않고 자식의 값을 고유하게 가진다
obj1.name ="Hwang"//부모값을 바꿔줘도 "lee"값을 가짐
console.log("자식값으로변경",obj4)



//객체의 속성을 정의. 객체의 속성 기술자.
//obj1.bloodType = "O";
Object.defineProperty(obj1, 'bloodType',{
    set:function(bt){
        if(bt == "A" || bt =="B"|| bt =="O"|| bt =="AB"){
            this.bloodType = bt;
        }else{
            console.log('잘못된 유형입니다');
            this._bloodType = "A";
        }
    },
    get: function(){
        return this._bloodType;//_ 왜 써..?
       
    }
})

obj1.bloodType ="O";//set
console.log(obj1.bloodType);//get

//