import React, { useState } from "react";

function App() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("standard");
  const [pickupError, setPickupError] = useState("");
  const [destinationError, setDestinationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    setPickupError("");
    setDestinationError("");

    if (!pickup.trim()) {
      setPickupError("Please enter a pickup location.");
    }

    if (!destination.trim()) {
      setDestinationError("Please enter a destination.");
    }

    if (!pickup.trim() || !destination.trim()) {
      return;
    }

    setLoading(true); //This starts the loading state
    setTimeout(() => {
      console.log("Booking Details:");
      console.log("Pickup Location:", pickup);
      console.log("Destination:", destination);
      console.log("Ride Type:", rideType);

      setPickup("");
      setDestination("");
      setRideType("standard");

      setLoading(false); //This stops the loading state

      // Display the success message
      setSuccessMessage("Your ride has been booked successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ozzirap Rideshare</h1>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
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

      <main className="flex-grow container mx-auto px-4 py-10 md:py-16 lg:py-20">
        <section className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to Ozzirap Rideshare!
          </h2>
          <p className="text-gray-600 mt-2">
            Your reliable rideshare solution. Book a ride quickly and conveniently.
          </p>
        </section>

        <section>
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md md:max-w-lg lg:max-w-xl"
          >
            <div className="mb-4">
              <label htmlFor="pickup" className="block text-gray-700 font-medium">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickup"
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                  if (e.target.value.trim()) {
                    setPickupError("");
                  } else {
                    setPickupError("Please enter a pickup location.");
                  }
                }}
                placeholder="Enter pickup location"
                className={`w-full mt-2 p-2 border rounded ${
                  pickupError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {pickupError && <p className="text-red-500 text-sm mt-1">{pickupError}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="destination" className="block text-gray-700 font-medium">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  if (e.target.value.trim()) {
                    setDestinationError("");
                  } else {
                    setDestinationError("Please enter a destination.");
                  }
                }}
                placeholder="Enter destination"
                className={`w-full mt-2 p-2 border rounded ${
                  destinationError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {destinationError && <p className="text-red-500 text-sm mt-1">{destinationError}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="rideType" className="block text-gray-700 font-medium">
                Ride Type
              </label>
              <select
                id="rideType"
                value={rideType}
                onChange={(e) => setRideType(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded ${
                loading ||
                pickupError ||
                destinationError ||
                !pickup.trim() ||
                !destination.trim()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              disabled={
                pickupError || destinationError || !pickup.trim() || !destination.trim()
              }
            >
              {loading ? "Submitting..." : "Book Ride"}
            </button>
          </form>
          {successMessage && (
            <p className="text-green-700 text-center font-medium mt-4">
              {successMessage}
            </p>
          )}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm lg:text-base">
          &copy; 2025 Ozzirap Rideshare. All rights reserved-amansopinion.
        </div>
      </footer>
    </div>
  );
}

export default App;
