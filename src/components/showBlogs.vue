<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>All blogs articles</h1>
    <input type="text" v-model="search" placeholder="search box" />
    <div v-for="blog in filteredBlogs" v-bind:key="blog" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | toUppercase }}</h2></router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {
  components: {},
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://vue-playlist-d90cc.firebaseio.com/posts.json")
      .then(function(data) {
          return data.json();
      }).then(function(data){
        var blogsArray = [];
        for(let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;  
      });
  },
  computed: {

  },
  filters: {
    toUppercase: function(value) {
      return value.toUpperCase();
    },
    snippet: function(value) {
      return value.slice(0, 100) + "...";
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    },
    theme: {
      bind(el, binding, vnode) {
        if (binding.value == "wide") {
          el.style.maxWidth = "1200px";
        } else if (binding.value == "narrow") {
          el.style.maxWidth = "560px";
        }

        if (binding.arg == "column") {
          el.style.background = "#ddd";
          el.style.padding = "20px";
        }
      }
    }
  },
  mixins:[searchMixin]
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
}
a{
  text-decoration: none;
}
</style>
