<template>
  <div id="editar-dados">
    <form class="column g-3 needs-validation" @submit="send">
      <div class="row">
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label"
            >Nome Completo:</label
          >
          <input
            v-model="person.fullName"
            type="text"
            class="form-control"
            id="validationCustom01"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">CPF:</label>
          <input
            v-model="person.cpf"
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
            v-model="person.tel"
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
            v-model="person.doctype"
          >
            <option selected disabled value="">Escolha...</option>
            <option v-for="doc in doctypes" :key="doc.id">
              {{ doc.type }}
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
            v-model="person.pendencies"
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
            v-model="person.date"
          />
        </div>
      </div>
      <div class="col-12">
        <button type="submit">Atualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditarDados',
  data() {
    return {
      person: {
        fullName: '',
        cpf: '',
        tel: '',
        pendencies: '',
        date: '',
        doctype: ''
      }
    }
  }
}
</script>

<style scoped>
#editar-dados {
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

@keyframes fly-1 {
  from {
    transform: translateY(0.2em);
  }

  to {
    transform: translateY(-0.2em);
  }
}
</style>
