<template>
    <NavBar/>
  <div class="container-fluid">
    <form @submit.prevent="signup">
    <div class="row m-auto mt-5 d-flex align-items-center">
        <div class="col-md-5 justify-content-center salary-details ">
            <div class="login-main-text">
                <h2>Application<br> Register Page</h2>
                <p>Register employees here</p>
            </div>
            <div class="container col-md-8">
               
                <div class="form-group p-2 ">
                    <label class="d-flex justify-content-start">Employee Roll</label>
                    <select class="form-select" aria-label="Default select example" v-model="form.role">
                        <option value="Open this select menu" disabled>Open this select menu</option>
                        <option>Admin</option>
                        <option>Employee</option>
                    </select>
                </div>
                <div class="form-group p-2">
                    <label class="d-flex justify-content-start" >Position</label>
                    <select class="form-select" aria-label="Default select example" v-model="form.position">
                        <option value="Open this select menu" disabled>Open this select menu</option>
                        <option>Mechanic</option>
                        <option>Operator</option>
                        <option>Helper</option>
                        <option>Manager</option>
                        <option>Supervisor</option>
                    </select>
                </div>
                <div class="form-group p-2">
                    <label class="d-flex justify-content-start">Basic Salary</label>
                    <input type="text" class="form-control" placeholder="LKR" v-model="form.basicSalary">
                </div>
                <div class="form-group p-2">
                    <label class="d-flex justify-content-start">Special Allowance</label>
                    <input type="text" class="form-control" placeholder="LKR" v-model="form.specialAllowance">
                </div>
                
            </div>

        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5 justify-content-center personal-details  ">
            <div class="login-form">
                    <h3 class="pb-1">Personal Details</h3>
               
                    <div class="form-group m-3">
                        <label class="d-flex justify-content-start">Full Name</label>
                        <input type="text" v-model="form.name" class="form-control" placeholder="Type full name">
                    </div>
                    <div class="form-group m-3">
                        <label class="d-flex justify-content-start">Email</label>
                        <input type="email" v-model="form.email" class="form-control" placeholder="Type email">
                    </div>
                    <div class="form-group m-3 d-flex">
                        <div class="col-6 m-1">
                            <label class="d-flex justify-content-start">Identity Number</label>
                        <input type="text" class="form-control" v-model="form.id" placeholder="Id number">
                        </div>
                        <div class="col-6 m-1">
                            <label class="d-flex justify-content-start">Mobile Number</label>
                            <input type="text" class="form-control" v-model="form.telephone" placeholder="Mobile number">
                        </div>
                    </div>
                    <div class="form-group m-3">
                        <label class="d-flex justify-content-start">Address</label>
                        <input type="text" class="form-control" v-model="form.address" placeholder="Address">
                    </div>
                
                    <div class="form-group m-3 d-flex">
                        <div class="col-6 m-1">
                            <label class="d-flex justify-content-start">Postal Code</label>
                            <input type="text" v-model="form.postalCode" class="form-control" placeholder="Postal Code">
                        </div>
                        <div class="col-6 m-1">
                            <label class="d-flex justify-content-start">Confirm Password</label>
                            <input type="password" class="form-control" v-model="form.Password" placeholder="Password">
                        </div>
                    </div>
                   
                    <div class="row justify-content-center mt-5">
                        <button type="clear" class="col-4 m-3 btn btn-black">Clear</button>
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
import adminService from "@/services/AdminService";
import employeeService from "@/services/EmployeeService"
import userService from "@/services/UserService"
export default {
    name:"SigninView",
    data() {
            return {
                isError: false,
                form: {
                    id:"",
                    email: "",
                    name: "",
                    role: "",
                    telephone:"",
                    password: "",
                    postalCode: "",
                    address:"",
                    position:"",
                    basicSalary:"",
                    specialAllowance:"0.00",
                    otRate:""

                }
            }
        },
        methods: {
            async signup(){     
                this.form.otRate = (this.form.basicSalary/200)*1.5;  
                this.form.otRate.toFixed(2);  

                if (this.form.role == 'Admin'){
                    adminService.signup(this.form).then(res => {
                    this.isError = false
                }).catch(err => {
                    this.isError = true
                    // todo : if any error
                });
                }
                else{
                    employeeService.signup(this.form).then(res => {
                    this.isError = false
                }).catch(err => {
                    this.isError = true
                    // todo : if any error
                });
                }
                userService.addPersonalDetails(this.form).then(res => {
                    this.isError = false
                }).catch(err => {
                    this.isError = true
                    // todo : if any error
                });
                userService.addSalarylDetails(this.form).then(res => {
                    this.isError = false
                }).catch(err => {
                    this.isError = true
                    // todo : if any error
                });

                if(this.isError == true){
                    this.$router.push('/error')
                }else{
                    this.$router.push('/success')
                }

            }
        },
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