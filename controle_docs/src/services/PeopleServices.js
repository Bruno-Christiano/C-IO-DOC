import { http } from "./api-config"; //importando arquivo de config da api (api-config.js)

export default {
  save: (person) => {
    return http.post("people", person);
  },

  update: (person) => {
    return http.put("people", person);
  },

  findAll: () => {
    return http.get("people");
  },

  listDocTypes: () =>{
    return http.get("doctypes");
  },

  delete: (person) => {
    return http.delete(`people/${person.id}`);
  },
};