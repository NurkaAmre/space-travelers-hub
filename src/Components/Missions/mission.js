import React from 'react'

const mission = (item) => {
  const { name, desc, status } = item;

  console.log(name);
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{desc}</td>
      <td className='align-self-center'><span class="badge bg-info text-dark">{status}</span></td>
      <td><button type="button" class="btn btn-outline-dark">Mission action</button></td>
      
    </tr>
  )
}
 export default mission;
