import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudentRecords = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { studentId } = useParams();

  const handleEdit = async (e) => {
    e.preventDefault();

    if (!id || !name || !place || !phone) {
      setError("All fields are required!");
      return;
    }

    try {
      const data = { id, name, place, phone };
      await axios.put(`http://localhost:5000/students/${studentId}`, data);
      setError(null);
      navigate("/");
    } catch (error) {
      console.error("Error updating student data:", error);
      setError("Failed to update student record. Please try again.");
    }
  };

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/students/${studentId}`);
        setId(response.data.id);
        setName(response.data.name);
        setPlace(response.data.place);
        setPhone(response.data.phone);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setError("Failed to fetch student data. Please try again.");
      }
    };

    fetchStudent();
  }, [studentId]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-lg border-t-4 border-purple-600 bg-white">
      <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">
        Edit Student Record
      </h2>
      {error && (
        <p className="text-red-500 text-center mb-4 font-semibold">{error}</p>
      )}
      <form onSubmit={handleEdit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="id" className="text-gray-700 font-semibold">
            ID:
          </label>
          <input
            onChange={(e) => setId(e.target.value)}
            value={id}
            readOnly
            type="text"
            id="id"
            className="mt-1 p-2 border-2 rounded-lg w-full outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold">
            Name:
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            className="mt-1 p-2 border-2 rounded-lg w-full focus:ring focus:ring-indigo-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="place" className="text-gray-700 font-semibold">
            Place:
          </label>
          <input
            onChange={(e) => setPlace(e.target.value)}
            value={place}
            type="text"
            id="place"
            className="mt-1 p-2 border-2 rounded-lg w-full focus:ring focus:ring-indigo-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 font-semibold">
            Phone:
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="text"
            id="phone"
            className="mt-1 p-2 border-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 w-full sm:w-auto"
          >
            Update
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
