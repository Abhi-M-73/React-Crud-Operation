import React from "react";
import { Link } from "react-router-dom";

const EditStudentRecords = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-lg border-t-4 border-purple-600 bg-white">
      <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">
        Edit Student Record
      </h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="id" className="text-gray-700 font-semibold">
            ID:
          </label>
          <input
            type="text"
            id="id"
            className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="place" className="text-gray-700 font-semibold">
            Place:
          </label>
          <input
            type="text"
            id="place"
            className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 font-semibold">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 w-full sm:w-auto"
          >
            Save
          </button>
          <Link to={"/"}>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 w-full sm:w-auto"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditStudentRecords;
