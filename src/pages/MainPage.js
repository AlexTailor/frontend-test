import React, { useContext, useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { PalettesContext } from "../contexts/PalettesProvider";
import PaletteCard from "../components/PaletteCard";

export default function MainPage() {
  const { palettes, fetchPalettes } = useContext(PalettesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [palettesPerPage] = useState(10);

  useEffect(() => {
    fetchPalettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  console.log(palettes[0]);

  let indexOfLastPalette = currentPage * palettesPerPage;
  let indexOfFirstPalette = indexOfLastPalette - palettesPerPage;

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setCurrentPage((prev) => prev + 1);
    }
    indexOfLastPalette = currentPage * palettesPerPage;
    indexOfFirstPalette = indexOfLastPalette - palettesPerPage;
  };

  const currentPalettes = palettes.slice(
    indexOfFirstPalette,
    indexOfLastPalette
  );

  return (
    <>
      <Typography variant="h1">Colour Picker</Typography>
      <Container onScroll={handleScroll}>
        {currentPalettes.map((palette, index) => (
          <PaletteCard key={palette.id} index={index} palette={palette} />
        ))}
      </Container>
    </>
  );
}
