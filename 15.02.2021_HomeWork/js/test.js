let request = function(url){
    return fetch(url).then(function(response){
        if(response.ok){
            return response.json()
        }
    })
}

$(".form__data").on('submit',function(event){
    event.preventDefault()
    let dataForm = $('.form__input').val()
    request(`https://restcountries.eu/rest/v2/name/${dataForm}`).then(function(response){
        let border = response[0].borders
        let name = response[0].name
        let flag = response[0].flag
        let mainBlock = $(`<h1>${name}<div class="main__wrap"><img class="main__img" src="${flag}" alt="flag"></div></h1>`)
        $('.main').append(mainBlock)
        return Promise.all(border)
    }).then(function(border){
        console.log(border)
        for(let key of border){
            console.log(border[key])
        }
        
    })
   
})