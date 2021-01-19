import axios from "axios";

export const fetchPalettesApi = async (firstIndex) => {
  return await axios.get(
    `/api/palettes/new?resultOffset=${firstIndex}&numResults=10&format=json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
