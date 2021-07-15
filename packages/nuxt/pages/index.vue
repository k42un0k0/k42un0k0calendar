<template>
  <div>
    <Sample />
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <button @click="submit()">プロジェクト作成</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Sample from '@/components/unko/Sample.vue'
import { auth } from '~/plugins/firebase'
import { useVueInstance } from '~/components/vue/useVueInstance'
import { function as fun, option } from 'fp-ts'
export default defineComponent({
  components: { Sample },
  setup() {
    const message = ref('')
    ;(async function () {})()
    const instance = useVueInstance()
    function submit() {
      fun.pipe(
        auth.currentUser,
        option.fromNullable,
        option.chain((user) => option.fromNullable(user.uid)),
        option.map((uid) =>
          instance?.$repository.project.create(uid, {
            name: message.value,
          })
        )
      )
    }
    return { message, submit }
  },
})
</script>
