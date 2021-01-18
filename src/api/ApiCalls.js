import axios from "axios";

export const fetchPalettesApi = async () => {
  return await axios.get("/api/palettes/new?format=json", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
