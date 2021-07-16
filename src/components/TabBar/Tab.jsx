import React from "react";
import { TabButton, Label } from "./styles";

const Tab = ({data, isActive, onPress}) => {
  const onPressTab = () => {
    onPress(data);
  };
  return (
    <TabButton onPress={onPressTab} tabSelected={isActive}>
      <Label tabSelected={isActive}>{data.label}</Label>
    </TabButton>
  );
};

export default Tab;
