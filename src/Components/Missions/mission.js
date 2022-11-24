import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const mission = (item) => {
  const { name, desc, status } = item;

  console.log(name);
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{desc}</td>
      <td className='align-self-center'><span class="badge bg-info text-dark">{status}</span></td>
      <td><button type="button" class="btn btn-outline-dark">Mission</button></td>
      
    </tr>
  )
}
 export default mission;
