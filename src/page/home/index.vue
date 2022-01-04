<template>
  <div class="container">

  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive, toRefs } from "vue"
import { HOME } from "@/interfaceConfig/index";

export default {
  name:"App",
  setup() {
    const data = reactive<HOME>({
      num: 1,
      title: '我的vue3-ts项目',
    })

    onMounted(() => {
      console.log('onMounted')
    })

    let getNum = computed(()=> {
      return 
    })



    return {
      ...toRefs(data),
      getNum,
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
