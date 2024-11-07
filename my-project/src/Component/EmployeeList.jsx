const  EmployeeList = () =>{
    return(
    <div className="py-2 ">
        <table className="w-full border">
            <thead>
                <tr>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">First Name</th>
                    <th className="p-2 border">Last Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Action</th>
                </tr>
            </thead>
            <tbody>
                <td className="p-2 border">01</td>
                <td className="p-2 border">Ayam</td>
                <td className="p-2 border">Kaliwang</td>
                <td className="p-2 border">ayamkaliwangsurabaya@.ac.id</td>
                <td className="p-2 border">
                <button 
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                >
                    Edit
                </button>
                <button className="m-2 px-6 py-2 text-white bg-red-600 rounded ">
                    hapus
                </button>
                </td>
            </tbody>
        </table>
    </div>
    );
}

export default EmployeeList;