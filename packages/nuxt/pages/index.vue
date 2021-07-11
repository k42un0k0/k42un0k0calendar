<template>
  <div>
    <Sample />
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import Sample from '@/components/unko/Sample.vue'

export default defineComponent({
  components: { Sample },
  setup() {
    const { message } = reactive<{ message: string }>({ message: 'aaa' })

    return { message }
  },
})
</script>
