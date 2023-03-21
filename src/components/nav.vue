<script setup>
import { useConfigStore } from "../store/config";
import { computed, inject, watch } from 'vue';

const props = defineProps(['targetUrl', "iconUrl"])

const store = useConfigStore();

const gridColumn = inject("gridColumn");
const gridRow = inject("gridRow");


const config = computed(
    () => {
        let config = Object.assign({}, props);
        config.iconUrl = config.iconUrl ? config.iconUrl : "/default.png"
        return config
    }
)

const style = computed(
    () => {
        return {
            "background-image": `url(${config.value.iconUrl})`,
        }
    }
)


</script>

<template>
    <div class="nav">
        <a rel="noopener noreferrer" target="_blank" :href="config.targetUrl">
            <div class="nav-img" :style="style"></div>
        </a>
    </div>
</template>


<style lang="scss">
.nav {
    width: 100%;
    height: 100%;

    .nav-img {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
    }
}
</style>