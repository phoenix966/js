

//Запрос на Ajax

// let request = function(url){
//     return new Promise((resolve,reject)=>{
//         $.ajax({
//             method:'GET',
//             url
//         })
//         .done(resolve)
//         .fail(reject)
//     })
// }

// то же самое на fetch

let request = function(url){
    return fetch(url).then(function(response){
        if(response.ok){
            console.log(response)
            return response.json() // то же самое что JSON.parse
        }
    })
}


// fetch

$('form').on('submit', function (event) {
    event.preventDefault()
    let form = $('.form__input').val()

    request(`https://restcountries.eu/rest/v2/name/${form}`)
        .then(function (response) {
            let border = response[0].borders
            let promiseArray = [] //[Promise, Promise]
           for(let key of border){
               promiseArray.push(request(`https://restcountries.eu/rest/v2/alpha/${key}`))
           }
            let img = `<div class="main__wrap"><img src="${response[0].flag}" alt="flag" class="second__img"></div>`
            $('.main').text( response[0].name + ':').append(img);
            return Promise.all(promiseArray)
        })
        .then(function(arrayCountry){
            for(let key of arrayCountry){
                let block = $(`<div class="second__text">${key.name}:
                                    <div class="second__wrap">
                                        <img src="${key.flag}" alt="flag" class="second__img">
                                    </div>
                                </div>`)
                $('.second__block').append(block)
            }
            
        })
})

// С помощью async функций

// let getData = function(url){
//     return fetch(url).then(function(response){
//         if(response.ok){
//             return response.json()
//         }
//     })
// }

// $('form').on('submit',async function(e){
//     e.preventDefault();
//     let formData = $('.form__input').val();
//    let response = await getData(`https://restcountries.eu/rest/v2/name/${formData}`);
//         let border =  response[0].borders;
//         let flag =    response[0].flag;
//         let promiseArray = [];
//         for(let key of border){
//             promiseArray.push(await getData(`https://restcountries.eu/rest/v2/alpha/${key}`))
//             console.log(key)
//         }
//         let img = `<div class="main__wrap"><img src="${flag}" alt="flag" class="second__img"></div>`
//                     $('.main').text( response[0].name).append(img);
//         for(let key of promiseArray){
//             let block = $(`<div class="second__text">${key.name}
//                                     <div class="second__wrap">
//                                          <img src="${key.flag}" alt="flag" class="second__img">
//                                      </div>
//                                      </div>`)
//                 $('.second__block').append(block)
//         }
// })





