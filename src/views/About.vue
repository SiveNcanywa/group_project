<template>
  <div class="about">
    
    <div class="content">
    <div class="content-left">
     <img src="https://i.postimg.cc/t42Y60Hq/store.jpg" alt="the-store">
     </div>
     
     <div class="content-right">
           <div class="section-heading">
      <h1>About</h1>
      <span>About US</span>
    </div>
<p>Q-Cars(Quality Cars) is a company founded in 2020 September by Miss Ncanywa in partnership with Mr Allies.Q-Cars is a company dedicated in bringing high quality cars  and the best services you can ever get.</p> 
 <p>  Our mission is to create the most compeling car dealership of the 21st century,by bringing the latest car of your dreams at affordable prices.</p>
     </div>
     </div>


  
<div class="container text centre">
    <div class="row">
     <div class="col-md-3">
         <div class="counter_item">
         <i class="fas fa-grin-hearts"></i>
         <p><span class="counter">35000</span>+</p>
         <h4>Happy Clients</h4>
         </div>
         </div>   
          <div class="col-md-3">
         <div class="counter_item">
         <i class="fas fa-car"></i>
         <p><span class="counter">40000</span>+</p>
         <h4>Cars Sold</h4>
         </div>
         </div>  
          <div class="col-md-3">
         <div class="counter_item">
        <i class="fas fa-award"></i>
         <p><span class="counter">5</span>+</p>
         <h4>Awards won</h4>
         </div>
         </div>  
          <div class="col-md-3">
         <div class="counter_item">
         <i class="fas fa-car"></i>
         <p><span class="counter">5000</span>+</p>
         <h4>Available Cars</h4>
         </div>
         </div>  
    </div>
</div>
 
</div>
  
</template>

<script>

export default {

}
</script>

<style scoped>
.container{
    justify-content: center;
    position: relative;
    align-content: center;
}
.counter_item{
padding: 20px;
margin-top: 20px;
/* background: white; */
box-shadow: inset 1px 2px 8px ;
border-radius: 10px;
cursor: pointer;
}
.counter_item:hover{
    box-shadow: 1px 2px 8px ;
}
.counter_item i{
    font-size: 45px;
}
.counter_item p{
    font-size: 25px;
    padding: 12px 0px;
    font-weight: 600;
    letter-spacing: 1px;
}
.counter_item h4{
    color: white;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
}
.content{
    display: flex;
    position: relative;
}
.mission{
      display: flex;
    justify-content: center;
}
.about{
    background-color: black;
    width: 100%;
    height: 100vh;
}
.store img{
    width:35%;
    margin-top: 50px;
    margin-left: 50px;
}
.content-left{
width: 25%;
}
.content-left img{
    width: 150%;
    margin: 20px;
}
.content-right{
    margin-left: 25%;
    margin-top: 4%;
    color: white;
    width: 500px;
}

.section-heading {
top: 35px;
  position: relative;
  text-align: center;
  margin-left: 30%;
  
}

.section-heading h1 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 60px;
  font-weight: 200;
  letter-spacing: 4px;
  position: relative;
  top: -54px;
  text-shadow: 0 8px rgb(0 0 0 / 5%);
  text-transform: uppercase;
  color: rgba(20, 40, 40, .8);
}
.section-heading span {
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 40px;
  font-weight: 700;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
  opacity: 0.6;
  top: -71px;
}
.text{
    color: white;
    font-size: medium;
    margin: 60px;
}

.row{
    margin: 150px;
   
    position: relative;
    left: -151px;
}

@media (max-width: 947px){
  .about .content {
        width: 100%;
        display: column;
    }
    .about .content-left {
        
        justify-content: center;
        margin: 0 auto 60px;
    }
    .about .content-right {
        flex: 100%;
        padding-top: 3px;
    }
}





body {
  background-color: black;
  color: #fff;
  font-family: "Roboto Mono", sans-serif;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}




</style>