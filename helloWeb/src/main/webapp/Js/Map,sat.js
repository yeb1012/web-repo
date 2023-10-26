//Map, Set
const map = new Map();
map.set("김미나", 90);
map.set("이지윤", 88);

console.log(map.get("김미나"));
for(let ent of map.entries()){//<키:값>을 반환
    console.log(ent)
}

