import React from "react";
import useAuth from "../hooks/useAuth";
import { AppContext } from "./ContextInstance";

const AppProvider = ({ children }) => {
  const authInfo = useAuth();

  const contextValues = {
    authInfo,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppProvider;