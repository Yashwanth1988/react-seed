
import React from 'react';

export const EmployeeDetails = ({ employee, show }) => {

  const RenderSalary = () => {
      if(employee.employee_salary <= 2000) {
        return <span className={'red'}>{employee.employee_salary}</span>
      }
      if(employee.employee_salary > 2000 && employee.employee_salary <= 4000) {
        return <span className={'green'}>{employee.employee_salary}</span>
      }
      if(employee.employee_salary > 4000) {
        return <span className={'blue'}>{employee.employee_salary}</span>
      }
      return <span>{employee.employee_salary}</span>
  }

  if (show) {
    return (
      <>
        <div>employee_name: {employee.employee_name}</div>
        <div>employee_age: {employee.employee_age}</div>
        <div>employee_salary: <RenderSalary /></div>
      </>
    );
  }
  return null;
};
