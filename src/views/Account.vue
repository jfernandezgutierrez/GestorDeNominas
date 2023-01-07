<template>
  <div class="account">
    <BasicLayoutVue>
      <h1>Bienvenido a los ajustes</h1>
      <div class="account_section">
        <p class="title">Cambiar nombre</p>
        <div>FORM</div>
      </div>
    </BasicLayoutVue>
  </div>
</template>

<script>
import BasicLayoutVue from "@/layouts/BasicLayout.vue";
export default {
  name: "Acount",
  components: {
    BasicLayoutVue,
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
