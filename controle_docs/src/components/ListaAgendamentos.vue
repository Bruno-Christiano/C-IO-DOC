<template>
  <div>
    <table class="table" v-if="people.length !== 0">
      <thead>
        <tr>
          <th class="col">Nome:</th>
          <th class="col">CPF:</th>
          <th class="col-4">Data de entrega estimada:</th>
          <th class="col-1">Ações:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in people" :key="index">
          <td :hidden="person.stts == true">{{ person.fullName }}</td>
          <td :hidden="person.stts == true">{{ person.cpf }}</td>
          <td :hidden="person.stts == true">{{ person.date }}</td>
          <td :hidden="person.stts == true">
            <div>
              <router-link
                :to="{ name: 'EditarDados', params: { id: person.id } }"
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
                <button @click="setStatus(index)">Entregue</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>


    
    <div class="margin">
      <h1>Documentos entregues (Teste)</h1>
      <table class="table" v-if="people.length !== 0">
        <thead>
          <tr>
            <th class="col">Nome:</th>
            <th class="col">CPF:</th>
            <th class="col-4">Data de entrega estimada:</th>
            <th class="col-1">Ações:</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in people" :key="index">
            <td :hidden="person.stts == false">{{ person.fullName }}</td>
            <td :hidden="person.stts == false">{{ person.cpf }}</td>
            <td :hidden="person.stts == false">{{ person.date }}</td>
            <td :hidden="person.stts == false">
              <div>
                <router-link
                  :to="{ name: 'EditarDados', params: { id: person.id } }"
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
                  <button @click="setStatus(index)">Entregue</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PeopleServices from '../services/PeopleServices'

export default {
  name: 'Edit',
  data() {
    return {
      people: [],
      teste: []
    }
  },
  mounted() {
    this.findAllPeople()
  },
  methods: {
    findAllPeople() {
      PeopleServices.findAll()

        .then(response => {
          this.people = response.data
          console.log(this.people)

          const newPeople = this.people.map(teste => {
            teste.stts = false
            return newPeople
            // console.log(newPeople);
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    setStatus(id) {
      let pessoas = this.people
      if (pessoas[id].stts === false) {
        pessoas[id].stts = true
        // pessoas.splice(id, 1)
      }
      console.log(pessoas[0].stts)
    }
  }
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

.margin{
  margin-top: 200px;
}
</style>
