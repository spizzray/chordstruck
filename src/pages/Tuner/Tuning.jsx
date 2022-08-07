import React from "react";
import Tuner from "./pages/tuner";
import { Store } from "./store";
import { Provider } from "react-redux";
import styled from "styled-components";
import { MainContainer } from "./global.js";


const Tuning = () => {

  return (
    <Provider store={Store}>
      <MainContainer className="App">
        <Tuner />
      </MainContainer>
    </Provider>
  );
}


export default Tuning;