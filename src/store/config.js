import { defineStore } from 'pinia';
import { computed,ref } from 'vue';
import dayjs from "dayjs";

export const useConfigStore = defineStore('config', () => {

    // 各种日期
    const days = ref({
        loveStart: "2020-09-01",
        birthday: "1995-11-17"
    })

    const loveDay = computed(
        () => days.value.loveStart
    )
    function setLoveDay(day) {
        days.value.loveStart = dayjs(day).format('YYYY-MM-DD')
    }

    const birthday = computed(
        () => days.value.birthday
    )
    function setBirthday(day) {
        days.value.birthday = dayjs(day).format('YYYY-MM-DD')
    }

    return { days, loveDay, birthday, setLoveDay, setBirthday }
})