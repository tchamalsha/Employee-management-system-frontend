<template>
    <NavBarVue/>
    <div class="container pt-5">
        <div class="row align-items-center">
            <div class="col-6 main-text">
                <h3>Welcome Tharushi</h3>
                <h5>This help you manage our employee data</h5>
            </div>
            <div class="col-6">
                <img src="@/assets/main.jpg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                
            </div>
        </div>
    </div>
</template>

<script>
import NavBarVue from "@/components/NavbarView.vue"
export default{
    name:"DashBoard",
    components:{
        NavBarVue
    }
}
</script>

<style>

img{
    
    width: 90%;
}
.main-text{
    text-align: justify;
}
</style>