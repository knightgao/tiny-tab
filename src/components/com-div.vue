<script setup >
import { computed, inject, watch } from 'vue';
const props = defineProps(['name'])


const gridColumn = inject("gridColumn");
const gridRow = inject("gridRow");

const gridClass = computed(
    () => {
        return `grid-${gridColumn.value}-${gridRow.value}`
    })

const gridStyle = computed(
    () => {
        return {
            minHeight:`calc(var(--tiny-size) * ${gridRow.value})`
        }
    })

</script>

<template>
    <div class="com-div" :class="[gridClass]">
        <div class="com-div-border" :style="gridStyle">
            <slot name="default"></slot>
        </div>

        <slot name="buttom">
            <div class="com-div-text" :title="props.name" v-if="props.name">
                <span>
                    {{ props.name }}
                </span>
                </div>
        </slot>
    </div>
</template>

<style lang="scss">
.com-div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &-border {
        border-radius: var(--tiny-radius);
        opacity: var(--tiny-opacity);
        overflow: hidden;
        border: 1px solid #0000001a;
        box-shadow: 0 0 5px #0000001a;
        transition: .2s;
        background-color: white;
    }


    &-text {
        text-align: center;
        height: var(--tiny-gap-x);
        line-height: var(--tiny-gap-x);
        color: var(--tiny-nameColor);
        font-size: var(--tiny-nameSize);
        filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, .8));
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        
        span{
            overflow: hidden;
        }
    }
}

.grid-1-1 {
    min-height: calc(var(--tiny-size) + var(--tiny-gap-x))
}

.grid-2-1 {
    min-height: calc(var(--tiny-size) + var(--tiny-gap-x))
}

.grid-1-2 {
    min-height: calc(var(--tiny-size)*2 + var(--tiny-gap-x))
}

.grid-2-2 {
    min-height: calc(var(--tiny-size)*2 + var(--tiny-gap-x))
}

.grid-4-2 {
    min-height: calc(var(--tiny-size)*2 + var(--tiny-gap-x))
}
</style>