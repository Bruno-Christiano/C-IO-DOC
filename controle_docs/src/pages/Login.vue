<template>
  <div id="login">
    <main>
      <h1>Faça o Login</h1>
      <input type="text" placeholder="Usuário" v-model="user.name" />
      <input type="password" placeholder="Senha" v-model="user.password" />
      <button type="submit" @click="login()">Entrar</button>
      <!-- <router-link to="/home">
        
      </router-link> -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userLogin: 'adm',
      passLogin: 'adm',

      user: {
        name: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      if (this.user.name === 'adm' && this.user.password === 'adm') {
        console.log('is authenticated!');
      } else {
        console.log('bad!');
      }
    },
  },
};
</script>

<style scoped>
#login {
  animation: slide 2.5s;
  height: 100vh;
  background: #dafaff;
}

@keyframes slide {
  0% {
    transform: translateY(-80%);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
}

main {
  background-color: rgba(14, 14, 14, 0.808);
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 100px;
  transform: translate(-50%, -50%);
  border-radius: 2%;
  box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.356);
}

main h1 {
  margin-bottom: 25px;
}

main input {
  display: flex;
  margin-bottom: 10px;
  padding: 10px 22px;
  outline: none;
  font-size: 1rem;
}

input::placeholder {
  color: var();
}

main button {
  display: flex;
  justify-content: center;
  padding: 10px;
  border: none;
  background-color: var(--secundary-color);
  color: white;
  transition: 0.4s;
  width: 100%;
  border-radius: 3px;
  font-size: 1rem;
}

main button:hover {
  background-color: var(--main-color);
  border-radius: 20px;
}

a {
  text-decoration: none;
  color: white;
}

a:visited {
  color: white;
}
</style>
