<script setup >
import ContextMenu from '@imengyu/vue3-context-menu';
import { computed, ref,provide } from 'vue';

const isShow = ref(true);


const gridSize = ref({
    gridColumn:2,
    gridRow:2,
})

const comStyle = computed(
    ()=>{
        return {
            "gridColumnStart": `span ${gridSize.value.gridColumn}`,
            "gridRowStart": `span ${gridSize.value.gridRow}`
        }
    }
)
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
                    isShow.value = false;
                }
            },
            {
                label: "改变大小",
                children: [
                    {
                        label: "1*1", onClick: () => {
                            gridSize.value.gridColumn = 1
                            gridSize.value.gridRow = 1
                        }
                    },
                    {
                        label: "1*2", onClick: () => {
                            gridSize.value.gridColumn = 2
                            gridSize.value.gridRow = 1
                            
                        }
                    },
                    {
                        label: "2*1", onClick: () => {
                            gridSize.value.gridColumn = 1
                            gridSize.value.gridRow = 2
                        }
                    },
                    {
                        label: "2*2", onClick: () => {
                            gridSize.value.gridColumn = 2
                            gridSize.value.gridRow = 2
                        }
                    },
                    {
                        label: "2*4", onClick: () => {
                            gridSize.value.gridColumn = 4
                            gridSize.value.gridRow = 2
                        }
                    },
                ]
            },
        ]
    });
}

provide("gridColumn", computed(()=>gridSize.value.gridColumn)  )
provide("gridRow",computed(()=>gridSize.value.gridRow) )

</script>

<template>
    <div v-if="isShow" @contextmenu.prevent="onContextMenu" class="com-grid" :style="comStyle">
        <slot name="default"></slot>
    </div>
</template>

<style lang="scss">
.com-grid {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>