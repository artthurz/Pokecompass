import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  flex: 1;
  height: 600px;
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#eee"};
  align-items: center;
  justify-content: center;
  margin-horizontal: 1%;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  text-transform: capitalize;
`;

export const CardHeader = styled.View`
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin-vertical: 10px;
`;

export const CardHeaderDetails = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin-vertical: 10px;
`;

export const CardNumber = styled.Text`
  font-size: 22px;
  color: #fff;
`;

export const CardBody = styled.View`
  flex: 2;
  background-color: #eee;
  width: 100%;
  height: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;
export const CardBodyContent = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const PokemonMesuresContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  height: 100px;
  width: 90%;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 2px 1px 1px #808080;
`;

export const PokemonMesures = styled.View`
  align-items: center;
  justify-content: center;
`;

export const PokemonMesureTitle = styled.Text`
  color: #808080;
  font-size: 24px;
  margin-top: 15px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const PokemonMesureValue = styled.Text`
  color: #808080;
  font-size: 15px;
  text-transform: capitalize;
`;

export const TypeBadgeContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  width: 90%;
`;
export const TypeBadge = styled.View`
  width: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 20px;
  margin-right: 5px;
`;
export const TypeBadgeLabel = styled.Text`
  color: #fff;
  text-transform: capitalize;
`;

export const PokemonStatusContainer = styled.View`
  width: 90%;
  margin-top: 40px;
`;
export const PokemonStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const PokemonStatusDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 48%;
`;
export const PokemonStatusName = styled.Text`
  font-size: 18px;
  color: #808080;
  text-transform: capitalize;
`;
export const PokemonStatusValue = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
