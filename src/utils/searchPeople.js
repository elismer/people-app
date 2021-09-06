export const searchPeople = {
  nombre: ({ data, query }) => {
    return data.filter((person) => {
      console.log("search", { data, query });
      return query
        ? person.first_name.toLowerCase().includes(query.toLowerCase())
        : true;
    });
  },
  apellido: ({ data, query }) => {
    return data.filter((person) => {
      return query
        ? person.last_name.toLowerCase().includes(query.toLowerCase())
        : true;
    });
  },
  genero: ({ data, query }) => {
    return data.filter((person) => {
      return query
        ? person.gender.toLowerCase().includes(query.toLowerCase())
        : true;
    });
  },
  email: ({ data, query }) => {
    return data.filter((person) => {
      return query
        ? person.email.toLowerCase().includes(query.toLowerCase())
        : true;
    });
  },
  ip_address: ({ data, query }) => {
    return data.filter((person) => {
      return query
        ? person.ip_address.toLowerCase().includes(query.toLowerCase())
        : true;
    });
  },
};
