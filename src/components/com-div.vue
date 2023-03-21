<script setup >

const props = defineProps(['name'])

</script>

<template>
    <div class="com-div">
        <div class="com-div-border">
            <slot name="default"></slot>
        </div>

        <slot name="buttom">
            <div class="com-div-text" v-if="props.name">{{ props.name }}</div>
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
        height: 60px;
        background-color: white;
        flex-grow: 10;
    }

    &-text {
        flex: 0 0;
        text-align: center;
        margin-top: 5px;
        height: 10px;
        color: var(--tiny-nameColor);
        font-size: var(--tiny-nameSize);
        line-height: 1.1;
        filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, .8));
        
    }
}
</style>