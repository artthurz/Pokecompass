import React, { createContext, useState } from "react";

const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [headerColor, setHeaderColor] = useState("#fff");

  return (
    <ScreenContext.Provider value={{ headerColor, setHeaderColor }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenContext;
