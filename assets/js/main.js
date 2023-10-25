document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const pokemonInfo = document.getElementById('pokemonInfo');
    let currentPokemonId = 1;


    async function loadPokemonData(id) {
        try {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();


            const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            const speciesData = await speciesResponse.json();


            const pokemonDetails = await getPokemonDetails(data, speciesData);

            pokemonInfo.innerHTML = pokemonDetails;
        } catch (error) {
            console.error('Erreur lors du chargement des données du Pokémon', error);
        }
    }




    loadPokemonData(currentPokemonId);

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value;
        if (!isNaN(searchTerm) && searchTerm >= 1 && searchTerm <= 1027) {
            currentPokemonId = parseInt(searchTerm);
            loadPokemonData(currentPokemonId);
        }
    });

    prevButton.addEventListener('click', function () {
        if (currentPokemonId > 1) {
            currentPokemonId--;
            loadPokemonData(currentPokemonId);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPokemonId < 1027) {
            currentPokemonId++;
            loadPokemonData(currentPokemonId);
        }
    });
});
