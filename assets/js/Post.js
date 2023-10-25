
async function getPokemonDetails(data, speciesData) {
    const name = data.name;
    const types = data.types.map(type => type.type.name).join(', ');
    const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
    const weight = data.weight;
    const height = data.height;
    const dexNumber = data.id;
    const frenchName = getFrenchName(speciesData.names);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexNumber}.png`;

    const pokemonDetails = `
        <h2>${frenchName} (${name})</h2>
        <img src="${imageUrl}" alt="${frenchName}">
        <p>Types: ${types}</p>
        <p>Capacités: ${abilities}</p>
        <p>Poids: ${weight} kg</p>
        <p>Taille: ${height} dm</p>
        <p>Numéro de Pokédex National: ${dexNumber}</p>
    `;

    return pokemonDetails;
}

// ...


// Fonction pour obtenir le nom en français depuis le tableau de noms
function getFrenchName(names) {
    for (const nameData of names) {
        if (nameData.language.name === "fr") {
            return nameData.name;
        }
    }
    return "Nom français non disponible";
}

