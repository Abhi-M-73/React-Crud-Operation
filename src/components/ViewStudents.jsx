import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewStudents = () => {
  // Extract 'id' from the URL parameters
  const { studentId } = useParams();

  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        // Make an API call to get student details by ID
        const response = await axios.get(`http://localhost:5000/students/${studentId}`);
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudent();
  }, [studentId]);

  if (!student) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-bold text-gray-700">Loading student data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded-lg shadow-lg border-t-4 border-purple-600 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Student Details
      </h2>
      <div className="flex items-center gap-3">
        <span className="block font-bold text-gray-700">ID:</span>
        <span className="text-blue-600 text-lg font-semibold">{student.id}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="block font-bold text-gray-700">Name:</span>
        <span className="text-blue-600 text-lg font-semibold">{student.name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="block font-bold text-gray-700">Place:</span>
        <span className="text-blue-600 text-lg font-semibold">{student.place}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="block font-bold text-gray-700">Phone:</span>
        <span className="text-blue-600 text-lg font-semibold">{student.phone}</span>
      </div>
      <Link to={"/"}>
        <button className="w-full mt-5 sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition">
          Back
        </button>
      </Link>
    </div>
  );
};

export default ViewStudents;
