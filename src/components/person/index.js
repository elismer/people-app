import React from "react";

export default function Person({
  first_name,
  last_name,
  email,
  gender,
  ip_address,
}) {
  return (
    <div>
      <ul>
        <li>Nombre: {first_name}</li>
        <li>Apellido: {last_name}</li>
        <li>email: {email}</li>
        <li>gender: {gender}</li>
        <li>ip_address: {ip_address}</li>
      </ul>
    </div>
  );
}
