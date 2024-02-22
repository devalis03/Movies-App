import Home from "./Home/Home";
import Movies from "./pages/peliculas/Peliculas";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const moviesList = [
  {
    id: 1,
    title: "Star Wars: The Last Jedi",
    year: 2017,
    genre: "Action, Adventure, Fantasy",
    plot: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    actors:
      "Daisy Ridley, Mark Hamill, John Boyega, Adam Driver, Carrie Fisher, Oscar Isaac, Kelly Marie Tran",
    length: 152,
    director: "Rian Johnson",
  },
  {
    id: 2,
    title: "Black Swan",
    year: 2010,
    genre: "Drama, Thriller",
    plot: 'A committed dancer wins the lead role in a production of Tchaikovskys "Swan Lake" only to find herself struggling to maintain her sanity.',
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
    actors:
      "Natalie Portman, Mila Kunis, Vincent Cassel, Winona Ryder, Barbara Hershey, Benjamin Millepied",
    length: 107,
    director: "Darren Aronofsky",
  },
  {
    id: 3,
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.",
    poster:
      "https://m.media-amazon.com/images/I/61IgtYrLF5L._AC_UF894,1000_QL80_.jpg",
    actors:
      "Edward Norton, Brad Pitt, Helena Bonham, Jared Leto, Holt McCallany, Meat Loaf",
    length: 139,
    director: "Davind Fincher",
  },
  {
    id: 4,
    title: "The Godfather: Part II",
    year: 1974,
    genre: "Crime, Drama",
    plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    actors:
      "Al Pacino, Robert De Niro, James Caan, Diane Keaton, John Cazale, Talia Shire",
    length: 202,
    director: "Francis Ford Coppola",
  },
  {
    id: 5,
    title: "Harry Potter and the Philosopher Stone",
    year: 2001,
    genre: "Action, Fantasy, Adventure",
    plot: "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
    poster:
      "https://img.posterstore.com/zoom/wb0101-8harrypotter-thephilosophersstoneno150x70.jpg",
    actors:
      "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Robbie Coltrane",
    length: 152,
    director: "Chris Columbus",
  },
  {
    id: 6,
    title: "The Godfather: Part 1",
    year: 1972,
    genre: "Crime, Mistery",
    plot: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    actors:
      "Al Pacino, Marlon Brando, James Caan, Diane Keaton, Talia Shire, John Cazale, Gianni Russo",
    length: 175,
    director: "Francis Ford Coppola",
  },
];

function App() {
  const allMovies = moviesList;
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(#8F5CFE, #0C03FD)",
          //linear-gradient(darkblue, indigo)
        }}
      >
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<Movies moviesObj={allMovies} />} />
          <Route path="/about" />
        </Routes>
      </div>
    </>
  );
}

export default App;
