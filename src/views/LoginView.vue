<template>
    <section class="container-fluid">
        <div class="row" style="height: 100vh;">
            <div class="box col-sm-8 col-md-4 mx-auto my-auto d-flex align-items-center">
                <div class=" mx-auto my-auto">
                    <div class="image w-100 mx-auto">
                    <img src="../assets/logo.png" alt="">
                </div>
                    <h1>Sign in</h1>
                    <p class="text-gray">Sign in for Learning management system.</p>
                    <div class="mt-4">
                        <form action="" method="POST" @submit.prevent="signin">
                            <label for="email_field" class="form-label">Identity Number</label>
                            <div class="input-group input-group-sm">
                                <input type="text" name="id" class="form-control" id="id_feild"  required>
                            </div>
                            <div id="emailHelp" class="form-text">We'll never share your information with anyone else.</div>
                            <label for="password_field" class="form-label mt-3">Password</label>
                            <div class="input-group has-validation input-group-sm mb-3">
                                <input type="password" name="password" class="form-control" :class="isError?'is-invalid':''" id="password_field" required>
                                <div class="invalid-feedback">
                                    Incorrect password
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-brown w-100">
                                Sign in
                                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                                </button>
                        </form>
                    </div>
                        <p class="text-center mt-5 bottom-text text-gray">
                            Don't have an account? <span class="text-black">Sign up</span>
                        </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name:"LoginView"
    }
</script>

<style scoped>
    .box{
        height: fit-content;
        border: solid 3px black;
    }
    img{
        width: 70%;
        height: auto;
    }
    .box button{
    background-color: black;
    color: white;
    }
    .box button:hover{
        background-color: rgb(201, 201, 201);
        color: rgb(0, 0, 0);
    }
    .bottom-text{
        font-size: 0.9rem;
    }
    label{
        margin-bottom: 0;
    }
    span{
        font-family: 'sf-pro';
        /* font-weight: bolder; */
    }
    i{
        font-size: 85%;
        margin: auto 5px;
    }
</style>