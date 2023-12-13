<!--eslint-disable-->
<template>
    <div class="main">
        <!--使用局部注册的组件，也支持<MainBanner></MainBanner>语法-->
        <main-banner></main-banner>
        <main-product-list></main-product-list>
    </div>
</template>

<script>
// 导入组件
import MainBanner from './MainBanner.vue'
import MainProductList from './MainProductList.vue'
export default {
    components: {
        // 注册局部组件
        MainBanner,
        MainProductList
    }
}
</script>