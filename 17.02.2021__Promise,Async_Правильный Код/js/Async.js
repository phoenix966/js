function request(url) {
    return fetch(url).then(res => {
      if(res.ok) return res.json();
    })
  }
  ​
  // function getPokemonList(response) {
  //   let pokemons = response.results; // [{}, {}, {}]
  //   let list = [];
  ​
  //   for(let item of pokemons) {
  //     list.push( request(item.url) ); // https://pokeapi.co/api/v2/pokemon/2
  //   }
  ​
  //   return Promise.all(list); // [Promise, Promise, .... 20];
  // }
  ​
  // function getPokemons(list) {
  //   let container = document.createElement('div');
  //   container.className = "container";
  //   for(let pokemon of list) {
  //     let wrap = document.createElement('div');
  //     wrap.className = 'pokemon';
  ​
  //     wrap.innerHTML = `
  //       <img src="${pokemon.sprites.front_default}">
  //       <h3>${pokemon.name}</h3>
  //       <p>Вес: ${pokemon.weight}</p>
  //       <p>Рост: ${pokemon.height}</p>
  //     `;
  //     container.append(wrap);
  //   }
  //   document.querySelector('.wrapper').append(container);
  // }
  ​
  // request('https://pokeapi.co/api/v2/pokemon/')
  //   .then(getPokemonList)
  //   .then(getPokemons)
  //   .catch(err => console.log(err))
  ​
  // async await
  async function getPokemonList() {
    let response = await request('https://pokeapi.co/api/v2/pokemon/');
    let pokemons = response.results;
  ​
    let container = document.createElement('div');
    container.className = "container";
  ​
    for(let item of pokemons) {
      let pokemon = await request(item.url);
  ​
      let wrap = document.createElement('div');
      wrap.className = 'pokemon';
  ​
      wrap.innerHTML = `
        <img src="${pokemon.sprites.front_default}">
        <h3>${pokemon.name}</h3>
        <p>Вес: ${pokemon.weight}</p>
        <p>Рост: ${pokemon.height}</p>
      `;
      container.append(wrap);
    }
  ​
    document.querySelector('.wrapper').append(container);
  }
  ​
  getPokemonList();