<script setup>
import Love from '../components/love.vue';
import Nav from '../components/nav.vue';
import comGrid from '../components/com-grid.vue';
import comDiv from '../components/com-div.vue';

import {menuJson} from '../menuConfig.js';

</script>

<template>
    <div class="main">
        <com-grid>
            <com-div name="倒计时">
                <Love></Love>
            </com-div>
        </com-grid>
        <com-grid v-for="item in menuJson.allmenu" :key="item.id">
            <com-div :name="item.name">
                <Nav :target-url="item.targetUrl" :icon="item.iconUrl"></Nav>
            </com-div>
        </com-grid>
    </div>
</template>


<style lang="scss">
.main {
    position: relative;
    display: grid;
    user-select: none;
    grid-template-columns: repeat(auto-fill, minmax(var(--tiny-size), auto));
    grid-template-rows: repeat(auto-fill, minmax(var(--tiny-size), auto) );
    grid-auto-flow: dense;
    grid-gap: var(--tiny-gap-x) var(--tiny-gap-y);
    padding: 2dvh;
    overflow-y: auto;
}
</style>