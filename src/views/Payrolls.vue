<template>
  <BasicLayoutVue>
    <div class="payrolls">
      <h1>Mis nominas</h1>
      <UploadPayroll :getPayrolls="getPayrolls" />
      <PayrollList :payrolls="payrolls" :getPayrolls="getPayrolls" />
    </div>
  </BasicLayoutVue>
</template>

<script>
import BasicLayoutVue from "@/layouts/BasicLayout.vue";
import { auth, db } from "../utils/firebase";
import UploadPayroll from "@/components/Payrrolls/UploadPayroll.vue";
import PayrollList from "../components/Payrrolls/PayrollList.vue";
import { ref, onMounted } from "vue";
export default {
  name: "Payrolls",
  components: {
    BasicLayoutVue,
    UploadPayroll,
    PayrollList,
  },
  setup() {
    let payrolls = ref(null);
    onMounted(() => {
      getPayrolls();
    });
    const getPayrolls = async () => {
      const response = await db
        .collection(auth.currentUser.uid)
        .orderBy("date", "desc")
        .get();
      const result = [];
      response.docs.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        result.push(data);
      });
      payrolls.value = result;
    };
    return { payrolls, getPayrolls };
  },
};
</script>

<style lang="scss" scoped>
.payrolls {
  margin: 50px 0p;
  text-align: center;
}
</style>
