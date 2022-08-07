import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import ChordRec from "./pages/ChordRec/ChordRec";
import Settings from "./pages/Settings/Settings";
import Basics from "./pages/Basics";
import Tuning from "./pages/Tuner/Tuning";
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import "./App.css";


export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="tuning" element={<Tuning />} />
                <Route path="basics" element={<Basics />} />
                <Route path="chordRec" element={<ChordRec />} />
                <Route path="settings" element={<Settings />} />
                
              </Route>
            </Routes>
          </StyledEngineProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));