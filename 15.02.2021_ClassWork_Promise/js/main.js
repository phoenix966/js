// const myPromise = new Promise(function(resolve,reject){   //создание промиса
//     // resolve('Обещание успешно выполнено')
//     reject('Ошибочка вышла')
// })

// console.log(myPromise);


// let isGood = true;
// const myPromise = new Promise(function (resolve, reject) {
//     if(isGood) {
//         resolve('Успех')
//     } else {
//         reject('Ошибка')
//     }
//   });
  
//   myPromise
//   .then(function(result){  //Если успех то выполняет то-то
//       console.log(result);
//   })
//   .catch(function(error){  // Если неуспешно то выполняет что-то
//       console.log(error);
//    })

//Асинхронный код  

// let waitForFiveSeconds = new Promise(function promiseFunction(resolve, reject) {
//     setTimeout(function Delay() {
//       resolve('Спустя 5 сек');
//     }, 5000);
//   });
  
//   function showMessage(message) {
//     console.log(`Promise успешно выполнен и вернул результат: ${message}`);
//   }
  
//   waitForFiveSeconds.then(showMessage)
  
//   console.log('2');


// let waitForFiveSeconds = function () {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve('Спустя 5 сек');
//       }, 5000);
//     })
//   };
  
//   let waitForThreeSeconds = function (message) {
//     console.log(message);
  
//     return new Promise(function (resolve, reject) {
//       setTimeout(function() {
//         resolve('Спустя 3 сек');
//       }, 3000);
//     })
//   };
  
//   function showMessage(message) {
//     console.log(`Promise успешно выполнен и вернул результат: ${message}`);
//   }
  
//   waitForFiveSeconds()
//     .then(waitForThreeSeconds)
//     .then(showMessage)
  
//   console.log('2');
  

// Сетевые запросы JQUERY (Promise)

// let request = function (url) {
//     return new Promise((resolve,reject) =>{
//         $.ajax({
//             method:'GET',
//             url
//         })
//         .done(resolve)
//         .fail(reject)
//     });
// }

// function personInfo (person) {
//     let filmsUrl = person.films;
//     filmsUrl.map(url =>{      // Метод возвращает новый массив на основе другого массива
//         return request(url);
//     })
//     console.log(films); // [Promise, Promise, Promise, Promise]

//     return Promise.all(films) //Работает с массивом обещаний
// }

// function showFilmsName(films) {
//     for(let film of films) {
//       console.log(film.title);
//     }
// }


// request('https://swapi.dev/api/people/1')
//     .then(personInfo)
//     .then(showFilmsName)
//     .then(function (message) {
//     console.log(message);
//     })
//     .catch(function (err) {
//     console.log(err);
//     })

// Функция FETCH ЗАПРОС (Стандартный JS)

let request = function (url) {
    return fetch(url).then(function (response) { //fetch возвращает данные
      if(response.ok) return response.json(); //Если ответ правильный то парсит
    });
  };
  
  function personInfo(person) {
      let filmsUrl = person.films;
      let films = filmsUrl.map(url => {
        return request(url);
      });
  
      return Promise.all(films);
  }
  
  function showFilmsName(films) {
      for(let film of films) {
        console.log(film.title);
      }
  
      return 'cool';
  }
  
  request('https://swapi.dev/api/people/1')
    .then(personInfo)
    .then(showFilmsName)
    .then(function (message) {
      console.log(message);
    })
    .catch(function (err) {
      console.log(err);
    })

//Асинхронные функции

let request = function (url) {
    return fetch(url).then(function (response) {
      if(response.ok) return response.json();
    });
  };
  
  async function showFilmsName() {  //Асинхронная функция
    let person = await request('https://swapi.dev/api/people/1'); // await - указывает где будет ждать успеха выполнения
  
      return person;
  }
  
  console.log(showFilmsName());

// Еще вариант асинхронного кода


let request = function (url) {
    return fetch(url).then(function (response) {
      if(response.ok) return response.json();
    });
  };
  
  async function showFilmsName() {
    let person = await request('https://swapi.dev/api/people/1');
    let filmsRequest = [];
    for(let film of person.films) {
      filmsRequest.push(request(film))
    }
  
    let films = await Promise.all(filmsRequest); //Ждет когда придут данные
  
    for(let film of films) {
      console.log(film.title);
    }
  }
  
  showFilmsName();
