import React from 'react';


const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-3xl my-2 text-center">User List</h1>
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">ID</th>
                <th className="border border-slate-600 rounded-md">First Name</th>
                <th className="border border-slate-600 rounded-md">Last Name</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Email</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Department</th>
                <th className="border border-slate-600 rounded-md">Actions</th>
              </tr>
            </thead>

            <tbody >
              {users.map(user => (
                <tr key={user.id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">{user.id}</td>
                  <td className="border border-slate-700 rounded-md text-center">{user.firstName}</td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">{user.lastName}</td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">{user.email}</td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">{user.department}</td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <button className="p-2 bg-green-500  rounded-md hover:bg-green-900 transition" onClick={() => onEdit(user)}>Edit</button>
                    <button className="p-2 bg-red-500 m-2 rounded-md hover:bg-red-700 transition" onClick={() => onDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>







    </>

  );
};

export default UserList;
