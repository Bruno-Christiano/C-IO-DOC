<template>
  <div class="home">
    <router-link to="/agendar">
      <button id="agendar">
        Agendar
        <ion-icon name="book-outline"></ion-icon>
      </button>
    </router-link>

    <router-link to="/agendamentos">
      <button id="editar">
        Agendamentos
        <ion-icon name="create-outline" id="edit-icon"></ion-icon>
      </button>
    </router-link>
  </div>
</template>

<script>
import FormAgendamento from '../pages/Agendar.vue'
import Agendamentos from './Agendamentos.vue'

export default {
  name: 'Home',
  components: {
    FormAgendamento,
    Agendamentos
  }
}
</script>

<style scoped>
.home {
  display: flex;
  min-height: 83vh;
  flex-direction: row;
  align-items: center; /*alinha verticalmente ao centro*/
  justify-content: space-around; /*alinha horizontalmente*/
}

/* a {
  min-width: 25%;
  height: 15%;
} */

button {
  padding: 3em 3em;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: rgb(34, 34, 34);
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.322);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  /* width: 25%;
  height: 15%; */
}

button#agendar:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

/* button#agendar:active {
  transform: translateY(-7px);
} */

button#editar:hover {
  background-color: #0477bf;
  box-shadow: 0px 15px 20px rgba(4, 119, 191, 0.466);
  color: #fff;
  transform: translateY(-7px);
}

/* button#editar:active {
  transform: translateY(-1px);
} */

a {
  color: black;
}

a:hover {
  color: white;
}

ion-icon {
  font-size: 16.5px;
  position: absolute;
  transform: translateY(0px);
  padding: 0 7px;
}
</style>
