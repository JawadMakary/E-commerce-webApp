import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from './assets/store';
import { Provider } from 'react-redux';
import { StateProvider } from './assets/StateProvider';
import reducer, { initialState } from './assets/reducer';

import App from "./App";
import AuthProvider from "./assets/context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  //reducer->manipulate the data layer
  <StrictMode>
    
    <StateProvider initialState={initialState} reducer={reducer}>

    
    <BrowserRouter>
    
      <AuthProvider>

        <App />
      </AuthProvider>
    </BrowserRouter>
    </StateProvider>
  </StrictMode>,
  rootElement
);
