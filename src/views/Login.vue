<template>
  <v-app>
        <section class="login-banner">
        <div >
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="light-img">
                        <img src="../assets/images/logo-light-small.png" alt="">

                        <div class="store-app">
                            <img src="../assets/images/apple-store-light.png" alt="">
                            <img src="../assets/images/google-play-light.png" class="ml-2" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 p-0">
                    <div class="login-form">
                        <h2>Sign in to starngage+</h2>

                        <form action="">
                            <label for="">
                                <p>Email</p>
                                <p class="p">Sign In with Mobile</p>
                            </label>

                            <input type="Email" name="email" >

                            <label for="" class="pt-4">
                                <p>Password</p>
                                <p class="p">Forget Password?</p>
                            </label>

                            <input type="password" name="password">

                            <button type="submit">SIGN IN</button>

                            <p class="form-paragraph">Don't have an account?</p>
                            <button type="submit" class="button">Sign Up As A Brand</button>
                            <button type="submit" class="button">Sign Up As A Creator</button>


                            <div class="tab">
                                <p>Not StarNgage+? <span>Go Back</span> to the previous StarNgage platform now!</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </section>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
};
</script>
<style scoped >

</style>