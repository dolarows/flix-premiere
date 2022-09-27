import "./App.css";
import { useEffect, useState } from "react";
import List from "./List";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setMovies(movies.films);
      console.log(movies.films);
    };
    getMovies();
  }, []);

  const fetchMovies = async (id) => {
    const res = await fetch(
      `https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10`
    );
    const data = await res.json();

    console.log(data);
    return data;
  };

  return (
    <div className="App">
      <List minDuration={5500} movies={movies} />
    </div>
  );
}

export default App;

//https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10
