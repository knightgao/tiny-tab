<script setup>
import comGrid from './com-grid.vue';


// 设置大小

</script>

<template>
    <comGrid>
        <div class="photo"></div>
    </comGrid>
</template>


<style lang="scss">
.photo{
    width: 100%;
    height: 100%;
    background-image: url("https://vitejs.dev/logo.svg");
    background-size: 100% 100% ;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>