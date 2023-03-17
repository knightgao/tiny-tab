<script setup>
import comGrid from './com-grid.vue';
import { useConfigStore } from "../store/config";
import dayjs from 'dayjs';
import { computed, inject, watch } from 'vue';

const store = useConfigStore();

const diffDay = computed(
    () => {
        return dayjs().diff(store.loveDay, "day")
    }
);


const gridColumn = inject("gridColumn");
const gridRow = inject("gridRow");
// 设置大小
const size = computed(
    ()=>{
        return (gridRow.value === 1 || gridColumn.value === 1) ? "mini" : "default"
    }
)



</script>

<template>
    <div class="love">
        <template v-if="size === 'mini'">
            <div class="love-day">{{ diffDay }}</div>
        </template>
        <template v-if="size === 'default'">
            <div class="love-title">和ta已经相爱</div>
            <div class="love-day"><span>{{ diffDay }}</span><i>天</i></div>
            <div class="love-bottom">{{ store.loveDay }}</div>
        </template>
    </div>
</template>


<style lang="scss">
.love {
    --textColor: #eb8197;
    --textSubColor: #eb8197cf;

    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--textColor);
    &-title {}

    &-day {
        span{
            font-size: 20px;
            font-weight: bold;
        }
        i{
            font-size: 10px;
        }
    }

    &-bottom {}
}
</style>