import React, { useContext, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { PalettesContext } from "../contexts/PalettesProvider";
import PaletteCard from "../components/PaletteCard";

export default function MainPage() {
  const { palettes, fetchPalettes } = useContext(PalettesContext);

  useEffect(() => {
    fetchPalettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(palettes[0]);

  return (
    <>
      <Typography variant="h1">Colour Picker</Typography>
      {palettes.map((palette, index) => (
        <PaletteCard key={palette.id} index={index} palette={palette} />
      ))}
    </>
  );
}
