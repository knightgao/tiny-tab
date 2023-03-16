<script setup>
import photo from '../components/photo.vue';
</script>

<template>
    <div class="layer">
        <photo></photo>
        <photo></photo>
        <photo></photo>
        <photo></photo>
        <photo></photo>
        <photo></photo>
        <photo></photo>
        <photo></photo>
    </div>
</template>


<style lang="scss">
.layer {
    position: relative;
    height: 100vh;
    width: 100%;
    display: grid;
    padding-top: 2vh;
    user-select: none;
    grid-template-columns: repeat(auto-fill,var(--tiny-size));
    grid-template-rows: repeat(auto-fill,var(--tiny-size));
    grid-auto-flow: dense;
    grid-gap: var(--tiny-gap-x) var(--tiny-gap-y);
}
</style>