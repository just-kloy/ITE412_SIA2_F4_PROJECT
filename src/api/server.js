const express = require("express");
const app = express();
app.use(express.json());

// --- In-memory data ---
let destinations = [
  { id: 1, name: "Boracay", location: "Aklan", priceRange: "₱5000 - ₱15000" },
];

let bookings = [
  { id: 1, user: "John Doe", destinationId: 1, date: "2025-12-20", status: "confirmed" },
];

// --- Destinations Module ---
app.get("/destinations", (req, res) => {
  res.json(destinations);
});

app.post("/destinations", (req, res) => {
  const newDestination = {
    id: destinations.length + 1,
    name: req.body.name,
    location: req.body.location,
    priceRange: req.body.priceRange,
  };
  destinations.push(newDestination);
  res.status(201).json(newDestination);
});

// --- Bookings Module ---
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

app.post("/bookings", (req, res) => {
  const newBooking = {
    id: bookings.length + 1,
    user: req.body.user,
    destinationId: req.body.destinationId,
    date: req.body.date,
    status: req.body.status,
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

// --- Start Server ---
app.listen(5000, () => console.log("ChooseToGo API running on http://localhost:5000"));
