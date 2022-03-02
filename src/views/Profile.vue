<template>
<div class="profile">
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Username</label><input type="text" class="form-control" placeholder="username" value=""></div>
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
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  // mounted() {
  //   if (!this.currentUser) {
  //     this.$router.push('/login');
  //   }
  // }
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