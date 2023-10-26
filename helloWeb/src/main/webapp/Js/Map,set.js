//Map, Set
const map = new Map();
map.set("김미나", 90);
map.set("김미나", 70);//map의 특징임 네임 키값 같으니 점수값을 나중에 쓴거로 교체함 (추가 X)
map.set("이지윤", 88);

//map.delete("김미나");//같은 네임키값이 두개니까 두개 다 삭제함
const refval =[12]
map.set(refval, 88);
console.log(map.get(refval))
console.log(map.get("김미나"));
for(let ent of map.entries()){//<키:값>을 반환
    console.log('이름',ent[0],', 점수', ent[1]);


}

map.forEach(function(value, key, map){
    //if(value>=80)
    //console.log(value,key,map);
    if(key=="김미나")
    console.log(value,key,map);
})
//맵<->배열

const ary = [['프로도',3],['라이언',5],['어피치',4]];
const fmap = new Map(ary); //Map(생성자:배열);

for(let ent of fmap.entries()){
    console.log('키:',ent[0],',값:',ent[1]);
}

const entries= fmap.entries();
console.log(entries);

console.log(Array.from(fmap));

console.clear();
//Set:중복된 값은 허용 X
const set1 = new Set();
set1.add(["라이언",4]);//배열로 바꾸니까 값은 값인데 다른걸로 취급하네..? 참조값이 달라서 그런듯
set1.add(["라이언", 4]);
set1.add("프로도");
set1.add("어피치");

console.log(set1.size);

set1.forEach(function(val,item,set){
    console.log(val, item, set);
})

//셋<->배열
const setAry=['라이언', '제이지', '무지', '제이지']//배열을 셋으로 바꾸는건 또 같은걸로 취급해서 사이즈가 3 나오누,,?
const set2 = new Set(setAry);
console.log(set2.size);

console.log(Array.from(set2));//셋->배열

