import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { PalettesContext } from "../contexts/PalettesProvider";
import PaletteCard from "../components/PaletteCard";
import { Grid } from "@material-ui/core";
import { useStyles } from "../StyledComponents";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstIndex]);

  const classes = useStyles();

  return (
    <Grid className={classes.container} justify="center">
      <Typography variant="h2">Colour Picker</Typography>
      <Grid item className={classes.content} onScroll={handleScroll}>
        {palettes.map((palette, index) => (
          <PaletteCard key={palette.id} index={index} palette={palette} />
        ))}
      </Grid>
    </Grid>
  );
}
