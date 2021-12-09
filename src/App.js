import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";

export function app() {
  const [category, setCategory] = useState("");

  handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="App">
      <select className="app-select" onChange={handleChange}>
        <option id="Default"></option>
        <option id="Comedy">Comedy</option>
        <option id="Animation">Animation</option>
        <option id="Thriller">Thriller</option>
        <option id="Drame">Drame</option>
      </select>
      <MoviesList category={category} />
    </div>
  );
}
