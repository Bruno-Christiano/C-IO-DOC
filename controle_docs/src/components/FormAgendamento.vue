<template>
  <div id="component">
    <MensagemConclusao
      :mensagemConclusao="message"
      :bg_color="background"
      :color="color"
      v-show="message"
    />
    <form class="column g-3 needs-validation" @submit="send">
      <div class="row">
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label"
            >Nome Completo:</label
          >
          <input
            v-model="schedule.fullName"
            type="text"
            class="form-control"
            id="validationCustom01"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">CPF:</label>
          <input
            v-model="schedule.cpf"
            v-maska="'###.###.###-##'"
            type="text"
            class="form-control"
            id="validationCustom02"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Telefone:</label>
          <input
            v-model="schedule.phone"
            v-maska="'(##) # ####-####'"
            type="tel"
            class="form-control"
            id="validationCustom02"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom04" class="form-label"
            >Informe o tipo de documento:</label
          >
          <select
            class="form-select"
            id="validationCustom04"
            v-model="schedule.typeDocument"
          >
            <option selected disabled value="">Escolha...</option>
            <option v-for="doc in typeDocuments" :key="doc.id">
              {{ doc.text }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Pendências <span id="obs">(Caso haja alguma)</span>:</label
          >
          <textarea
            v-model="schedule.pendencyDescription"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label for="" class="form-label">Data de entrega estimada: </label>
          <input
            type="date"
            name=""
            class="form-control"
            v-model="schedule.expectedDate"
          />
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn" :disabled="this.v$.$invalid">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Enviar</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, helpers } from '@vuelidate/validators'
import SchedulesServices from '../services/SchedulesServices'
import MensagemConclusao from '../components/MensagemConclusao.vue'

export default {
  name: 'FormAgendamento',

  data() {
    return {
      schedule: {
        fullName: '',
        cpf: '',
        phone: '',
        pendencyDescription: '',
        expectedDate: '',
        typeDocument: ''
      },

      typeDocuments: [
        { id: 1, text: 'RG' },
        { id: 2, text: 'CPF' },
        { id: 3, text: 'Espelho' }
      ],

      background: '#0477bf',
      color: 'white',
      message: ''
    }
  },

  setup() {
    return { v$: useValidate() }
  },

  validations() {
    return {
      schedule: {
        fullName: { required },
        cpf: { required, minLength: minLength(14) },
        phone: { required, minLength: minLength(16) },
        typeDocument: { required },
        expectedDate: { required, maxLength: maxLength(10) }
      }
    }
  },

  methods: {
    send(e) {
      e.preventDefault()
      this.v$.$touch()

      if (this.v$.$invalid) {
        alert('Existem campos obrigatórios vazios!')
      } else {
        SchedulesServices.save(this.schedule)

          .then(res => {
            this.schedule = {}
            console.log(res.data)
            this.message = 'Agendamento efetuado com sucesso!'
            setTimeout(() => {
              this.message = ''
              location.reload()
            }, 5000)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  },

  components: {
    MensagemConclusao
  }
}
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#component {
  min-height: 100vh;
  width: 88vw;
  margin: auto;
  max-width: 1000px;
  min-width: 400px;
  background: #dafaff;
}

form {
  border: 1px solid rgba(0, 0, 0, 0.384);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.384);
}

label,
span {
  font-weight: 600;
}

#obs {
  font-weight: normal;
}

.row,
button {
  margin-bottom: 30px;
}

button {
  font-family: inherit;
  font-size: 20px;
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
  margin-top: 20px;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(-0.4em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(0.5em);
}

button:active {
  transform: scale(0.95);
}

button:disabled{
  background: rgb(88, 88, 88);
}

.btn{
  color: white;
}

@keyframes fly-1 {
  from {
    transform: translateY(0.2em);
  }

  to {
    transform: translateY(-0.2em);
  }
}
</style>
