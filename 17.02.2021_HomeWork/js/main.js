// let request = function(url){
//     return fetch(url).then(function(response){
//         if(response.ok){
//             return response.json()
//         }
//     })
// } 


// request('https://pokeapi.co/api/v2/pokemon/').then(function(response){
//     for(let key of response.results){
//         console.log(key.name, key.url);
        
//         element.addEventListener('click', getPokemonInfo(key.url))
//     }
// })

// function getPokemonInfo(url) {
//     return function() {
//         console.log(url);
//     }
// }






let request = function(url){
    return fetch(url).then(function(response){
        if(response.ok){
            return response.json()
        }
    })
}

// let foo = function(){
//     request('https://pokeapi.co/api/v2/berry/')
// }

request('https://pokeapi.co/api/v2/pokemon/').then(function(result){
    for(let key in result.results){
        // console.log(result.results[key])
        let newElement = $('<div>').addClass('pokemon__list').html(`<p class="pokemon__title" id="${result.results[key].name}">${result.results[key].name}</p>`)
        $('.second__container').append(newElement)
        $('.second__container').on('click',`#${result.results[key].name}`,function(){
            let pokemonName = result.results[key].name
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
            request(url).then(function(result){
                // console.log(result)
                let pokemon = {
                    name: result.name,
                    sprites: result.sprites.back_default,
                    type:'',
                    height:'',
                    weight:''
                }
                // console.log(pokemon.sprites)
                let newElement = $(`
                <div>
                    <div class="main__img"><img src="${pokemon.sprites}" alt="pokemon"></div>
                    <p class="name">${pokemon.name}</p>
                    
                </div>`)
                $('.main').html(newElement)

            })
        })
    }
})



