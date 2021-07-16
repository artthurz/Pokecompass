import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, LoadingMessage } from "./styles";

const Loading = (loading) => {
  return (
    <>
      {loading && (
        <Container>
          <ActivityIndicator />
          <LoadingMessage>Loading</LoadingMessage>
        </Container>
      )}
    </>
  );
};

export default Loading;
