console.log("Está funcionando");

//llamar al contenedor que hemos creado en HTML para poder manejarlo
const charactersContainer = document.getElementById('charactersContainer');

// //crear la función para hacer la llamada a la API con axios
// function getCharacters() {
//     //insertar endpoint
//     axios.get("https://rickandmortyapi.com/api/character")
//         .then((response) => {
//             console.log(response.data.results);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// getCharacters();

//extraer personaje

// function getCharacters() {
//     //insertar endpoint
//     axios.get("https://rickandmortyapi.com/api/character")
//         .then((response) => {
//             //vamos a extraer el personaje e insertarlo
//             const character = response.data.results[9]
//             console.log(character);

//             //vamos a insertar el personaje
//             charactersContainer.innerHTML = `<div>
//             <img src="${character.image}">
//             <h2>${character.name}</h2>
//             </div>
//             `
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// getCharacters();

//necesitamos recorrer el array para ir sacando la info de los personajes

function getCharacters() {
    //insertar endpoint
    axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            //vamos a extraer un personaje e insertarlo
            const characters = response.data.results
            console.log(characters);

            //recorrer el array
            characters.forEach(character => {
                //por cada elemento del array, vas a ejecutar una serie de instrucciones

                //crear la estructura de los datos => recogerlo en una const
                const card = `<div>
                <img src="${character.image}">
                <h2>${character.name}</h2>
                </div>`

                //vamos a insertar cada personaje
                charactersContainer.innerHTML += card;

            });


        })
        .catch((err) => {
            console.log(err);
        })
}
getCharacters();

