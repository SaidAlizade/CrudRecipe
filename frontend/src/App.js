import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipe from "./AddRecipe/AddRecipe";
import Recipe from "./Recipe/Recipe";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="add" element={<AddRecipe />} />
          <Route path="recipe" element={<Recipe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
