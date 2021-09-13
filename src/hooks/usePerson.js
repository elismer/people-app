import { useQuery } from "react-query";
import axios from "axios";

const getPerson = async (email) => {
  const {
    data: { person },
  } = await axios(`http://localhost:5050/api/people/${email}`);
  return person;
};

export default function usePerson(email) {
  return useQuery("getPerson", () => getPerson(email), { enabled: false });
}
