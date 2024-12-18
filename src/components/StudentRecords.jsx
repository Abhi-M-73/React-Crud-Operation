import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentRecords = () => {
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  const viewDetails = (id) => {
    navigate(`/students/view/${id}`);
  }

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/students");
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchStudents();
  }, []);


  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-lg border-t-4 border-purple-600 bg-white">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Student Records</h2>
        <Link to={"/add-student"}>
          <button className="px-4 py-2 mt-4 sm:mt-0 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700">
            Add New Student
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="py-3 px-4 text-left">SL NO</th>
              <th className="py-3 px-4 text-left">NAME</th>
              <th className="py-3 px-4 text-left">PLACE</th>
              <th className="py-3 px-4 text-left">PHONE</th>
              <th className="py-3 px-4 text-left">ACTIONS</th>
            </tr>
          </thead>
          <tbody>

            {
              students.map((elem, index) => {
                return (
                  <tr key={index} className="bg-gray-100 hover:bg-gray-200">
                    <td className="py-3 px-4">{elem.id}</td>
                    <td className="py-3 px-4">{elem.name}</td>
                    <td className="py-3 px-4">{elem.place}</td>
                    <td className="py-3 px-4">{elem.phone}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col sm:flex-row sm:space-x-2">
                        <button onClick={() => viewDetails(elem.id)} className="px-3 py-1 mb-2 sm:mb-0 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600">
                          View
                        </button>
                        <Link to={"/edit-students"}>
                          <button className="px-3 py-1 mb-2 sm:mb-0 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700">
                            Edit
                          </button>
                        </Link>
                        <button className="px-3 py-1 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentRecords;
