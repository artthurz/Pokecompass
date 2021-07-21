import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import ScreenContext from "../../contexts/screen";
import { Image } from "react-native";
import { FetchPokemonDetails } from "../../services/pokemons";
import TabBar from "../../components/TabBar";
import ProgressBar from "../../components/ProgressBar";

import {
  Container,
  Card,
  CardTitle,
  CardNumber,
  CardHeader,
  CardHeaderDetails,
  CardBody,
  CardBodyContent,
  PokemonMesuresContainer,
  PokemonMesures,
  PokemonMesureTitle,
  PokemonMesureValue,
  TypeBadgeContainer,
  TypeBadge,
  TypeBadgeLabel,
  PokemonStatusContainer,
  PokemonStatus,
  PokemonStatusDetails,
  PokemonStatusName,
  PokemonStatusValue,
} from "./styles";

const Details = ({ route }) => {
  const { headerColor, setHeaderColor } = useContext(ScreenContext);
  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const FetchDetails = async () => {
      const data = await FetchPokemonDetails(route.params.url);
      setDetails(data);
      setHeaderColor(data.color);
    };
    FetchDetails();
  }, []);

  handleTabBarChange = async (tab) => {
    setActiveTab(tab.id);
  };

  const handleRenderPokemonMesures = () => {
    const tabs = [
      {
        id: 1,
        screen: (
          <>
            <PokemonMesuresContainer>
              <PokemonMesures>
                <PokemonMesureTitle>Height</PokemonMesureTitle>
                <PokemonMesureValue>{details.height}</PokemonMesureValue>
              </PokemonMesures>
              <PokemonMesures>
                <PokemonMesureTitle>Weight</PokemonMesureTitle>
                <PokemonMesureValue>{details.weight}</PokemonMesureValue>
              </PokemonMesures>
            </PokemonMesuresContainer>
          </>
        ),
      },
      {
        id: 2,
        screen: (
          <>
            <PokemonStatusContainer>
              {details.stats.map((t, index) => {
                return (
                  <PokemonStatus key={index}>
                    <PokemonStatusDetails>
                      <PokemonStatusName>{t.stat.name}</PokemonStatusName>
                      <PokemonStatusValue>{t.base_stat}</PokemonStatusValue>
                    </PokemonStatusDetails>
                    <ProgressBar progress={t.base_stat}/>
                  </PokemonStatus>
                );
              })}
            </PokemonStatusContainer>
          </>
        ),
      },
    ];

    return tabs[activeTab - 1].screen;
  };

  return (
    <Container>
      <StatusBar style="light" />
      {details && (
        <Card backgroundColor={details.color}>
          <CardHeader>
            <CardHeaderDetails>
              <CardTitle>{route.params.name}</CardTitle>
              <CardNumber>{`#${("000" + details.id).slice(-3)}`}</CardNumber>
            </CardHeaderDetails>
            <TypeBadgeContainer>
              {details.types.map((t, index) => {
                return (
                  <TypeBadge key={index}>
                    <TypeBadgeLabel>{t.type.name}</TypeBadgeLabel>
                  </TypeBadge>
                );
              })}
            </TypeBadgeContainer>
            <Image
              style={{ width: 220, height: 220 }}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${details.id}.png`,
              }}
            />
          </CardHeader>
          <CardBody>
            <TabBar
              tabs={[
                { id: 1, label: "About" },
                { id: 2, label: "Base Stats" },
              ]}
              onChange={handleTabBarChange}
              activeTab={activeTab}
            />
            <CardBodyContent>{handleRenderPokemonMesures()}</CardBodyContent>
          </CardBody>
        </Card>
      )}
    </Container>
  );
};

export default Details;
