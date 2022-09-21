<template>
<div class="container-fluid row">
    <div class="col-md-5 sidenav">
        <div class="login-main-text">
            <h2>Application<br> Register Page</h2>
            <p>Register employees here</p>
        </div>
        <div class="salary-details container col-md-8">
            <form>
                    <div class="form-group p-2">
                        <label>Employee Roll</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">Admin</option>
                            <option value="2">Employee</option>
                        </select>
                    </div>
                    <div class="form-group p-2">
                        <label>Position</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">Mechanic</option>
                            <option value="2">Operator</option>
                            <option value="3">Helper</option>
                            <option value="4">Manager</option>
                            <option value="5">Supervisor</option>
                        </select>
                    </div>
                    <div class="form-group p-2">
                        <label>Basic Salary</label>
                        <input type="text" class="form-control" placeholder="LKR">
                    </div>
                    <div class="form-group p-2">
                        <label>Special Allowance</label>
                        <input type="text" class="form-control" placeholder="LKR">
                    </div>
               </form>
         </div>
        
    </div>
    <div class="col-md-6"></div>
    <div class="col-md-6 personal-details pt-4">
        <div class="login-form">
                <h3 class="pb-2">Personal Details</h3>
               <form>
                  <div class="form-group">
                     <label>Full Name</label>
                     <input type="text" class="form-control" placeholder="full name">
                  </div>
                  <div class="form-group">
                     <label>Email</label>
                     <input type="password" class="form-control" placeholder="email">
                  </div>
                  <div class="form-group">
                     <label>Identity Number</label>
                     <input type="text" class="form-control" placeholder="id number">
                  </div>
                  <div class="form-group">
                     <label>Address</label>
                     <input type="password" class="form-control" placeholder="address">
                  </div>
                  <div class="form-group">
                     <label>Mobile Number</label>
                     <input type="text" class="form-control" placeholder="Mobile number">
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="form-group">
                     <label>Confirm Password</label>
                     <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="row justify-content-end mt-5">
                     <button type="submit" class="col-4 btn btn-black">Submit</button>
                  </div>
               </form>
            </div>
    </div>


</div>
    <!-- <div class="sidenav col-4">
        <div class="login-main-text">
            <h2>Application<br> Register Page</h2>
            <p>Register employees here</p>
        </div>
        <div class="salary-details container col-md-8">
            <form>
                    <div class="form-group p-2">
                        <label>Employee Roll</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">Admin</option>
                            <option value="2">Employee</option>
                        </select>
                    </div>
                    <div class="form-group p-2">
                        <label>Position</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">Mechanic</option>
                            <option value="2">Operator</option>
                            <option value="3">Helper</option>
                            <option value="4">Manager</option>
                            <option value="5">Supervisor</option>
                        </select>
                    </div>
                    <div class="form-group p-2">
                        <label>Basic Salary</label>
                        <input type="text" class="form-control" placeholder="LKR">
                    </div>
                    <div class="form-group p-2">
                        <label>Special Allowance</label>
                        <input type="text" class="form-control" placeholder="LKR">
                    </div>
               </form>
         </div>
        </div>
    </div>  
      <div class="main col-row justify-content-center">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
                <h3 class="pb-2">Personal Details</h3>
               <form>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name">
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name">
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name">
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  <button type="submit" class="btn btn-secondary">Register</button>
               </form>
            </div>
        </div>
   
    </div> -->
</template>

<script>
// import NavBar from "@/components/NavbarView.vue"
// // export default {
// //     name:"SigninView",
// //     components:{
// //         NavBar
// //     }
// // }

</script>

<style>
body {
    font-family: "Lato", sans-serif;
}



.sidenav {
    height: 100vh;
    background-color: #000;
    overflow-x: hidden;
    top: 0;
    position: fixed;
    left: 0;
}
.personal-details{
    height: 100vh;
    margin: auto;
}
.personal-details form{
    text-align: left;
   
}
.personal-details form .form-group{
    padding: 5px;
}
.salary-details form{
    color: #FFF;
    text-align: left;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}



.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>