<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Q-Cars <i class="fas fa-steering-wheel"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/Home" class=" nav-item nav-link active" >Home</router-link>
          <router-link to="/About" class="nav-item nav-link" >About</router-link>
          <router-link to="/Contact" class="nav-link" >Contact</router-link>
          <router-link to="/Products" class="nav-link" >Products</router-link>
          <router-link to="/Login" class="nav-link" >Login</router-link>
          <router-link to="/Register" class="nav-link" >Sign Up</router-link>
          <router-link to="/Cart" class="nav-link" >Cart</router-link>
           <router-link to="/Profile" class="nav-link" >Profile</router-link>
   
        
      </div>
    </div>
  </div>
</nav>
<router-view/>
</template>
<script>


export default {
  name: "App",

  components: {
    
    
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }
      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}
</style>