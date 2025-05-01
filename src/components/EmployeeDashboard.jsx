import React from 'react';
import { Employee } from './Employee'

export const EmployeeDashboard = () => {
    const [employees, setEmployees] = React.useState([]);
    const [sort, setSort] = React.useState('asc')
    const [newEmployees, setNewEmployees] = React.useState(employees)


    React.useEffect(() => {
        if (employees.length == 0) {
            fetch('https://dummy.restapiexample.com/api/v1/employees')
                .then(data => {
                    const dataReceived = data.json()
                    return dataReceived
                }).then(data => {
                    console.log('data', data)
                    if (data.status == 'success') {
                        if (employees.length == 0) {
                            setEmployees(data.data);
                            setNewEmployees(data.data)
                        }
                    }
                })
                .catch(() => {
                });
        }
    }, [employees]);

    const handleSort = (e) => {
        const _sorted = [...employees]
        const sorted = _sorted.sort((a, b) => {
            if (sort == 'asc') {
                setSort('desc')
                return a.employee_name.localeCompare(b.employee_name)
            } else {
                setSort('asc')
                return b.employee_name.localeCompare(a.employee_name)
            }
        })
        setNewEmployees(sorted)
    }
    console.log('newEmployees', newEmployees)
    return (
        <>
            <div onClick={handleSort}>NAME</div>
            <div>
                {
                    newEmployees.map((employee) => {
                        return <Employee employee={employee} />;
                    })
                }
            </div>
        </>
    );
};
