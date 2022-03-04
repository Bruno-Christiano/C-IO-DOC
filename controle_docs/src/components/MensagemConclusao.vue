<template>
  <div id="message-container" :style="{background: bg_color, color: color}">
    <p>
      {{ mensagemConclusao }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MensagemConclusao',
  props:{
    mensagemConclusao: String,
    bg_color: String,
    color: String
  }
}
</script>

<style scoped>
#message-container {
  border-radius: 5px;
  margin: auto;
  max-width: 300px;
  padding: 15px;
  margin-bottom: 2.5vh;
  animation: fadeOut 5s;
}

@keyframes fadeOut {
  0% {
    opacity: 0;
    margin-bottom: 2.5vh;
  }
  25% {
    opacity: 1;
    margin-bottom: 2.5vh;
  }
  50% {
    opacity: 1;
    margin-bottom: 2.5vh;
  }
  75% {
    opacity: 0;
    margin-bottom: 2.5vh;
  }
  100% {
    opacity: 0;
    margin-bottom: -7vh;
  }
}

p {
  text-align: center;
  margin: auto;
  font-weight: bold;
  font-size: 16px;
}
</style>
