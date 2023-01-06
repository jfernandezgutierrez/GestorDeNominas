<template>
  <div class="home">
    <h1 class="">Estamos en la home</h1>
    <button @click="logout" class="ui button">Cerrar sesión</button>
  </div>
</template>

<script>
import { auth } from "../utils/firebase";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const logout = () => {
      auth.signOut();
    };
    return {
      logout,
    };
  },
};
</script>
