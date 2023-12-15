console.log("Está funcionando");

//llamar al contenedor que hemos creado en HTML para poder manejarlo
const charactersContainer = document.getElementById('characterContainer');

//crear la función para hacer la llamada a la API con axios
function getCharacters() {
    //insertar endpoint
    axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            console.log(response.data.results);
        })
        .catch((err) => {
            console.log(err);
        })
}
getCharacters();