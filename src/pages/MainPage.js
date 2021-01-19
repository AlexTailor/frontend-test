import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { PalettesContext } from "../contexts/PalettesProvider";
import PaletteCard from "../components/PaletteCard";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  overflow: auto;
`;

export default function MainPage() {
  const { palettes, fetchPalettes } = useContext(PalettesContext);
  const [firstIndex, setFirstIndex] = useState(0);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setFirstIndex((prev) => prev + 11);
    }
  };

  useEffect(() => {
    fetchPalettes(firstIndex);
    console.log(palettes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstIndex]);

  return (
    <>
      <Typography variant="h1">Colour Picker</Typography>
      <Content onScroll={handleScroll}>
        {palettes.map((palette, index) => (
          <PaletteCard key={palette.id} index={index} palette={palette} />
        ))}
      </Content>
    </>
  );
}
