import MainPage from "./pages/MainPage";
import { PalettesProvider } from "./contexts/PalettesProvider";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <PalettesProvider>
        <MainPage />
      </PalettesProvider>
    </Container>
  );
}

export default App;
