<template>
  <!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-light bg-* shadow fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">
        <!-- <img src="src/assets/logo.png"> -->
        <h3>L N T SOLUTIONS</h3>
    <h6>Garment Manufacturers for export market</h6></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link active" aria-current="page">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/salaryService" class="nav-link active" aria-current="page">Salary</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About LNT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signin">Signin</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>

<style>
h3,h6{
    text-align: left;
}
.navbar{
    height: 12vh;
    position: relative;
}
.masthead {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
a:active{
    color: black;
    border-bottom: black;
}
/* Color of the links BEFORE scroll */
.navbar-scroll .nav-link,
.navbar-scroll .navbar-toggler-icon {
  color: #fff;
}

/* Color of the links AFTER scroll */
.navbar-scrolled .nav-link,
.navbar-scrolled .navbar-toggler-icon {
  color: #4f4f4f;
}

/* Color of the navbar AFTER scroll */
.navbar-scrolled {
  background-color: rgb(173, 173, 173);
}

/* An optional height of the navbar AFTER scroll */
.navbar.navbar-scroll.navbar-scrolled {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>