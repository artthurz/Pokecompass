import styled from 'styled-components/native';

export const Tabs = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  height: 56px;
`;

export const TabButton = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: ${props => props.tabSelected ? "#FE5200" : "#494461"};;
  border-top-width: 0;
  border-bottom-width: ${props => props.tabSelected ? "3px" : 0};
  border-bottom-color: ${props => props.tabSelected ? "#FE5200" : "#494461"};
`;

export const Label =  styled.Text`
  font-size: 16px;
  color: ${props => props.tabSelected ? "#FE5200" : "#494461"};;
`;
