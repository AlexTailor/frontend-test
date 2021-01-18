import "./App.css";
import MainPage from "./pages/MainPage";
import { PalettesProvider } from "./contexts/PalettesProvider";

function App() {
  return (
    <div className="App">
      <PalettesProvider>
        <MainPage />
      </PalettesProvider>
    </div>
  );
}

export default App;
