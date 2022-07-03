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
        <div class="row mt-5">
            <div class="col-6 cards p-4">
                <h4>Announcements From Administration</h4>
                <ul>
                    <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </li>
                    <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <h4>Attendance Chart</h4>
                <GChart
                    type="LineChart"
                    :data="chartData"
                    :options="chartOptions"/>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarVue from "@/components/NavbarView.vue"
import { GChart } from 'vue-google-charts'


export default{
    name:"DashBoard",
    components:{
        NavBarVue,
        GChart
    },
    data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Month', 'Sales', 'Expenses', 'Profit'],
        ['January', 1000, 400, 200],
        ['February', 1170, 460, 250],
        ['March', 660, 1120, 300],
        ['April', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
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
.cards{
    background-color: #C4B6B6;
    text-align: justify;
    border-radius: 5vh;
}
.cards h4{
    text-align: center;
}
</style>