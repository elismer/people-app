import axios from "axios";
import { useMutation } from "react-query";

const editPerson = async ({ id, data }) => {
  const { data: personEdited } = await axios.put(
    `http://localhost:5050/api/people/${id}`,
    { data }
  );
  return personEdited;
};

export default function useEditPerson() {
  return useMutation(({ id, person }) => editPerson({ id, data: person }), {
    onSuccess: () => {
      console.log("Persona editada");
    },
  });
}
