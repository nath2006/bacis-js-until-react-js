import React from 'react';
import EmployeeFrom from './Component/EmployeeForm';
import EmployeeList from './Component/EmployeeList';

function App() {

  return (
    <div className="container mx-auto p-4">
      <h1 className='py-4 text-2xl font-bold'>Aplikasi Management Karyawan</h1>
      <EmployeeFrom/>
      <EmployeeList/>
    </div>
  )
}

export default App;