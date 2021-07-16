import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.width ? props.width : "100%"};
    background-color: #FE5200;
    flex: 1;
    align-items: center;
    justify-content: center;

    opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 16px;
`;
