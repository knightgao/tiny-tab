<script setup>
import { ref } from "vue";

/**
 * 处理点击事件
 * @param {*} type 
 */
function handleClick(type) {
    switch (type) {
        case "home":
            console.log("home")
            break;
        case "dev":
            console.log("dev")
            break;
        case "ai":
            console.log("ai")
            break;
        default:
            console.log("")
            break;
    }
};

const menuList = ref(
    [
        {
            name: "主页",
            icon: "el-icon-s-home",
            fn: () => handleClick("home"),
        },
        {
            name: "程序员",
            icon: "el-icon-user",
            fn: () => handleClick("dev"),
        },
        {
            name: "AI",
            icon: "el-icon-user",
            fn: () => handleClick("ai"),
        },
    ]
);


</script>

<template>
    <div class="leftNav">
        <div class="leftNav_user">
            登录
        </div>

        <div class="leftNav_type">
            <div class="leftNav_icon" v-for="item in menuList" :key="item.name" @click.prevent="item.fn()">
                    <div>{{ item.name }}</div>
                </div>
        </div>
    </div>
</template>

<style lang="scss">
.leftNav {
    color: rgba(var(--img-text), .6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background-color: rgba(var(--img-bg), var(--sidebar-opacity, .5));
    width: 100%;
    height: 100%;

    .leftNav_icon {
        cursor: pointer;
    }
}
</style>