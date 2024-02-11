import React from 'react'

function Row({employee}) {
   
  return (
    <tr>
        <td>{employee.date}</td>
        <td>{employee.ename}</td>
        <td>{employee.opening}</td>
        <td>{employee.closing}</td>
        <td>{employee.balance}</td>
    </tr>
  )
}

export default Row
