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
</style>