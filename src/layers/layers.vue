<script setup>
import Main from './Main.vue';
import leftNav from './leftNav.vue';
import Footer from './Footer.vue';
</script>

<template>
    <div class="layers">
        <leftNav class="nav"></leftNav>
        <Main class="main"></Main>
        <Footer class="footer"></Footer>
    </div>
</template>


<style lang="scss">
/* Mobile*/
.layers {
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto auto;
    grid-template-areas:
        "main"
        "nav"
        "footer";
    gap: 2px;
    height: 100vh;
}

.header {
    grid-area: header;
}

.main {
    grid-area: main;
}

.nav {
    grid-area: nav;
}


.footer {
    grid-area: footer;
}

/* Tablet Layout*/
@media only screen and (min-width: 768px) {
    .layers {
        grid-template-columns: 60px 1fr;
        grid-template-rows: auto minmax(0, 1fr) auto auto;
        grid-template-areas:
            "nav    main"
            "nav    main"
            "nav footer";
    }
}

/* Desktop Layout */
@media only screen and (min-width: 1024px) {
    .layers {
        grid-template-columns: 60px minmax(0, 1fr) 220px;
        grid-template-rows: auto minmax(0, 1fr) auto;
        grid-template-areas:
            "nav     main    main"
            "nav     main    main"
            "nav  footer  footer";
    }
}


</style>