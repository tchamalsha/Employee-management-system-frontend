<template>
    <NavBar/>
  <div class="container-fluid">
    <form>
    <div class="row m-5 d-flex align-items-center">
        <div class="col-md-5 justify-content-center salary-details ">
            <div class="login-main-text">
                <h2>Application<br> Register Page</h2>
                <p>Register employees here</p>
            </div>
            <div class="container col-md-8">
               
                <div class="form-group p-2 ">
                    <label class="d-flex justify-content-start">Employee Roll</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Admin</option>
                        <option value="2">Employee</option>
                    </select>
                </div>
                <div class="form-group p-2">
                    <label class="d-flex justify-content-start" >Position</label>
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
                    <label class="d-flex justify-content-start">Basic Salary</label>
                    <input type="text" class="form-control" placeholder="LKR">
                </div>
                <div class="form-group p-2">
                    <label class="d-flex justify-content-start">Special Allowance</label>
                    <input type="text" class="form-control" placeholder="LKR">
                </div>
                
            </div>

        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5 justify-content-center personal-details  ">
            <div class="login-form">
                    <h3 class="pb-1">Personal Details</h3>
               
                    <div class="form-group m-3">
                        <label class="d-flex justify-content-start">Full Name</label>
                        <input type="text" class="form-control" placeholder="full name">
                    </div>
                    <div class="form-group m-3">
                        <label class="d-flex justify-content-start">Email</label>
                        <input type="password" class="form-control" placeholder="email">
                    </div>
                    <div class="form-group m-3 d-flex">
                        <div class="col-6 m-1">
                            <label class="d-flex justify-content-start">Identity Number</label>
                        <input type="text" class="form-control" placeholder="id number">
                        </div>
                        <div class="col-6 m-1">
                            <label class="d-flex justify-content-start">Mobile Number</label>
                            <input type="text" class="form-control" placeholder="Mobile number">
                        </div>
                    </div>
                    <div class="form-group m-3">
                        <label class="d-flex justify-content-start">Address</label>
                        <input type="password" class="form-control" placeholder="address">
                    </div>
                
                    <div class="form-group m-3 d-flex">
                        <div class="col-6 m-1">
                            <label class="d-flex justify-content-start">Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="col-6 m-1">
                            <label class="d-flex justify-content-start">Confirm Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                   
                    <div class="row justify-content-center mt-5">
                        <button type="submit" class="col-4 m-3 btn btn-black">Clear</button>
                        <button type="submit" class="col-4 m-3 btn btn-black">Submit</button>
                    </div>
                    
                
            </div>
        </div>
    </div>
</form>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarView.vue"
export default {
    name:"SigninView",
    components:{
        NavBar
    }
}
</script>

<style>
.salary-details{
    background-color: rgb(201, 201, 201);
    padding-top: 10vh;
    padding-bottom:10vh ;
    border-radius: 5px;
}
.personal-details button{
    background-color: black;
    color: white;
}
.personal-details button:hover{
    background-color: rgb(201, 201, 201);
    color: rgb(0, 0, 0);
}
.personal-details{
    border: 2px solid black;
    padding: 4vh;
    border-radius: 5px;
}
</style>