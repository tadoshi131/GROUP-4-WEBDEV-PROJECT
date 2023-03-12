<template>
  <div class="home">
  </div>
  <header>
    <img alt="image" class="image" src="../assets/group4.jpg" width="200" height="200" />
   <h1> Group 4</h1>
  </header>

  <nav>
    <img alt="img" class="img" src="../assets/2021-00547-BN-1.jpg" width="100" height="100" /><icon><img alt="image" class="img" src="../assets/likeicons/likeicon1.png" width="30" height="30" /></icon>{{ count }}
    <router-link to="/peley"><h2>EUGENE M. PELEY</h2></router-link> 
    <img alt="img" class="img" src="../assets/2021-00275-BN-0.jpg" width="100" height="100" /><icon><img alt="image" class="img" src="../assets/likeicons/likeicon2.png" width="30" height="30" /></icon>{{ count }}
    <router-link to="/barcellano"><h2>ROLHIMARK L. BARCELLANO</h2></router-link> 
    <img alt="img" class="img" src="../assets/2021-00301-BN-0.jpg" width="100" height="100" /><icon @click="increment"><img alt="image" class="img" src="../assets/likeicons/likeicon3.png" width="30" height="30" /></icon>{{ count }}
    <router-link to="/brutas"><h2>RONNEL BRENT D. BRUTAS</h2></router-link><br> 
    <img alt="img" class="img" src="../assets/enciso.jpg" width="100" height="100" /><icon @click="increment"><img alt="image" class="img" src="../assets/likeicons/likeicon4.png" width="30" height="30" /></icon>{{ count }}
    <router-link to="/enciso"><h2>HAROLD JAMES ENCISO</h2></router-link> 
    <img alt="img" class="img" src="../assets/2021-00525-BN-0.jpg" width="100" height="100" /><icon @click="increment"><img alt="image" class="img" src="../assets/likeicons/likeicon5.png" width="30" height="30" /></icon>{{ count }}
    <router-link to="/lara"><h2>ALIYAH MACY B. LARA</h2></router-link> 
    <img alt="img" class="img" src="../assets/2021-00181-BN-0.jpg" width="100" height="100" /><icon @click="increment"><img alt="image" class="img" src="../assets/likeicons/likeicon6.png" width="30" height="30" /></icon>{{ count }}
    <router-link to="/oli"><h2>ANWIL SHIEN B. OLI</h2></router-link><br> 

    <TheWelcome />
  </nav>
</template>
<script>
 export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>