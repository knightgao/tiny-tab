<script setup >
import ContextMenu from '@imengyu/vue3-context-menu';
import { ref } from 'vue';

const comStyle = ref({
    "gridColumnStart": "span 1",
    "gridRowStart": "span 1"
})

const onContextMenu = (e) => {
    //prevent the browser's default menu
    e.preventDefault();
    //show your menu
    ContextMenu.showContextMenu({
        x: e.x,
        y: e.y,
        items: [
            {
                label: "删除",
                onClick: () => {

                }
            },
            {
                label: "改变大小",
                children: [
                    {
                        label: "1*1", onClick: () => {
                            comStyle.value.gridColumnStart = "span 1"
                            comStyle.value.gridRowStart = "span 1"
                        }
                    },
                    {
                        label: "1*2", onClick: () => {
                            comStyle.value.gridColumnStart = "span 2"
                            comStyle.value.gridRowStart = "span 1"
                            
                        }
                    },
                    {
                        label: "2*1", onClick: () => {
                            comStyle.value.gridColumnStart = "span 1"
                            comStyle.value.gridRowStart = "span 2"
                        }
                    },
                    {
                        label: "2*2", onClick: () => {
                            comStyle.value.gridColumnStart = "span 2"
                            comStyle.value.gridRowStart = "span 2"
                        }
                    },
                ]
            },
        ]
    });
}
</script>

<template>
    <div @contextmenu.prevent="onContextMenu" class="com-grid" :style="comStyle">
        <slot name="default"></slot>
    </div>
</template>

<style lang="scss">
.com-grid {
    border-radius: var(--tiny-radius);
    opacity: var(--tiny-opacity);
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #0000001a;
    box-shadow: 0 0 5px #0000001a;
    transition: .2s;
    cursor: pointer;
}
</style>