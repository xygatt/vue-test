<template>
  <div id="app">    
    <input v-model="firstname" />
    <input v-model="lastname"/>

    <h2>full name</h2>
    <span>{{ fullname }}</span>
  </div>  
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      firstname: '',
      lastname: '',
    }
  },
  computed: {
    fullname () {
      return `${this.firstname} ${this.lastname}`
    }
  }
}
</script>