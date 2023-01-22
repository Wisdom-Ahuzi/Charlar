import { useEffect, useState } from "react";

const IDPREFIX = "charlar-";

export default function useLocalStorage(key, initialValue) {
  const IdPrefixedKey = IDPREFIX + key;
  //Getting ID from Local Storage
  const [idValue, setIdValue] = useState(() => {
    const localIdValue = localStorage.getItem(IdPrefixedKey);
    if (localIdValue != null) return JSON.parse(localIdValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  //Setting Item To Local Storage
  useEffect(() => {
    localStorage.setItem(IdPrefixedKey, JSON.stringify(idValue));
  }, [IdPrefixedKey, idValue]);

  return [idValue, setIdValue];
}
