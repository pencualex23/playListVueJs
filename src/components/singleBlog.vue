<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.author }}</p>
        <ul>
            <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
        </ul>
        <article>{{ blog.content }}</article>
    </div>
</template>

<script>

export default {
    data() {
        return {
            id: this.$route.params.id,
            blog:{}
        }
    },
    created() {
        this.$http.get("https://vue-playlist-d90cc.firebaseio.com/posts/" + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        })
    }
}

</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>