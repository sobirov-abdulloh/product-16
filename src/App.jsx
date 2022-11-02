import React, { useReducer } from "react";
import "./App.css";
import { StateContext } from "./Context/context";
import { reducer, initialState } from "./Reducer/reduser";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
