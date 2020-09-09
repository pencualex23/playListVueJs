<template>
  <div id="appBlog">
    <h2>Add a new blog</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories" />
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{
          author
        }}</option>
      </select>
      <button v-on:click.prevent="postF">Add blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding it</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["The net ninja", "Alex", "The vue vindicator"],
      submitted: false
    };
  },
  methods: {
    postF: function() {
      this.$http
        .post("https://vue-playlist-d90cc.firebaseio.com/posts.json", this.blog)
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped>
#appBlog * {
  box-sizing: border-box;
}
#appBlog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  word-wrap: break-word;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
