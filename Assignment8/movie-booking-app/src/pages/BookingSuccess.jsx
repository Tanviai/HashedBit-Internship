import { useLocation } from "react-router-dom";

function BookingSuccess() {
  const { state } = useLocation();

  const bookingId =
    "BOOK" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  return (
    <div>
      <h1>
        Seat Booked Successfully
      </h1>

      <h2>
        Booking ID: {bookingId}
      </h2>

      <p>Name: {state.name}</p>

      <p>Email: {state.email}</p>

      <p>Mobile: {state.mobile}</p>

      <p>
        Movie: {state.movie?.title}
      </p>
    </div>
  );
}

export default BookingSuccess;