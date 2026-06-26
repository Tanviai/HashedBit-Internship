import { Link } from "react-router-dom";
import movies from "../data/movies";

function MovieList() {
  return (
    <div>
      <h1>Movie Booking App</h1>

      <div className="grid">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>

            <Link to={`/movie/${movie.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;