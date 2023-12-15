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

function getCharacters() {
    //insertar endpoint
    axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            //vamos a extraer el personaje e insertarlo
            const character = response.data.results[9]
            console.log(character);

            //vamos a insertar el personaje
            charactersContainer.innerHTML = `<div>
            <img src="${character.image}">
            <h2>${character.name}</h2>
            </div>
            `
        })
        .catch((err) => {
            console.log(err);
        })
}
getCharacters();

