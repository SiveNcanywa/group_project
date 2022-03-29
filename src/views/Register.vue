<template>
<div class="register">
<div class="signupSection">
  <div class="info">
    <h2>Q-Cars</h2>
    <i class="fas fa-steering-wheel"></i>
    <p>Bringing You Quality Is Our Priority</p>
  </div>
  <form @submit.prevent="register"  class="signupForm" >
    <h2>Sign Up</h2>
    <ul class="noBullet">
      <li>
        <label for="fullname"></label>
        <input type="text" class="inputFields" id="fullname" name="fullname"  v-model="fullname" placeholder="fullname"  oninput="return fullNameValidation(this.value)" required/>
      </li>
      <li>
        <label for="password"></label>
        <input type="password" class="inputFields" id="password" name="password" v-model="password" placeholder="Password"  oninput="return passwordValidation(this.value)" required/>
      </li>
      <li>
        <label for="email"></label>
        <input type="email" class="inputFields" id="email" name="email" v-model="email" placeholder="Email"  required/>
      </li>
       <li>
        <label for="phone_number"></label>
        <input type="number" class="inputFields" id="phone_number" name="phone_number" v-model="phone_number" placeholder="phone_number"  required/>
      </li>
      <li id="center-btn">
        <input type="submit" id="join-btn" name="register" alt="Join" value="Register">
      </li>
    </ul>
  </form>
</div>
</div>
</template>
<script>
export default {
  data() {
    return{
      fullname:"",
      email:"",
      phone_number:"",
      password:"",
    };
  },
  methods:{
    register(){
      console.log(this.password);
      fetch("http://qcars-backend-finale.herokuapp.com/users/signup",{
        method:"POST",
        body:JSON.stringify({
          fullname:this.fullname,
          email:this.email,
        phone_number:this.phone_number,
        password:this.password,
        }),
        headers:{
          "Content-type":"application/json;charset=UTF-8",
        },
      })
      .then((response)=>response.json())
      .then((json)=>{
        console.log(json);
        alert("User registered");
        localStorage.setItem("jwt",json.jwt);
        this.$router.push({name:"Products"});
      })
      .catch((err)=>{
        alert(err);
      });
    },
  },
};

</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);
 * {
	 font-family: 'Open Sans', sans-serif;
}
 body {
	 margin: 0;
	 padding: 0;
	 overflow: hidden;
	 background-color:#444444;
	 
}
.register{
  background-color:#444444;
  height: 100vh;
  width: 100%;
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
	 box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
}
 .info {
	 width: 45%;
	 background: rgba(20, 20, 20, .8);
	 padding: 30px 0;
	 border-right: 5px solid rgba(30, 30, 30, .8);
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
	 color: rgba(10, 180, 180, 1);
}
 .signupForm {
	 width: 70%;
	 padding: 30px 0;
	 background: rgba(20, 40, 40, .8);
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
	 border: 1px solid rgba(10, 180, 180, 1);
	 border-top: none;
	 border-left: none;
	 border-right: none;
	 background: rgba(20, 20, 20, .2);
	 color: white;
	 outline: none;
}
 .noBullet {
	 list-style-type: none;
	 padding: 0;
}
 #join-btn {
	 border: 1px solid rgba(10, 180, 180, 1);
	 background: rgba(20, 20, 20, .6);
	 font-size: 18px;
	 color: white;
	 margin-top: 20px;
	 padding: 10px 50px;
	 cursor: pointer;
	 transition: 0.4s;
}
 #join-btn:hover {
	 background: rgba(20, 20, 20, .8);
	 padding: 10px 80px;
}

</style>