import showBlogs from './components/showBlogs.vue';
import blog from './components/blog.vue';
import singleBlog from './components/singleBlog.vue';
export default [
    { path: '/', component: showBlogs },
    { path:'/add', component: blog },
    { path:'/blog/:id', component:singleBlog}
]