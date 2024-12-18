import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentRecords from './components/StudentRecords'
import AddNewStudent from './components/AddNewStudent'
import ViewStudents from './components/ViewStudents'
import EditStudentRecords from './components/EditStudentRecords';


const App = () => {
  return (
    <div className='h-screen w-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentRecords />} />
          <Route path='/add-student' element={<AddNewStudent />} />
          <Route path='/students/view/:id' element={<ViewStudents />} />
          <Route path='/edit-students' element={<EditStudentRecords />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
