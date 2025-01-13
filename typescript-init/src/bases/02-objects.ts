export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
  id: number;
  name: string;
  age?: number | undefined;
}

export const bulbasur: Pokemon = {
  id: 1,
  name: "bulbasur",
};

export const charmander: Pokemon = {
  id: 0,
  name: "Charmander",
};

export const pokemons = [];

// pokemons.push(1, "string", charmander);
