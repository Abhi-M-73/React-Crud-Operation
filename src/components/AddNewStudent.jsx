import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddNewStudent = () => {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { id, name, place, phone };
    const response = await axios.post("http://localhost:5000/students", data);
    setStudents(response.data)
    navigate("/");
  }


  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-lg border-t-4 border-purple-600 bg-white">
      <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">
        Add New Student
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="id" className="text-gray-700 font-semibold">
            ID:
          </label>
          <input
            onChange={(e) => setId(e.target.value)}
            type="text"
            name="id"
            value={id}
            className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold">
            Name:
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            value={name}
            className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="place" className="text-gray-700 font-semibold">
            Place:
          </label>
          <input
            onChange={(e) => setPlace(e.target.value)}
            type="text"
            name="place"
            value={place}
            className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 font-semibold">
            Phone:
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            name="phone"
            value={phone}
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

export default AddNewStudent;
