<template>
    <div class="app">
        <!--使用局部注册的组件-->
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
export default {
    components: {
        Header,
        Main,
        Footer
    }
}

</script>

<style>
  .header, .main, .footer{
    border: 1px solid #999;
    margin-bottom: 4px;
  }
</style>