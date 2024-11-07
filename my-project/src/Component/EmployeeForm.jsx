import React from "react";
 
const EmployeeFrom=()=>{
    return(
        <div>
            <form className="p-4 space-y-4 bg-slate-800 rounded-md">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="p-2 border rounded w-full"
                />
                 <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="p-2 border rounded w-full"
                />
                <input
                    type="text"
                    name="emailId"
                    placeholder="Email ID"
                    className="p-2 border rounded w-full"
                />
                <button 
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                >
                Simpan
                </button>
                <button className="m-2 px-6 py-2 text-white bg-red-600 rounded ">
                    Batal
                </button>
            </form>
        </div>
    );
}

export default EmployeeFrom;