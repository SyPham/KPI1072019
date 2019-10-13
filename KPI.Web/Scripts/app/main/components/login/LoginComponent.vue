<template>
  <div>
    <h2>Login page</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input  required v-model="username" type="text" class="form-control"  id="exampleInputEmail1" placeholder="Username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input required v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>


      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
  import { AUTH_REQUEST } from '../../store/actions/auth.js'
  export default {
    name: 'login',
    data () {
      return {
        username: 'henry',
        password: '1',
      }
    },
    methods: {
      login: function () {
        const { username, password } = this
        this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style scoped>
</style>
