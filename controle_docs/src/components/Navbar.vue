<template>
  <div>
    <nav>
      <ul class="ul-style">
        <li class="list-style">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="list-style">
          <router-link to="/agendamentos">Agendamentos</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 10vh;
  margin-bottom: 6vh;
  background: var(--main-color);
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.404);
}

ul {
  display: flex;
}

li {
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-right: 30px;
  letter-spacing: 2.5px;
}

li a {
  /*estilizando router-link*/
  color: var(--letter-color);
  text-decoration: none;
  transition: 0.3s;
}

li a:hover {
  color: var(--secundary-letter-color);
  border-bottom: 1px solid white;
}
</style>
