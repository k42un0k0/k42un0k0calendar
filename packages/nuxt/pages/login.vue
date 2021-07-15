<template>
  <div><Login /></div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Login from '@/components/auth/Login.vue'
export default defineComponent({
  components: { Login },
})
</script>
