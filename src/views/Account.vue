<template>
  <div class="account">
    <BasicLayoutVue>
      <h1>Bienvenido a los ajustes</h1>
      <div class="account_section">
        <p class="title">
          Cambiar nombres<span v-if="user.displayName"
            >({{ user.displayName }})</span
          >
        </p>
        <ChangeName />
      </div>

      <div class="account_section">
        <p class="title">
          Cambiar email<span v-if="user.email">({{ user.email }})</span>
        </p>
        <ChangeEmail />
      </div>
      <div class="account_section">
        <p class="title">Cambiar contraseña</p>
        <ChangePassword />
      </div>
    </BasicLayoutVue>
  </div>
</template>

<script>
import BasicLayoutVue from "@/layouts/BasicLayout.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import ChangeName from "../components/Account/ChangeName.vue";
import ChangeEmail from "@/components/Account/ChangeEmail.vue";
import ChangePassword from "../components/Account/ChangePassword.vue";
export default {
  name: "Acount",
  components: {
    BasicLayoutVue,
    ChangeName,
    ChangeEmail,
    ChangePassword,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    return {
      user,
    };
  },
};
</script>

<style lang="scss" scoped>
.account {
  h1 {
    margin: 50px;
    text-align: center;
  }
  &_section {
    position: relative;
    padding: 10px;
    border: 1px solid#16212b;
    padding-top: 25px;
    margin-top: 40px;
    .title {
      position: absolute;
      top: -12px;
      background-color: #16212b;
      color: #fff;
      padding: 2px 10px;
    }
  }
}
</style>
