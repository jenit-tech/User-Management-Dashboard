import React, { useState, useEffect } from 'react';

const UserForm = ({ initialData, onSave }) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', department: '' });

    useEffect(() => {
       setFormData(initialData || { firstName: '', lastName: '', email: '', department: '' });
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData); 
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                <h2 className="text-3xl my-4">{formData.id ? 'Edit User' : 'Add User'}</h2>
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">First Name</label>
                        <input
                            className="border-2 border-gray-500 px-4 py-2 w-full"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Last Name</label>
                        <input
                            className="border-2 border-gray-500 px-4 py-2 w-full"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Email</label>
                        <input
                            className="border-2 border-gray-500 px-4 py-2 w-full"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Department</label>
                        <input
                            className="border-2 border-gray-500 px-4 py-2 w-full"
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            placeholder="Department"
                            required
                        />
                    </div>
                </div>
                <button
                    className="p-2 bg-sky-300 m-8 rounded-md hover:bg-sky-500 transition"
                    type="submit"
                >
                    {formData.id ? 'Save Changes' : 'Add User'}
                </button>
            </form>
        </div>
    );
};

export default UserForm;
