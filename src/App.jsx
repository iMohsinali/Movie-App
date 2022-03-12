import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import MoveCard from "./MoveCard";
import searchicon from "./search.svg";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c0773cb3";

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTearm, setsearchTearm] = useState("");
  const searchmovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };

  useEffect(() => {
    searchmovie("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          type="text"
          value={searchTearm}
          onChange={(e) => setsearchTearm(e.target.value)}
        />
        <img
          src={searchicon}
          alt="Name"
          onClick={() => searchmovie(searchTearm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, x) => (
            <MoveCard key={x} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
