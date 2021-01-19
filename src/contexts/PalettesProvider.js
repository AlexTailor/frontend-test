import React, { useState, createContext } from "react";
import { fetchPalettesApi } from "../api/ApiCalls";

export const PalettesContext = createContext();

export function PalettesProvider(props) {
  const [palettes, setPalettes] = useState([]);

  function fetchPalettes(firstIndex) {
    fetchPalettesApi(firstIndex).then((data) => setPalettes(data.data));
  }

  return (
    <PalettesContext.Provider value={{ palettes, fetchPalettes }}>
      {props.children}
    </PalettesContext.Provider>
  );
}
