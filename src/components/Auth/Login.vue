<template>
  <div class="login">
    <h1>Login</h1>
    <button @click="changeForm">Crear nueva cuenta</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    changeForm: Function,
  },
};
</script>

<style></style>
