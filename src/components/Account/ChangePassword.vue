<template>
  <form class="ui form change-paswword" @submit.prevent="onChangePassword">
    <div class="two fields">
      <div class="field">
        <input
          type="password"
          placeholder="Contraseña actual"
          v-model="formData.password"
          :class="{ error: formError.password }"
        />
      </div>

      <div class="field">
        <input
          type="password"
          placeholder="Nueva contraseña"
          v-model="formData.passwordNew"
          :class="{ error: formError.passwordNew }"
        />
      </div>
      <div class="field">
        <input
          type="password"
          placeholder="Repetir contraseña"
          v-model="formData.passwordNew2"
          :class="{ error: formError.passwordNew2 }"
        />
      </div>
    </div>
    <p v-if="messageError">{{ messageError }}</p>
    <button type="submit" class="ui button primary" :class="{ loading }">
      Actualizar
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";
import { reauthenticate } from "../../utils/firebaseFunctions";
import { auth } from "../../utils/firebase";
export default {
  title: "ChangePassword",
  setup() {
    let formData = {};
    let formError = ref({});
    let messageError = ref("");
    let loading = ref(false);
    const schemeForm = Yup.object().shape({
      password: Yup.string().required(true),
      passwordNew: Yup.string().required(true),
      passwordNew2: Yup.string()
        .required(true)
        .oneOf([Yup.ref("passwordNew")], true),
    });
    const onChangePassword = async () => {
      debugger;
      formError.value = {};
      messageError.value = "";
      loading.value = true;
      try {
        await schemeForm.validate(formData, { abortEarly: false });
        try {
          debugger;
          const { password, passwordNew } = formData;
          await reauthenticate(password);
          await auth.currentUser.updatePassword(passwordNew);
          auth.signOut();
        } catch (error) {
          console.log(error);
          messageError.value = error.message;
        }
      } catch (err) {
        err.inner.forEach((error) => {
          formError.value[error.path] = error.message;
        });
      }
      loading.value = false;
    };
    return {
      formData,
      formError,
      messageError,
      onChangePassword,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.form.change-paswword {
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
