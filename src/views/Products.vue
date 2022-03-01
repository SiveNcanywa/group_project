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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.products{
width: 100%;
height: 100vh;
background-color:#444444;
}
.form-label{
    color: white;
}
</style>