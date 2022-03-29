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
  <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add new product+</button>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button v-on:click="createProduct()" type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>

    <div class="row row-cols-1 row-cols-sm-6">
      <div  v-for="product in products" :key="product.id" class="card">
        <img :src="product.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{{product.title }}</h4>
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
          <button   v-on:click="deleteProduct(product_id)" class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productDataService from "../services/ProductsDataService";
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
    // this.getProduct(this.$route.params.id);
  },
  methods: {
   deleteProduct(id){
fetch("http://qcars-backend-finale.herokuapp.com/products/", + id, {
  method:"DELETE",
})
.then((res) => res.json())
.then((data) => {
  console.log(data);
  alert("Product removed");
} )
.catch((error) => {
  console.error("Error:", error);
});
   },
   
   updateProduct(id){
      console.log(id);
      fetch("http://qcars-backend-finale.herokuapp.com/products/" + id, {
        method: "PATCH",
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          img: this.img,
          price:this.price,
          category:this.category,
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Product updated successfully");
          //   localStorage.getItem("jwt", data.jwt);
          //   this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        })
    },
   },
   addToCart(){

   },
   createProduct(){
  console.log(this.title, this.category, this.img,this.description,this.price);
      fetch("http://qcars-backend-finale.herokuapp.com/products/", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          category: this.category,
          img: this.img,
          price:this.price,
          description:this.description
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
   }

  }



</script>

<style scoped>
.products {
  width: 100%;
  background-color: #444444;
}
.create {
  margin-left: 7%;
  margin-bottom: 0%;
}
</style>
