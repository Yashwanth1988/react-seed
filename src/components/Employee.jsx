import React from 'react';
import {EmployeeDetails} from './EmployeeDetails'

export const Employee = ({ employee }) => {
  const [show, setShow] = React.useState(false);
  const [empDetails, setEmpDetails] = React.useState({});

  const handleShowDetails = details => {
    setEmpDetails(details);
    setShow(!show);
  };

  return (
    <>
      <div
        onClick={() => {
          handleShowDetails(employee);
        }}
      >
        {employee.employee_name}
      </div>
      <EmployeeDetails show={show} employee={empDetails} />
    </>
  );
};
