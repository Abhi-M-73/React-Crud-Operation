import React from "react";

const StudentRecords = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-lg border-t-4 border-purple-600 bg-white">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Student Records</h2>
        <button className="px-4 py-2 mt-4 sm:mt-0 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700">
          Add New Student
        </button>
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
            <tr className="bg-gray-100 hover:bg-gray-200">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4">Khanam</td>
              <td className="py-3 px-4">Mysore</td>
              <td className="py-3 px-4">9876543231</td>
              <td className="py-3 px-4">
                <div className="flex flex-col sm:flex-row sm:space-x-2">
                  <button className="px-3 py-1 mb-2 sm:mb-0 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600">
                    View
                  </button>
                  <button className="px-3 py-1 mb-2 sm:mb-0 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            {/* Additional rows can be hardcoded here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentRecords;
