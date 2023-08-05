// setTimeout(() =>{
// console.log("Merhaba 1 defa 5 saniye geçtikten sonra çalışacağım ")

// },5000);
// setInterval(()=>{
//     console.log("Merhaba her saniye çalışacağım");
// },1000);

// const sayHi = () => {
//     console.log("Merhaba");
// }
// sayHi();

// const sayHi = (cb) => {
//     cb();
// }
// sayHi(() =>{
//     console.log("hello");
// });

import fetch from "node-fetch";
import axios  from "axios";

// Çektiğimiz veriyi sıraya koyuyoruz ilk önce kullanıcılar gelsin sonra post gelsin
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data) => data.json())
// .then((users) => {
//     console.log("Users Yüklendi",users);
//     fetch('https://jsonplaceholder.typicode.com/posts/1').then(data => data.json()).then(post => console.log("Post Yüklendi",post));
// })

// ****************************************************************************************

// Burda hangisi daha hızlı bir şekilde yüklenirse ilk sıraya onu koyar

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data) => data.json())
// .then((users) => {
//     console.log("Users Yüklendi",users);
// })

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(data => data.json()).
// then(post => console.log("Post Yüklendi",post));

// async function  getData(){
    // const data = await(
    //     await fetch("https://jsonplaceholder.typicode.com/users")
    //     ).json();
    //     const post1 = await(
    //       await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //       ).json();
    //     const post2 =await(
    //       await fetch("https://jsonplaceholder.typicode.com/posts/2")
    //       ).json();
      
    //     console.log("users", data);
    //     console.log("post1", post1);
    //     console.log("post2", post2);

//   }

// getData();

// Anonim Fonksiyon yapımı
// (async () => {
//   const data = await(
//   await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   const post1 = await(
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();
//   const post2 =await(
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//   console.log("users", data);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })();

(async () => {
  const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

  const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

  const {data: post2} =await axios("https://jsonplaceholder.typicode.com/posts/2");

  console.log("users", users);
  console.log("post1", post1);
  console.log("post2", post2);
})();

// const getComments = () =>{
//   return new Promise((resolve,reject) =>{
//     resolve("Comments");
//   })
// }

// getComments().then((data) => console.log(data))
// .catch((e) => console.log(e));


// const getComments = (number) =>{
//   return new Promise((resolve,reject) =>{
//     if(number === 1 ){
//       resolve({ text:"Hello"});
//     }    
//     reject('Bir problem oluştu');
//   });
// };

// getComments(1)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

// const getusers = () =>{
//   return new Promise(async(resolve,reject) =>{
  
//     const {data} = await axios("https://jsonplaceholder.typicode.com/users");
//     resolve(data)
//   });
// };
// const getPost  = (post_id) =>{
//   return new Promise(async(resolve,reject) =>{
  
//     const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
//     resolve(data)
//   });
// };

// getusers()
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

// getPost(2)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));


// const getusers = () =>{
//   return new Promise(async(resolve,reject) =>{
  
//     const {data} = await axios("https://jsonplaceholder.typicode.com/users");
//     resolve(data);
//     // reject('Hata Oluştu');
//   });
// };
// const getPost  = (post_id) =>{
//   return new Promise(async(resolve,reject) =>{
  
//     const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
//     resolve(data);
//     // reject('Bir hata daha oluştu')
//   });
// };

//  (async () =>{
//  await  getPost(1)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

//  await getusers()
// .then((data) => console.log(data))
// .catch((e) => console.log(e));
//-----------------------------------
//  const  users = await getusers();
//  const post = await getPost(1);

//  console.log(users);
//  console.log(post);
//------------------------------------
 //Hata Yakalamak için 
// try{
//  const  users = await getusers();
//  const post = await getPost(1);

//  console.log(users);
//  console.log(post);
// }
// catch(e){
//   console.log(e);
// }
// })();

// Promise.all([getusers,getPost(1)]).then(console.log).catch(console.log)



 