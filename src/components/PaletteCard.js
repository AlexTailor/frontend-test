import React from "react";

export default function PaletteCard(props) {
  return (
    <>
      <h1>{props.palette.title}</h1>
      <img src={props.palette.imageUrl} alt="Colour Palette" />
    </>
  );
}
