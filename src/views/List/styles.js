import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const ListWrapper = styled.SafeAreaView`
  flex: 8;
`;

export const Card = styled.TouchableOpacity`
  height: 150px;
  width: 48%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-horizontal: 1%;
`;

export const CardBody = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-right: -20px;
  margin-bottom: -20px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin-vertical: 10px;
`;

export const CardTitle = styled.Text`
  color: #494461;
  font-weight: 700;
  font-size: 22px;
  text-transform: capitalize;
`;

export const CardNumber = styled.Text`
  font-size: 22px;
  color: #494461;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  flex: 1;
  background-color: transparent;
`;
