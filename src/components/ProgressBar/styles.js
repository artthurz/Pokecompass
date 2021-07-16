import styled from "styled-components/native";

export const Container = styled.View`
  background-color: grey;
  border-radius: 13px;
  padding: 3px;
  width: 50%;
`;

export const Progress = styled.View`
  background-color: orange;
  width: ${props => props.progress > 100 ? "100%" : `${props.progress}%` };
  height: 20px;
  border-radius: 10px;
`;
