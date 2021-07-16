import api from "./api";
import colors from "../styles/colors";

const FetchPokemons = async (page) => {
  try {
    const { data } = await api.get(page);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const FetchPokemonDetails = async (page) => {
  try {
    const { data } = await api.get(page);
    let { color } = colors.find(e => e.name === data.types[0].type.name)
    return {...data, color};
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { FetchPokemons, FetchPokemonDetails };
