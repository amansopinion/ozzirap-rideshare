import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("single");
  const [pickupError, setPickupError] = useState("");
  const [destinationError, setDestinationError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("Booking Successful");

  const validateInput = (input, fieldName) => {
    if (!input.trim()) return `${fieldName} is required.`;
    if (input.trim().length < 3)
      return `${fieldName} must be at least 3 characters long.`;
    if (!/^[a-zA-Z\s]+$/.test(input))
      return `${fieldName} can only contain letters and spaces.`;
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)

    setPickupError("");
    setDestinationError("");

    //This validates pickup and destination
    let hasError = false;

    const pickupValidation = validateInput(pickup, "Pickup location");
    if (pickupValidation) {
      setPickupError(pickupValidation);
      hasError = true;
    }

    const destinationValidation = validateInput(
      destination,
      "Destination location"
    );
    if (destinationValidation) {
      setDestinationError(destinationValidation);
      hasError = true;
    } else if (
      pickup.trim().toLowerCase() === destination.trim().toLowerCase()
    ) {
      setDestinationError("Pickup and Destination cannot be the same.");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true); //This starts the loading instance

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.2 ? resolve() : reject(new Error("Network Error"));
        }, 2000);
      });

      console.log("Current rideType:", rideType);

      const successMessage =
        rideType === "single"
          ? "Your ride has been successfully booked as a Single Passenger!"
          : "Your ride has been successfully booked as a Group Passenger!";
      setModalTitle("Booking Successful");
      setModalMessage(successMessage);

      setPickup("");
      setDestination("");
      setRideType("single");
    } catch (error) {
      setModalTitle("Booking Unsuccessful");
      setModalMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsModalOpen(true);
      setLoading(false); //This stops the loading state
    }
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
            Book a Driver going your way!
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
                aria-label="Pickup Location"
                aria-invalid={!!pickupError}
                aria-describedby="pickup-error"
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
                aria-label="Destination"
                aria-invalid={!!destinationError}
                aria-describedby="destination-error"
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
                Choose <strong>"Single Passenger"</strong> for a private ride or{" "}
                <strong>"Group Ride"</strong> to share with up to 2 passengers.
              </p>
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
              aria-label="Book Ride"
            >
              {loading ? "Submitting..." : "Book Ride"}
            </button>
          </form>
        </section>
      </main>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalTitle}
          message={modalMessage}
        >
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">{modalMessage}</h2>
            <button
              onClick={closeModal}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </Modal>
      )}

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm lg:text-base">
          amansopinion &copy; 2025 Ozzirap Rideshare. All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
