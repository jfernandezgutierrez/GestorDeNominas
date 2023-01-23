<template>
  <BasicLayoutVue>
    <div class="payrolls">
      <h1>Mis nominas</h1>
      <UploadPayroll />
    </div>
  </BasicLayoutVue>
</template>

<script>
import BasicLayoutVue from "@/layouts/BasicLayout.vue";
import UploadPayroll from "@/components/Payrrolls/UploadPayroll.vue";
export default {
  name: "Payrolls",
  components: {
    BasicLayoutVue,
    UploadPayroll,
  },
};
</script>

<style lang="scss" scoped>
.payrolls {
  margin: 50px 0p;
  text-align: center;
}
</style>
