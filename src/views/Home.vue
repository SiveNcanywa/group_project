<template>
  <div id="landing">
    <div class="content">
      <div id="app">
        <div class="title">
          <div class="title-inner">
            <div class="cafe">
              <div class="cafe-inner">Quality</div>
            </div>
            <div class="mozart">
              <div class="mozart-inner">Cars</div>
            </div>
          </div>
        </div>

        <div class="image">
          <img
            src="https://i.postimg.cc/HL2Zr48h/Qcars-removebg-preview.png"
            alt="logo"
            class="rotate"
          />
        </div>
      </div>
      <div id="wrap">
        <a @click="goToLogin" class="btn-slide2">
          <span class="circle2"><i class="fas fa-sign-in-alt"></i></span>
          <span class="title2">Sign In</span>
          <span class="title-hover2">Click here</span>
        </a>
        <a @click="goToRegister" class="btn-slide2">
          <span class="circle2"><i class="fas fa-user-plus"></i></span>
          <span class="title2">Sign Up</span>
          <span class="title-hover2">Click here</span>
        </a>
      </div>
    </div>
  </div>
         
</template>
<script>
export default {
  methods:{
   goToLogin(){
   this.$router.push('/Login'); 
      },
      goToRegister(){
   this.$router.push('/Register'); 
      }
  }
};
</script>
<style scoped>
* {
  overflow: hidden;
}
.rotate {
  animation: rotation 8s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

#wrap {
  margin: 20px auto;
  text-align: center;
  display: flex;
  position: relative;
  margin-top: 30%;
}

.btn-slide,
.btn-slide2 {
  position: relative;
  display: inline-block;
  height: 50px;
  width: 225px;
  line-height: 50px;
  padding: 0;
  border-radius: 50px;
  background: #fdfdfd;
  border: 2px solid #0099cc;
  margin: 10px;
  transition: 0.5s;
}

.btn-slide2 {
  border: 2px solid rgba(20, 40, 40, 0.8);
}

.btn-slide:hover {
  background-color: #0099cc;
}

.btn-slide2:hover {
  background-color: rgba(20, 40, 40, 0.8);
}

.btn-slide:hover span.circle,
.btn-slide2:hover span.circle2 {
  left: 100%;
  margin-left: -45px;
  background-color: #fdfdfd;
  color: #0099cc;
}

.btn-slide2:hover span.circle2 {
  color: rgba(20, 40, 40, 0.8);
}

.btn-slide:hover span.title,
.btn-slide2:hover span.title2 {
  left: 40px;
  opacity: 0;
}

.btn-slide:hover span.title-hover,
.btn-slide2:hover span.title-hover2 {
  opacity: 1;
  left: 40px;
}

.btn-slide span.circle,
.btn-slide2 span.circle2 {
  display: block;
  background-color: #0099cc;
  color: #fff;
  position: absolute;
  float: left;
  margin: 4px;
  line-height: 42px;
  height: 40px;
  width: 40px;
  top: 0;
  left: 0;
  transition: 0.5s;
  border-radius: 50%;
}

.btn-slide2 span.circle2 {
  background-color: rgba(20, 40, 40, 0.8);
}

.btn-slide span.title,
.btn-slide span.title-hover,
.btn-slide2 span.title2,
.btn-slide2 span.title-hover2 {
  position: absolute;
  left: 90px;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  color: #30abd5;
  transition: 0.5s;
}

.btn-slide2 span.title2,
.btn-slide2 span.title-hover2 {
  color: rgba(20, 40, 40, 0.8);
  left: 80px;
}

.btn-slide span.title-hover,
.btn-slide2 span.title-hover2 {
  left: 80px;
  opacity: 0;
}

.btn-slide span.title-hover,
.btn-slide2 span.title-hover2 {
  color: #fff;
}

#landing {
  background-color: #444444;
  height: 100vh;
  background-size: cover;
  width: 100%;
}
.content {
  display: flex;
  position: relative;
}

.iframely-embed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: white;
}

#app {
  z-index: 100;
}

#app {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding-bottom: 4vmin;
  height: 100%;
  width: 100%;
  background: #444444;
  color: #3a3535;
}

body {
  display: grid;
  padding: 3vmin;
  background: #e6ded7;
}

.title {
  padding-left: 1em;
  grid-column: 1/-1;
  grid-row: 1;
  font-family: "Prata", serif;
  font-size: 8vw;
  width: 100%;
  z-index: 2;
  position: relative;
  top: 69px;
  color: white;
}
.title > .title-inner {
  display: inline-block;
}

@-webkit-keyframes text-clip {
  from {
    -webkit-clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes text-clip {
  from {
    -webkit-clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
@-webkit-keyframes outer-left {
  from {
    transform: translateX(50%);
  }
  to {
    transform: none;
  }
}
@keyframes outer-left {
  from {
    transform: translateX(50%);
  }
  to {
    transform: none;
  }
}
@-webkit-keyframes inner-left {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: none;
  }
}
@keyframes inner-left {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: none;
  }
}
.cafe,
.mozart {
  -webkit-animation: outer-left 1s 1s cubic-bezier(0.5, 0, 0.1, 1) both;
  animation: outer-left 1s 1s cubic-bezier(0.5, 0, 0.1, 1) both;
}

.title-inner {
  display: inline-block;
  -webkit-animation: inner-left 1s 1s ease both;
  animation: inner-left 1s 1s ease both;
}

.cafe-inner {
  display: inline-block;
  -webkit-animation: inner-left 1s 1s ease both,
    text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
  animation: inner-left 1s 1s ease both,
    text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
}

.mozart-inner {
  -webkit-animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
}

.title {
  -webkit-animation: outer-left 1s 1s ease both;
  animation: outer-left 1s 1s ease both;
}

.cafe > .cafe-inner {
  display: inline-block;
}

.mozart {
  display: inline-block;
}

.image {
  grid-row: 1;
  grid-column: 2;
  margin-left: -2rem;

  -webkit-animation: image-in 1s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards;
  animation: image-in 1s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards;
}
@-webkit-keyframes image-in {
  from {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  to {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
@keyframes image-in {
  from {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  to {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
.image img {
  display: block;
  width: 50%;
  height: auto;
  position: relative;
  left: 115px;
}

body:active * {
  -webkit-animation: none !important;
  animation: none !important;
}
</style>
