import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Mission = (item) => {
  const { id, name, desc, status, handleClick, missionsL } = item;
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{desc}</td>
      <td>
        <span
          className={status ? "badge bg-info text-dark" : "badge bg-secondary"}
        >
          {status ? "Active Member" : "NOT A MEMBER"}
        </span>
      </td>
      <td>
        <button
          type="button"
          className={
            status ? "btn btn-outline-dark" : "btn btn-outline-danger"
          }
          onClick={() => handleClick(id, missionsL, status)}
        >
          {status ? "Leave Mission" : "Join Mission"}
        </button>
      </td>
    </tr>
  );
};
export default Mission;
