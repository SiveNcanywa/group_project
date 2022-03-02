<template>
<div class="products">
    <div class="container d-flex justify-content-end mb3 mt-5 pt-4">
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by Cartegoty</label>
        <select
          class="form-select"
          name=""
          id="sortCatergory"
          onchange="sortCatergory()"
        >
          <option value="All">All</option>
          <option value="SUV">SUV</option>
          <option value="Sport's Car">Sport's Car</option>
          <option value="Off-Road">Off-Road</option>
        
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by Name</label>
        <select class="form-select" name="" id="sortName" onchange="sortName()">
          <option value="ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by Price</label>
        <select
          class="form-select"
          name=""
          id="sortPrice"
          onchange="sortPrice()"
        >
          <option value="ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
    </div>
    <div class="col-6 col-sm-4" >
        <div class="card" >
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <div class="d-flex mb-3">
              <input type="number" class="form-control" value=1 min=1 >
              <button type="button" class="btn btn-secondary ms-3" ><i class="fas fa-cart-plus"></i>Add</button>
              </div>
              <button class="btn btn-primary"  ><i class="fas fa-pencil-alt"></i>Update</button>
              <button   class="btn btn-danger"><i class="fas fa-trash-alt"></i>Delete</button>
              
            </div>
          </div>
    </div>
</div>
   
</template>

<script>
export default {
  data(){
    return{
      products:[]
    };
  },
  mounted() {
    fetch("http://qcars-backend-finale.herokuapp.com/products")
    .then((res)=>res.json())
    .then((data)=>{
      this.products=data;
      console.log(data,this.products)

    });

  },

};
</script>

<style scoped>
.products{
width: 100%;
height: 100vh;
background-color:#444444;
}

</style>