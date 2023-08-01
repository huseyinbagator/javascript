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
(async () => {
  const data = await(
  await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const post1 = await(
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();
  const post2 =await(
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

  console.log("users", data);
  console.log("post1", post1);
  console.log("post2", post2);
})();
