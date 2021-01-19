import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    width: "auto",
    margin: "0 auto",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "90%",
    height: "1000px",
    margin: "0 auto",
    overflow: "auto",
  },
  palette: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 128,
    height: 128,
  },
  aligntext: {
    textAlign: "end",
  },
}));
