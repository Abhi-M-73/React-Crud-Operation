import React from "react";

const ViewStudents = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded-lg shadow-lg border-t-4 border-purple-600 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Student Details
      </h2>
      <div className="flex items-center gap-3">
        <span className="block font-bold text-gray-700">ID:</span>
        <span className="text-blue-600 text-lg font-semibold">15</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="block font-bold text-gray-700">Name:</span>
        <span className="text-gray-800 text-lg font-semibold">Siya</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="block font-bold text-gray-700">Place:</span>
        <span className="text-gray-800 text-lg font-semibold">Gujarat</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="block font-bold text-gray-700">Phone:</span>
        <span className="text-gray-800 text-lg font-semibold">9878767521</span>
      </div>
      <button className="w-full mt-5 sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition">
        Back
      </button>
    </div>
  );
};

export default ViewStudents;
