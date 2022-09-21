<template>
  <NavBar/>
  <div class="container p-4">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button">Add Employee</button>
        <button class="btn btn-primary" type="button">Upgrade Employee</button>
    </div>
  </div>

  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from "@/components/NavbarView.vue"
export default {
    name:"EmployeeView",
    components:{
        NavBar
    }
}
</script>

<style>
.btn{
    background-color: #C4B6B6;
    border-color: #C4B6B6;
    color: black;
}
.btn:hover{
    background-color: #7E7474;
    border-color: #7E7474;
}

</style>