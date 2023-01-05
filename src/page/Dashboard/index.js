import React, { useState } from "react";
import { employeesData } from "../../data";
import Header from "../Header";
import List from "../List";
import Add from "../Add";
import Edit from "../Edit";
import Swal from "sweetalert2";
const Dashboard = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (id) => {
    // console.log("edit id", id);
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    // console.log("delete id", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,

      cancelButtonText: "No, cancel!",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);
        Swal.fire({
          icon: "success",
          title: "deleted",
          text: `${employee.firstName}${employee.lastName}'s data has been deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };
  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
