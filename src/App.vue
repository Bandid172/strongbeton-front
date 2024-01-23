<template>
    <div>
        <ModalWindow :isActive="this.isActive" @unSetIsActive="unSetIsActive"/>
        <NavbarRow @setIsActive="setIsActive" />
        <router-view></router-view>
        <FooterRow />
    </div>
</template>

<script>
import NavbarRow from "@/components/NavbarRow";
import FooterRow from "@/components/FooterRow";
import ModalWindow from "@/components/ModalWindow";

export default {
    name: 'App',
    components: {
        ModalWindow,
        FooterRow,
        NavbarRow
    },

    data() {
        return {
            isActive: false
        }
    },

    methods: {
        setIsActive() {
            this.isActive = true
        },

        unSetIsActive() {
            this.isActive = false
        }
    },

    mounted() {
        window.addEventListener('resize', () => {
            this.isActive = false
        })
    }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: url("./assets/images/bg.png");
}

p, ul {
    line-height: 24px;
}

::-webkit-scrollbar-track {
    background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
