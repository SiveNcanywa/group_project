<template>
<div class="login">
<div class="signupSection">
  <div class="info">
    <h2>Q-Cars</h2>
    <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
    <p>Bringing You Quality Is Our Priority</p>
  </div>
  <form action="#" method="POST" class="signupForm" name="signupform">
    <h2>Sign In</h2>
    <ul class="noBullet">
      <li>
        <label for="username"></label>
        <input type="text" class="inputFields" id="username" name="username" placeholder="Username" value="" oninput="return userNameValidation(this.value)" required/>
      </li>
      <li>
        <label for="password"></label>
        <input type="password" class="inputFields" id="password" name="password" placeholder="Password" value="" oninput="return passwordValidation(this.value)" required/>
      </li>
     
      <li id="center-btn">
        <input type="submit" id="join-btn" name="Login" alt="Login" value="Login">
      </li>
    </ul>
  </form>
</div>
</div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
        created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);
* {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #111;
  background-repeat: no-repeat;
}
.login{
  background-color: #444444;
  width:100%;
  height:100vh;
}

.signupSection {
  background: url(https://source.unsplash.com/TV2gg2kZD1o/1600x800);
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 450px;
  text-align: center;
  display: flex;
  color: white;
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, 0.5);
}

.info {
  width: 45%;
  background: rgba(20, 20, 20, 0.8);
  padding: 30px 0;
  border-right: 5px solid rgba(30, 30, 30, 0.8);
}
.info h2 {
  padding-top: 30px;
  font-weight: 300;
}
.info p {
  font-size: 18px;
}
.info .icon {
  font-size: 8em;
  padding: 20px 0;
  color: #0ab4b4;
}

.signupForm {
  width: 70%;
  padding: 30px 0;
  background: rgba(20, 40, 40, 0.8);
  transition: 0.2s;
}
.signupForm h2 {
  font-weight: 300;
}

.inputFields {
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px;
  border: 1px solid #0ab4b4;
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, 0.2);
  color: white;
  outline: none;
}

.noBullet {
  list-style-type: none;
  padding: 0;
}

#join-btn {
  border: 1px solid #0ab4b4;
  background: rgba(20, 20, 20, 0.6);
  font-size: 18px;
  color: white;
  margin-top: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: 0.4s;
}
#join-btn:hover {
  background: rgba(20, 20, 20, 0.8);
  padding: 10px 80px;
}

</style>
 