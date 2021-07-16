import React from "react";

import { Container, Text } from "./styles";
import { AntDesign } from "@expo/vector-icons";

const Button = ({ onPress, children, disabled, icon }) => {
  return (
    <Container onPress={onPress()} disabled={disabled}>
      {children && <AntDesign size={22} color="#fff" name={icon} />}
      {children && <Text>{children}</Text>}
    </Container>
  );
};

export default Button;
