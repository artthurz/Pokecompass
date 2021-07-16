import React, { createContext, useState, useEffect } from "react";
import { FetchPokemons } from "../services/pokemons";

const PokemonsContext = createContext({ pokemonsList: {} });

export const PokemonsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemonsList, setPokemonsList] = useState();

  async function handleFetchPokemons() {
    setLoading(true);
    await FetchPokemons(page)
      .then((response) => {
        setPokemonsList(response);
      })
      .catch((err) => console.error("Erro ao buscar Pokémons", err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    handleFetchPokemons();
  }, [page]);

  return (
    <PokemonsContext.Provider value={{ setPage, loading, pokemonsList }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsContext;
