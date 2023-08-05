// const users= ["Hüseyin","Ahmet","Murat"];
const users= [{
    name:'Hüseyin',
    age:19,
},{
    name:'Hüseyin',
    age:20,
},{
    name:'Leyla',
    age:21,
}];


/* 
 push
 map
 find
 filter
 some
 every
 includes
*/
// Push
// arrayin sonuna eleman ekler
// users.push("Ayşe");
// users.push("Hilal");

// console.log(users);

// Map
// Objeleri döner
// users.map((item)=>{
// console.log(item)
// });

//objenin içindeki name'leri döner
// users.map((item)=>{
//     console.log(item.name)
//  });

// find
// array'in içinde verdiğimiz koşula göre arama yapar
// const findIt = users.find((item) => item.name === 'Hüseyin' && item.age < 20);

// console.log(findIt);

//filter
//filtreleme yapar

// const filtered = users.filter((item)=> item.name === "Hüseyin" && item.age >18);

// console.log(filtered);

// const filtered = users.filter(({name , age})=> name === "Hüseyin" && age >18);

// console.log(filtered);

//  some 
// arrayin içinde koşula göre true yada false döner

// const some = users.some((item)=> item.age === 19);

// console.log(some);

//every
// array'in bütün elemanlarının şarta uyması gerekiyor 

// const every = users.every((item) => item.age > 5);

// console.log(every);  //ture

// const every = users.every((item) => item.age > 50);

// console.log(every); //false

//includes
//icinde değer varmı yokmu onu kontrol eder
// const meyveler=["armut","elma","portaklal"]

// const includes = meyveler.includes('elma');
// console.log(includes);
//ture