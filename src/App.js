import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function App() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("standard");
  const [pickupError, setPickupError] = useState("");
  const [destinationError, setDestinationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setRideType("single");
  }, []);

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
      console.log(
        "Ride Type:",
        rideType === "single" ? "Single Passenger" : "Group Ride"
      );

      // Display the success message
      setSuccessMessage(
        `Your ride has been booked successfully as a ${
          rideType === "single" ? "Single Passenger" : "Group Ride"
        }!`
      );

      setTimeout(() => setSuccessMessage(""), 3000);

      setPickup("");
      setDestination("");
      setRideType("single");
      setLoading(false); //This stops the loading state
      setIsModalOpen(true);
    }, 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            Straight to the office! No detours, No bus stress, No "My Change"
            wahala!
          </p>{" "}
          <br></br>
          <h3 className="text-2xl font-bold text-gray-800">
            Book a Driver going your way, below!
          </h3>
        </section>

        <section>
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md md:max-w-lg lg:max-w-xl"
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
              {pickupError && (
                <p className="text-red-500 text-sm mt-1">{pickupError}</p>
              )}
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
              {destinationError && (
                <p className="text-red-500 text-sm mt-1">{destinationError}</p>
              )}
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
                value={rideType}
                onChange={(e) => setRideType(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
              >
                <option value="single">Single Passenger</option>
                <option value="group">Group Ride</option>
              </select>
              <p className="text-gray-500 text-sm mt-1">
                Choose <strong>"Single Passenger"</strong> for a private ride or <strong>"Group Ride"</strong> to
                share with up to 2 passengers.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-700 mb-2"> Ride Summary </h3>
              <ul className="text-gray-600">
                <li>
                  <strong> Pickup Location:</strong> {pickup || "Not provided yet"}
                </li>
                <li>
                  <strong>Destination:</strong> {destination || "Not provided yet"}
                </li>
                <li>
                  <strong>Ride Type:</strong>{" "}
                  {rideType === "single" ? "Single Passenger" : "Group Ride"}
                </li>
              </ul>
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
                pickupError ||
                destinationError ||
                !pickup.trim() ||
                !destination.trim()
              }
            >
              {loading ? "Submitting..." : "Book Ride"}
            </button>
          </form>
          {pickup.trim() && destination.trim() && (
            <div className="mt-6 p-4 border rounded bg-gray-50 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Your Booking Details:</h3>
              <p>Pickup Location: {pickup}</p>
              <p>Destination: {destination}</p>
              <p>
                Ride Type:{" "}
                {rideType === "single" ? "Single Passenger" : "Group Ride"}
              </p>
            </div>
          )}

          {successMessage && (
            <p className="text-green-700 text-center font-medium mt-4">
              {successMessage}
            </p>
          )}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm lg:text-base">
          amansopinion &copy; 2025 Ozzirap Rideshare. All rights reserved
        </div>
      </footer>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
