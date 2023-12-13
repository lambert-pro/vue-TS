<template>
    <h4>App Title</h4>
    <hello-world></hello-world>
</template>

<script>
    import HelloWorld from './HelloWorid.vue'
    export default {
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>
    h4{
        text-decoration: underline;
    }

    /* 深度选择器，选中子组件中class为msg的元素 */
    :deep(.msg){
        text-decoration: underline;
    }
</style>