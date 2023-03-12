<template>
    <div class="enciso"></div>
    <img alt="img" class="img" src="../assets/enciso.jpg" width="100" height="100" />
    <h3>
      <p>NAME: Harold James A. Enciso</p>
      <p>Tell me abour your self: I do love reading books and watching anime</p>
      <p>Type of job you want: Pilot</p>
      <p>Goal: Have a decent work and buy everything that I want</p>
      <p>Relationship status: Single</p>
      <p>Interested in: Supernatural activities</p>
      <p>Pet peeve: N/A</p>
      <p>Talent: Playing guitara and sketching</p>
      <p>Religion: Born Again Christian</p>
      <p>Life goals: My life goals is to have my dream house in the future with my own family, specially financially stable.</p>
      <p>Bigggest fear: Lost of family members.</p>
      <p>Favorite color: Black</p>
      <p>Favorite food: Sinigang</p>
      <p>Favorite bibble verse: 1 Peter 5:10</p>
      <p>Favorite historical figures: Jose Rizal monument</p>
      <p>Favorite movies and tv shows: Game of Thrones</p>
      <p>Favorite past-time: Watching anime</p>
      <p>Favorite books to read: Harry Potter</p>
      <p>Favorite sport: Basketball</p>
    </h3>

  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<script>
// give each todo a unique id
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }
  },
  methods: {
     addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
     removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>