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
import { db } from '@/lib/firebase'
import { getUsers, getData } from '@/lib/dao/todo'
import { pipe } from 'fp-ts/function'

export default defineComponent({
  components: { Sample },
  setup() {
    const { message } = reactive<{ message: string }>({ message: 'aaa' })
    ;(async function () {
      const res = await pipe(db, getUsers(), getData('aaa'))
    })()
  },
})
</script>
