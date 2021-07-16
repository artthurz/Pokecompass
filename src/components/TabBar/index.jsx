import React from "react";
import { Label, Tabs } from "./styles";
import Tab from "./Tab";

const TabBar = ({ onChange, tabs, activeTab }) => {
  const onPressTab = (t) => {
    onChange(t);
  };

  return (
    <Tabs>
      {tabs && tabs.map((t, index) => {
        const isActive = t.id === activeTab;

        return (
          <Tab data={t} isActive={isActive} onPress={onPressTab} key={index}>
            <Label>{t.label}</Label>
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default TabBar;
