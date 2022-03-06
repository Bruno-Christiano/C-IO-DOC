<template>
  <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th class="col">Nome:</th>
            <th class="col">CPF:</th>
            <th class="col-4">Data de entrega estimada:</th>
            <th class="col-1">Ações:</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(schedule, index) in schedules" :key="index">
            <td>{{ schedule.fullName }}</td>
            <td>{{ schedule.cpf }}</td>
            <td>{{ formatedDate(schedule.expectedDate)}}</td>
            <td>
              <div>
                <router-link
                  :to="{ name: 'EditarDados', params: { id: schedule.id } }"
                >
                  <div>
                    <button type="submit">Editar</button>
                  </div>
                </router-link>
                <!-- <select name="" id="">
                  <option value="" selected>Pendente</option>
                  <option value="">Entregue</option>
                </select> -->
                <div>
                  <button>Entregue</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import moment from 'moment'
import SchedulesServices from '../services/SchedulesServices'

export default {
  name: 'Edit',
  data() {
    return {
      schedules: []
    }
  },

  mounted() {
    this.findAllSchedules()
  },

  methods: {
    findAllSchedules() {
      SchedulesServices.findAll()

        .then(response => {
          this.schedules = response.data
          console.log(this.schedules)
        })
        .catch(err => {
          console.log(err)
        })
    },

    formatedDate(date){
      return moment(date).format('DD/MM/YYYY')
    }
  },
}
</script>

<style scoped>
button {
  font-family: inherit;
  font-size: 15px;
  background: var(--main-color);
  color: white;
  padding: 0.5em 2em;
  padding-left: 1em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s;
  margin-bottom: 10px;
}
</style>
