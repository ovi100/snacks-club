import { useContext } from "react";
import { AppContext } from "../contexts/ContextInstance";

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
