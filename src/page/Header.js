import React from "react";

const Header = ({ setIsAdding }) => {
  return (
    <header>
      {" "}
      <h2>Employee Management System</h2>
      <div>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employee
        </button>
      </div>
    </header>
  );
};
export default Header;
