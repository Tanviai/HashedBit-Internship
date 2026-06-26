import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/success", {
      state: {
        movie,
        name,
        email,
        mobile
      }
    });
  };

  return (
    <div>
      <h1>Book Seat</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <input
          type="tel"
          placeholder="Mobile"
          required
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;