console.log("Está funcionando");

//llamar al contenedor que hemos creado en HTML para poder manejarlo
const charactersContainer = document.getElementById('charactersContainer');

//crear la función para hacer la llamada a la API con axios
function getCharacters() {
    //insertar endpoint
    axios.get("https://rickandmortyapi.com/api/charact")
        .then((response) => {
            console.log(response.data.results);
        })
        .catch((err) => {
            console.log(err);
        })
}
getCharacters();