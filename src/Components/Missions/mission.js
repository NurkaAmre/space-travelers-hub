import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Mission = (item) => {
  const { id, name, desc, status, handleClick, missionsL } = item;
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{desc}</td>
      <td className='align-self-center'><span className={status ? "badge bg-info text-dark" : "badge bg-secondary"}>{ status ? 'Active Member' : 'NOT A MEMBER' }</span></td>
      <td><button type="button" className="btn btn-outline-dark"  onClick={() => handleClick(id,missionsL,status)}>Mission</button></td>
      
    </tr>
  )
}
 export default Mission;
