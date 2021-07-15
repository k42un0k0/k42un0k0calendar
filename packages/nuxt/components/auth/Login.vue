<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import { auth } from '~/plugins/firebase'
export default {
  mounted() {
    const firebaseui = require('firebaseui')
    const firebase = require('firebase')
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        firebase.default.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    }

    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start('#firebaseui-auth-container', uiConfig)
  },
}
</script>
