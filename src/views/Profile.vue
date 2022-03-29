<template>
<div class="profile">
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"><span class="font-weight-bold">{{fullname}}</span><span class="text-black-50">{{email}}</span><span class="text-black-50">{{phone_number}}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Full Name</label><input type="text" class="form-control" placeholder="Full Name" ></div>
                    <div class="col-md-6"><label class="labels">Phone number</label><input type="text" class="form-control" value="" placeholder="number"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter email adress" value=""></div>
                </div>
                
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Password</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Password</span></div><br>
                <div class="col-md-12"><label class="labels">New Password</label><input type="text" class="form-control" placeholder="password" value=""></div> <br>
                <div class="col-md-12"><label class="labels">Enter your new password again</label><input type="text" class="form-control" placeholder="password" value=""></div>
            </div>
        </div>
    </div>
</div>
</div>

</template>
<script>
export default {
    components: {},
  name: 'Profile',
  computed: {
    currentUsers() {
      return this.$store.state.auth.users;
    }
  },
//   mounted() {
//     if (!this.currentUsers) {
//       this.$router.push('/login');
//     }
//   }
};
</script>
<style scoped>
.profile{
  width: 100%;
  height: 100vh;
  background-color: #444444;
  
}
.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgba(20, 40, 40, 0.8);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: rgba(20, 40, 40, 0.8);
}

.profile-button:focus {
    background: rgba(20, 40, 40, 0.8);
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}
</style>