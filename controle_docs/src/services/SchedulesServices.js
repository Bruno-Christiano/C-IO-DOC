import { http } from "./api-config"; //importando arquivo de config da api (api-config.js)

export default {
  save: (schedule) => {
    return http.post("schedules", schedule);
  },

  update: (schedule) => {
    return http.put("schedules", schedule);
  },

  findAll: () => {
    return http.get("schedules");
  },

  listDocTypes: () =>{
    return http.get("doctypes");
  },

  delete: (schedule) => {
    return http.delete(`schedules/${schedule.id}`);
  },
};