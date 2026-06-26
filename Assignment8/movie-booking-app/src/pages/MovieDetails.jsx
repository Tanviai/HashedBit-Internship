import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (m) => m.id === Number(id)
  );

  return (
    <div>
      <img src={movie.image} width="300" />

      <h1>{movie.title}</h1>

      <p>{movie.description}</p>

      <button
        onClick={() =>
          navigate("/book", {
            state: { movie }
          })
        }
      >
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;