import React, { useState } from "react";

function App() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("standard");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)

    // Basic validation
    if (!pickup.trim()) {
      alert("Please enter a pickup location.");
      return;
    }

    if (!destination.trim()) {
      alert("Please enter a destination.");
      return;
    }

    // Log the details if the form is valid
    console.log("Booking Details:");
    console.log("Pickup Location:", pickup);
    console.log("Destination:", destination);
    console.log("Ride Type:", rideType);

    // Reset the form fields after submission
    setPickup("");
    setDestination("");
    setRideType("standard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ozzirap Rideshare</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10">
        <section className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to Ozzirap Rideshare!
          </h2>
          <p className="text-gray-600 mt-2">
            Your reliable rideshare solution. Book a ride quickly and
            conveniently.
          </p>
          <h2 className="text-2xl font-bold mt-5 text-gray-800 text-center">
            Book a Ride
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Enter your details below to book a ride.
          </p>
        </section>

        <section>
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="pickup"
                className="block text-gray-700 font-medium"
              >
                Pickup Location
              </label>
              <input
                type="text"
                id="pickup"
                placeholder="Enter pickup location"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="destination"
                className="block text-gray-700 font-medium"
              >
                Destination
              </label>
              <input
                type="text"
                id="destination"
                placeholder="Enter destination"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="rideType"
                className="block text-gray-700 font-medium"
              >
                Ride Type
              </label>
              <select
                id="rideType"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Book Ride
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2025 Ozzirap Rideshare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
