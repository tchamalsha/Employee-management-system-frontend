<template>
  <NavBar/>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3 cards card1 ">
        <h5>Position</h5>
        <p>Operator</p>
      </div>
      <div class="col-3 cards card2">
        <h5>Basic Salary</h5>
        <p>Rs. 25000</p>
      </div>
      <div class="col-3 cards card3">
        <h5>OT Rate</h5>
        <p>Rs. 100</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="col-6 salary">
      <h4>See how your Salary calculated!!</h4>
      <div class="row g-3 align-items-center justify-content-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Date</label>
        </div>
        <div class="col-auto">
          <input type="date" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" >
        </div>
        <div class="col-auto">
          <button class="btn btn-primary me-md-2" type="button">Submit</button>
        </div>
      </div>
      <div class="salary-info mt-5">
        <div class="row info-row ">
          <div class="col-4 justify-content-start">
            Basic Salary
          </div>
          <div class="col-4"></div>
          <div class="col-4 justify-content-end">
            Rs.12,00.00
          </div>
        </div>
        <div class="row info-row  mt-5">
          <div class="col-4 justify-content-start">
            No pay  
          </div>
          <div class="col-2">4</div>
          <div class="col-2">Amount</div>
          <div class="col-4 justify-content-end">
            <p>Rs.12,00.00</p> 
            <hr>
          </div>
        </div>
       
        <div class="row info-row  mt-5">
          <div class="col-4 justify-content-start">
            Attendance Bonus
          </div>
          <div class="col-4"></div>
          <div class="col-4 justify-content-end">
            Rs.12,00.00
          </div>
        </div>
        <div class="row info-row  mt-5">
          <div class="col-4 justify-content-start">
            OT hours
          </div>
          <div class="col-2">4</div>
          <div class="col-2">OT Amount</div>
          <div class="col-4 justify-content-end">
            Rs.12,00.00
          </div>
        </div>
        <div class="row info-row  mt-5">
          <div class="col-4 justify-content-start">
           Sundays
          </div>
          <div class="col-4"></div>
          <div class="col-4 justify-content-end">
            Rs.12,00.00
          </div>
        </div>
        <div class="row info-row  mt-5">
          <div class="col-4 justify-content-start">
           Special Allowance
          </div>
          <div class="col-4"></div>
          <div class="col-4 justify-content-end">
           <p>Rs.12,00.00</p> 
            <hr>
          </div>
        </div>
        
        <div class="row info-row  mt-5">
          <div class="col-4 justify-content-start">
           Deductions
          </div>
          <div class="col-4"></div>
          <div class="col-4 justify-content-end">
            Rs.12,00.00
          </div>
        </div>
        <hr>
        <div class="row info-row  mt-5 total">
          <div class="col-4 justify-content-start">
           <p class="font-weight-bold">Total Salary</p>
          </div>
          <div class="col-4"></div>
          <div class="col-4 justify-content-end">
           <p class="font-weight-bold">Rs.45000.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarView.vue"
export default {
    name:"SalaryService",
    components:{
        NavBar
    }
}
</script>

<style>  
.cards{
  margin: 5vh;
  padding-top: 4vh;
  padding-bottom:4vh ;
  text-align: center;
  border-radius: 3vh;
}
.card1{
  background-color: rgb(168, 119, 204);
}
.card2{
  background-color: rgb(233, 176, 176);
}
.card3{
  background-color: lightgreen;
}
.salary{
  margin-top: 5vh;
  border:2px solid #000000;
  border-radius: 5vh;
  padding: 5vh;
}

.hr{
  color: gray;
  height: 2px;
}
</style>