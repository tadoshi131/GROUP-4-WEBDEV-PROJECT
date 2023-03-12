<template>
    <div class="peley"></div>
    <img alt="img" class="img" src="../assets/2021-00547-BN-1.jpg" width="100" height="100" /><icon @click="increment"><img alt="image" class="image" src="../assets/likeicon.png" width="30" height="30" /></icon>{{ count }}
    <h3>
      <p>NAME: Eugene M. Peley</p>
      <p>Tell me abour your self: I'm a  hardworking person because i always think that i did serve not to man but to God.</p>
      <p>Type of job you want: </p>
      <p>Goal: To finish my study despite of my age and obligation to my own family.</p>
      <p>Relationship status: Married</p>
      <p>Interested in: Word of God</p>
      <p>Pet peeve: None</p>
      <p>Talent: Drawing portrait</p>
      <p>Religion: Born a gain Christian</p>
      <p>Life goals: To be in perfection with the help of Holy Spirit of God</p>
      <p>Bigggest fear: Loss of a family member</p>
      <p>Favorite color: White</p>
      <p>Favorite food: Adobo</p>
      <p>Favorite bibble verse: John 3:16</p>
      <p>Favorite historical figures: Jose Rizal in Luneta park</p>
      <p>Favorite movies and tv shows: Titanic</p>
      <p>Favorite past-time: watching TV</p>
      <p>Favorite books to read:  Bible</p>
      <p>Favorite sport: Chess</p>
    </h3>
</template>
<script class="like1">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      // update component state
      this.count++
    }
  },
}
</script>