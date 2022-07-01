<template>
    <NavBarVue/>
    <div class="container">
        <h2>Welcome Tharushi!!</h2>
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
h2{text-align: left;}

</style>