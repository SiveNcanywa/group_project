<template>
  <div class="create">
      <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
        +Create new product
      </button>
      <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div  v-if="!submitted" class="modal-content" >
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
                    id="title"
                    v-model="product.title"
                    
                   
                  />
                  <label class="labels">Description</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder=""
                    id="description"
                    v-model="product.description"
                   

                   
                  />
                  <label class="labels">Price</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder=""
                    id="price"
                    v-model="product.price"
                   

                   
                  />
                  <label class="labels">Image URL</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="product.img"
                    id="img"
                  
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
                    @click="CreateProduct"
                    type="button"
                    class="btn btn-primary"
                  >
                    Add new products
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";
export default {
      name: "add-product",
  data() {
    return {
      product: {
        id: null,
        title: "",
        description: "",
        price: "",
        img:"",
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.product.title,
        description: this.product.description,
        price:this.product.price,
        img:this.product.img,
      };
      ProductDataService.create(data)
        .then(response => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newProduct() {
      this.submitted = false;
      this.product = {};
    }
  }
};


</script>

<style>

</style>