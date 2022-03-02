<template>
<div class="cart">
      <div class="card mb-3" >
    <button type="button" class="position-absolute top-0 start-100 translate-middle badge btn btn-danger" >X</button>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <div class="d-flex mb-3 justify-content-between">
        <p class="card-text">Individual price:</p>
        <span></span>
        </div>
        <div class="d-flex mb-3 justify-content-between">
        <label class="form-label">Quantity:</label>
        <input type="number" min=1/>
        </div>
        
    </div>
  </div>
</div>
<div class="cart-footer bg-white d-flex justify-content-between p-0 pt-3">
<p>Total cost:</p>
<span>R</span>
</div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style> 
.cart{
    background-color: #444444;
    width: 100%;
    height: 100vh;
}
</style>