<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import blog from './components/blog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';
export default {
  components: {
    "app-blog":blog,
    "app-show":showBlogs,
    "app-listblogs":listBlogs,
    "app-header":header
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
