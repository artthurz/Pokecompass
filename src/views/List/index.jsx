import React, { useContext } from "react";
import { FlatList } from "react-native";
import PokemonsContext from "../../contexts/pokemons";
import { Image } from "react-native";
import PokeballIcon from "../../assets/svg/PokeballIcon";
import Loading from "../../components/Loading";
import Button from "../../components/Button";

import {
  Container,
  CardsList,
  Card,
  CardHeader,
  CardTitle,
  CardNumber,
  ButtonsContainer,
  CardBody,
  ListWrapper
} from "./styles";

const List = ({ navigation }) => {
  const { pokemonsList, loading, setPage } = useContext(PokemonsContext);

  const HandleChangeToNextPage = () => {
    setPage(pokemonsList.next);
  };

  const HandleChangeToPreviousPage = () => {
    setPage(pokemonsList.previous);
  };
  const HandleChangeToFirstPage = () => {
    setPage("https://pokeapi.co/api/v2/pokemon/");
  };

  const handleRenderPokemonCard = ({ item }) => {
    let id = item.url.split("/");
    return (
      <Card
        backgroundColor={"#F2F2F2"}
        onPress={() =>
          navigation.navigate("Details", {
            ...item,
          })
        }
      >
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardNumber>{`#${("000" + id[6]).slice(-3)}`}</CardNumber>
        </CardHeader>
        <CardBody>
          <Image
            style={{
              width: 80,
              height: 80,
              marginRight: -60,
              marginBottom: 10,
              zIndex: 1,
            }}
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${id[6]}.png`,
            }}
          />
          <PokeballIcon width={100} height={100} />
        </CardBody>
      </Card>
    );
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <ListWrapper>
          <FlatList
            data={pokemonsList.results}
            renderItem={handleRenderPokemonCard}
            keyExtractor={(item) => item.name}
            numColumns={2}
          />
        </ListWrapper>
      )}
      <ButtonsContainer>
        <Button
          onPress={() => HandleChangeToPreviousPage}
          disabled={loading || !pokemonsList.previous}
          icon={"arrowleft"}
        >
          Previous
        </Button>
        <Button
          onPress={() => HandleChangeToFirstPage}
          disabled={loading}
          icon={"home"}
        >
          Home
        </Button>
        <Button
          onPress={() => HandleChangeToNextPage}
          disabled={loading || !pokemonsList.next}
          icon={"arrowright"}
        >
          Next
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default List;
