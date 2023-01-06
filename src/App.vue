<template>
  <router-view />
</template>
<script>
import { auth } from "./utils/firebase";
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = userStore();
    const user = store.state.user;
    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
      });
    });
    return {
      user,
    };
  },
};
</script>
