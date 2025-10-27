const map = new Map();
map.set("IN", "India");
map.set("US", "USA");
map.set("RU", "Russia");
map.set("RU", "Russia");                        //only unique entry(key) is allowed

console.log(map);                               //Map(3) { 'IN' => 'India', 'US' => 'USA', 'RU' => 'Russia' }

//FOR OF LOOP on map   (for extracting key and values)
console.log("find key and value in map");
/* that will now work for extracting only key (likes in obj)
for(const key of map){
    console.log(key);
}
*/
console.log("find only key in map");
for(const k of map.keys()){
    console.log(k);
}
console.log("find only values in map");
for(const v of map.values()){
    console.log(v);
}
console.log("find both key and values in map simultaneously in map")
for(const [k, v] of map){
    console.log(k, ": ", v);
}