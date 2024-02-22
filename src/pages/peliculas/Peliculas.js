import NavigationBar from "../../Components/Navbar/Navbar";
import CardMovies from "../../Components/MovieCard/MovieCard";
import "./Peliculas.css";

export default function Movies({ moviesObj }) {
  const numMovies = moviesObj.length;

  return (
    <>
      <NavigationBar />
      {numMovies > 0 ? (
        <ul className="moviesList">
          {moviesObj.map((movie) => (
            <CardMovies movieObj={movie} key={movie.id} />
          ))}
        </ul>
      ) : (
        <p>There are no movies!</p>
      )}
    </>
  );
}
