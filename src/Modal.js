import React from "react";

function Modal ({ isOpen, onClose, title, message }) {
    if (!isOpen) return null; //This will not render the modal if it is not open

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <p className="text-gray-600 text-center mt-4">
                    {message}
                </p>
                <div className="flex justify-center mt-6">
                    <button onClick={onClose}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;