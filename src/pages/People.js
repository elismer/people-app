import React from "react";
import ListPeople from "../components/listPeople";
const peopleList = [
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
  {
    id: 4,
    first_name: "Leeann",
    last_name: "Paolo",
    email: "lpaolo3@stanford.edu",
    gender: "Bigender",
    ip_address: "124.183.58.225",
  },
  {
    id: 5,
    first_name: "Daphna",
    last_name: "Jore",
    email: "djore4@newsvine.com",
    gender: "Female",
    ip_address: "144.206.12.204",
  },
  {
    id: 6,
    first_name: "Ricki",
    last_name: "Spiaggia",
    email: "rspiaggia5@bravesites.com",
    gender: "Female",
    ip_address: "237.208.20.155",
  },
];

export default function People() {
  return <ListPeople data={peopleList} />;
}
