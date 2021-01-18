import React from "react";
import { Box, Typography } from "@material-ui/core";

export default function PaletteCard(props) {
  return (
    <Box>
      <img src={props.palette.imageUrl} alt="Colour Palette" />
      <Typography variant="h5" component="h2">
        {props.palette.title}
      </Typography>
      <Typography variant="h5" component="h1">
        {props.palette.userName}
      </Typography>
      <Typography variant="h5" component="h1">
        {props.palette.dateCreated}
      </Typography>
      <Typography variant="h5" component="h1">
        {props.palette.numVotes}
      </Typography>
    </Box>
  );
}
