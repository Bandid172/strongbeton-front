<template>
    <swiper
        :modules="modules"
        :slides-per-view="slidePerView"
        :loop="true"
        :pagination="{clickable: true}"
        :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }"
    >
        <swiper-slide v-for="image in swiperImageBase" :key="image.id" class="swiper-slide">
            <img :src="image.img" />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {ref} from 'vue'

export default {
    name: "ImageSwiper",

    data() {
        return {
            slidePerView: 5,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const swiperImageBase = ref([
            {
                id: 1,
                img: require("../assets/images/logo7.png")
            },
            {
                id: 2,
                img: require("../assets/images/logo11.png")
            },
            {
                id: 3,
                img: require("../assets/images/logo3.png")
            },
            {
                id: 4,
                img: require("../assets/images/16.png")
            },
            {
                id: 5,
                img: require("../assets/images/logo9.png")
            },
            {
                id: 6,
                img: require("../assets/images/fasfssdfasfgas.png")
            }
        ])
        return {
            modules: [Pagination, Autoplay],
            swiperImageBase
        }
    },
    methods: {
        winWidth: function () {
            setInterval(() => {
                let w = window.innerWidth;
                if(w < 341) {
                    this.slidePerView = 1
                } else if(w < 552) {
                    this.slidePerView = 2
                } else if (w < 768) {
                    this.slidePerView = 3
                } else if (w < 960) {
                    this.slidePerView = 4
                } else if (w < 1200) {
                    this.slidePerView = 5
                } else {
                    this.slidePerView = 5
                }
            }, 100);
        }
    },
    mounted() {
        this.winWidth()
    }
}
</script>

<style scoped>

.swiper-slide img {
    max-width: 200px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 7px;
}
</style>