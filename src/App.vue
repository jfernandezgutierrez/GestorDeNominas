<template>
  <template v-if="user">
    <router-view />
  </template>
  <div v-if="!user && user !== undefined">
    <p>Login/Registro</p>
  </div>
</template>
<script>
import { auth } from "./utils/firebase";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    // const user = store.state.user;
    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        store.commit("setUser", user);
        console.log(user);
      });
    });
    return {
      user,
    };
  },
};
</script>
