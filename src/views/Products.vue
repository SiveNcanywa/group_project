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
  

    <div class="row row-cols-1 row-cols-sm-6">
      <div iv v-for="product in products" :key="product.id" class="card">
        <img :src="product.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{{ product.title }}</h4>
          <h5 class="card-title">R{{ product.price }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <div class="d-flex mb-3">
            <input type="number" class="form-control" value="1" min="1" />
            <button
              @click="addToCart()"
              type="button"
              class="btn btn-secondary ms-3"
            >
              <i class="fas fa-cart-plus"></i>Add
            </button>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="fas fa-pencil-alt"></i>Update
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <label class="labels">Title</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder=""
                   
                   
                  />
                  <label class="labels">Description</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder=""
                    

                   
                  />
                  <label class="labels">Price</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder=""
                 

                   
                  />
                  <label class="labels">Image URL</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder=""
                   
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    @click="updateProduct"
                    type="button"
                    class="btn btn-primary"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button   @click="deleteProduct" class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";
export default {
  name:"product",
  data() {
    return {
      products: [],
      message:'',
      
    };
  },
  mounted() {
    fetch("http://qcars-backend-finale.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(data, this.products);
      });
       this.message = "";
    this.getProduct(this.$route.params.id);
  },
  methods: {
     deleteProduct() {
      ProductDataService.delete(this.currentProduct.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "products" });
        })
        .catch(e => {
          console.log(e);
        });
    },
     updateProduct() {
      ProductsDataService.update(this.product.id, this.product)
        .then(response => {
          console.log(response.data);
          this.message = 'The product was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
}


</script>

<style scoped>
.products {
  width: 100%;
  height: 100vh;
  background-color: #444444;
}
.create {
  margin-left: 7%;
  margin-bottom: 0%;
}
</style>
