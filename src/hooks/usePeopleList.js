import { useQuery } from "react-query";
import axios from "axios";

const getPeople = async () => {
  const {
    data: { people },
  } = await axios("http://localhost:5050/api/people");
  return people;
};

export default function usePeopleList() {
  return useQuery("getPeopleList", getPeople);
}
