import { useEffect, useState } from "react";
import { getStorage, setStorage } from "../utils/storage";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = getStorage(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    setStorage(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
