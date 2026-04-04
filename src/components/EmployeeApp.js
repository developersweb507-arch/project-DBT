import React, { useState } from "react";
import "./Employee.css";

export default function EmployeeApp() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Tomeshwar", email: "Tomesh@gmail.com", department: "Engineering", position: " frontend developers", status: "Active" },
    { id: 2, name: "Bhavesh", email: "Bhavesh@gmail.com", department: "Engineering", position: " backend developers", status: "Active" },
    { id: 3, name: "Dwarika", email: "Dwarika@gmail.com", department: "Engineering", position: " group lider", status: "Active" },
    
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmp = {
      id: Date.now(),
      ...formData,
      status: "Active",
    };
    setEmployees([...employees, newEmp]);
    setFormData({ name: "", email: "", department: "", position: "" });
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Employee Details</h2>
        <ul>
          <li className="active">Employees Details</li>
          <li> + Employee</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <h2>Employee Directory</h2>

        {/* Add Employee */}
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
          <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} required />
          <button type="submit">Add Employee</button>
        </form>

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Position</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>
                  <span className={emp.status === "Active" ? "badge active" : "badge leave"}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}