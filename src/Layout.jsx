import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import "./App.css";

import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

const Layout = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

  return (
    <div className="App">
      
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
    
          <Navbar />
          <Outlet />
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
};

export default Layout;