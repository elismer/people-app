import React from "react";

const person = [
  {
    id: 1,
    first_name: "Alysa",
    last_name: "Lamden",
    email: "alamden0@elegantthemes.com",
    gender: "Male",
    ip_address: "67.76.149.50",
  },
  {
    id: 2,
    first_name: "Gallard",
    last_name: "Tilmouth",
    email: "gtilmouth1@time.com",
    gender: "Non-binary",
    ip_address: "225.129.181.30",
  },
  {
    id: 3,
    first_name: "Peggy",
    last_name: "Cahen",
    email: "pcahen2@pbs.org",
    gender: "Female",
    ip_address: "175.45.17.86",
  },
];

export default function Person() {
  return (
    <div>
      <ul>
        {person.map((p) => (
          <li key={p.id}>
            <ul>
              <li key="first_name">
                <p>Nombre: {p.first_name}</p>
              </li>
              <li key="last_name">
                <p>Apellido: {p.last_name}</p>
              </li>
              <li key="email">
                <p>email: {p.email}</p>
              </li>
              <li key="gender">
                <p>gender: {p.gender}</p>
              </li>
              <li key="ip_address">
                <p>ip address: {p.ip_address}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
