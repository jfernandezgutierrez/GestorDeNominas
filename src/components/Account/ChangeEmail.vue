<template>
  <form class="ui form change-email" @submit.prevent="onChangeEmail">
    <div class="two fields">
      <div class="field">
        <input
          type="text"
          placeholder="Nuevo email"
          v-model="email"
          :class="{ error: formError }"
        />
      </div>
      <div class="field">
        <input
          type="password"
          placeholder="Contraseña actual"
          v-model="password"
          :class="{ error: formError }"
        />
      </div>
    </div>
    <button type="submit" class="ui button primary" :class="{ loading }">
      Actualizar
    </button>
  </form>
</template>

<script>
export default {
  name: "ChangeEmail",
};
</script>

<style lang="scss" scoped>
.ui.form.change-email {
  text-align: center;
  input.error {
    border-color: #faa;
    background-color: #ffeded;
  }
  .ui.button {
    margin: 20px 0 0 0;
  }
}
</style>
