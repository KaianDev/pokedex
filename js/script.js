//Elementos
const pokeContainer = document.querySelector('.pokeContainer');
let countPoke = 151;


//Funções
async function fetchPokemon() {
    for(let i = 1; i <= countPoke; i++){
        await pokemonAPI(i);
    }
}

async function pokemonAPI (id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let response = await fetch(url);
    let json = await response.json();
    await createPokemon(id, json);
}

async function createPokemon (id,object){
    let pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    let idPokemon = document.createElement('p');
    idPokemon.innerText = isSmaller100(id);
    idPokemon.classList.add('id');

    let divImgPoke = document.createElement('div');
    divImgPoke.classList.add('imgPoke');
    let imgPoke = document.createElement('img');
    imgPoke.setAttribute('src',`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`);
    divImgPoke.appendChild(imgPoke);

    let divInfPoke = document.createElement('div');
    divInfPoke.classList.add('infPoke');
    let namePoke = document.createElement('p');
    namePoke.classList.add('name');
    namePoke.innerText = object.name;
    divInfPoke.appendChild(namePoke);

    let typeInfPoke = document.createElement('div');
    typeInfPoke.classList.add('typeInf');
    createType(typeInfPoke, object);
    divInfPoke.appendChild(typeInfPoke);

    pokemon.appendChild(idPokemon);
    pokemon.appendChild(divImgPoke);
    pokemon.appendChild(divInfPoke);
    pokeContainer.appendChild(pokemon);
}

function createType(typeInfPoke, object) {
    let types = object.types;
    if(types.length == 2){
        let typeN1 = types[0].type.name;
        let typeN2 = types[1].type.name;
        let type1Pok = document.createElement('span');
        let type2Pok = document.createElement('span');
        type1Pok.classList.add('type');
        type2Pok.classList.add('type');
        type1Pok.innerText = typeN1;
        type2Pok.innerText = typeN2;
        testType(typeN1, type1Pok);
        testType(typeN2, type2Pok);
        typeInfPoke.appendChild(type1Pok);
        typeInfPoke.appendChild(type2Pok);
    } else {
        let typeN1 = types[0].type.name;
        let type1Pok = document.createElement('span');
        type1Pok.classList.add('type');
        type1Pok.innerText = typeN1;
        testType(typeN1, type1Pok);
        typeInfPoke.appendChild(type1Pok);
    }  
}

function isSmaller100(n){
    if(n < 10){
        return `#00${n}`;
    } else if(n < 100){
        return `#0${n}`;
    } else {
        return `#${n}`;
    }
}

function testType(type, elementType){
    switch (type) {
        case 'grass':
            elementType.classList.add('grass');
            break;
        case 'fire':
            elementType.classList.add('fire');
            break;
        case 'water':
            elementType.classList.add('water');
            break;
        case 'electric':
            elementType.classList.add('eletric');
            break;
        case 'rock':
            elementType.classList.add('rock');
            break;
        case 'bug':
            elementType.classList.add('bug');
            break;
        case 'ground':
            elementType.classList.add('ground');
            break;
        case 'flying':
            elementType.classList.add('flying');
            break;
        case 'fighting':
            elementType.classList.add('fighting');
            break;
        case 'poison':
            elementType.classList.add('poison');
            break;
        case 'psychic':
            elementType.classList.add('psychic');
            break;
        case 'ice':
            elementType.classList.add('ice');
            break;
        case 'ghost':
            elementType.classList.add('ghost');
            break;
        case 'steel':
            elementType.classList.add('steel');
            break;
        case 'dark':
            elementType.classList.add('dark');
            break;
        case 'dragon':
            elementType.classList.add('dragon');
            break;
        case 'fairy':
            elementType.classList.add('fairy');
            break;
        case 'normal':
            elementType.classList.add('normal');
            break;
        default:
            break;
    }   
}

//Eventos
fetchPokemon();