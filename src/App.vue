<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <button title="Click to go to the home page" style="background:yellow; color:black; font-size:20px"
    @click="redirect">Redirect</button>
  <button title="Click to go back" style="background:indigo; color:white; font-size:20px"
    @click="backward">Backward</button>
  <button title="Click to go forward" style="background:green; color:white; font-size:20px"
    @click="forward">Forward</button>


  <router-view />
  <!-- This holds the different pages we're navigating to. -->
</template>



<!-- This script tag did not exist before. I created them coz I need to put some functions there. -->
<script>
export default {
  methods: {
    redirect() {
      // Redirects users to the home page from wherever they are.
      this.$router.push({ name: 'home' })
    },

    // To take Users back to where they were before.
    backward() {
      this.$router.go(-1)
      // The argument has "1", it means go back one step at a time.
    },

    // To take Users forward to where they were before.
    forward() {
      this.$router.go(1)
      // The argument has "1", it means go forward one step at a time.
    }

  }

  // this.$route is used to get info about the current route in the web address.
  // this.$router is used for moving them (Users) around.
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 30px 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
