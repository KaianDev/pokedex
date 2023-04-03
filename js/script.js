//Elementos
const pokeContainer = document.querySelector('.pokeContainer');
const filterSelect = document.querySelector('#filter');
const searchInput = document.querySelector('#searchInput');
let countPoke = 251;


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
    imgPoke.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`);
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
        classTypeApplication(typeN1, type1Pok);
        classTypeApplication(typeN2, type2Pok);
        typeInfPoke.appendChild(type1Pok);
        typeInfPoke.appendChild(type2Pok);
    } else {
        let typeN1 = types[0].type.name;
        let type1Pok = document.createElement('span');
        type1Pok.classList.add('type');
        type1Pok.innerText = typeN1;
        classTypeApplication(typeN1, type1Pok);
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

function classTypeApplication(type, elementType){
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

function filterTypePokemon() {
    const filterOptions = document.querySelectorAll('#filter');
    const pokemons = document.querySelectorAll('.pokemon');

    const typeGrass = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.grass'));
    const typeFire = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.fire'));
    const typeWater = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.water'));
    const typeEletric = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.eletric'));
    const typeFlying = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.flying'));
    const typeBug = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.bug'));
    const typePoison = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.poison'));
    const typeNormal = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.normal'));
    const typeGround = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.ground'));
    const typeRock = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.rock'));
    const typeFairy = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.fairy'));
    const typeDragon = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.dragon'));
    const typePsychic = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.psychic'));
    const typeDark = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.dark'));
    const typeSteel = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.steel'));
    const typeIce = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.ice'));
    const typeFighting = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.fighting'));
    const typeGhost = Array.from(pokemons).filter((pokemon) => pokemon.querySelector('.ghost'));


    pokemons.forEach((pokemon) => {
        pokemon.style.display = 'none';
        if (filterOptions[0][1].selected) {
            typeGrass.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][2].selected) {
            typeFire.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][3].selected) {
            typeWater.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][4].selected) {
            typeEletric.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][5].selected) {
            typeFlying.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][6].selected) {
            typeBug.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][7].selected) {
            typePoison.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][8].selected) {
            typeNormal.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][9].selected) {
            typeGround.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][10].selected) {
            typeRock.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][11].selected) {
            typeFairy.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][12].selected) {
            typeDragon.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][13].selected) {
            typePsychic.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][14].selected) {
            typeDark.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][15].selected) {
            typeSteel.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][16].selected) {
            typeIce.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][17].selected) {
            typeFighting.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else if (filterOptions[0][18].selected) {
            typeGhost.forEach((poke) => {
                poke.style.display = 'flex';
            });
        } else {
            pokemon.style.display = 'flex';
        }
    });
}

function searchPokemon() {
    const pokemons = document.querySelectorAll('.pokemon');
    if (searchInput.value) {
        let inputValue = (searchInput.value).toLowerCase();
        pokemons.forEach((pokemon) => {
            let pokeName = pokemon.querySelector('.name').innerHTML;
            if (pokeName.includes(inputValue)) {
                pokemon.style.display = 'flex';

            } else {
                pokemon.style.display = 'none';
            }
        });
    } else {
        pokemons.forEach((pokemon) => {
            pokemon.style.display = 'flex';
        });
    }

}

//Eventos
fetchPokemon();

filterSelect.addEventListener('change',filterTypePokemon)

searchInput.addEventListener('input',searchPokemon)
