<template>
    <div class="full-page-carousel">
        <div
            v-for="(slide, index) in fullPageSlides"
            :key="index"
            class="full-page-carousel-slide"
            :class="{ active: currentFullPageSlideIndex === index }"
            :style="{ backgroundImage: 'url(' + slide.imageUrl + ')' }"
        >
            <div class="carousel-content">
                <h2>{{ slide.title }}</h2>
                <p>{{ slide.description }}</p>
                <router-link to="/services">Know price</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FullPageCarousel',
    data() {
        return {
            currentFullPageSlideIndex: 0,
            fullPageSlides: [
                {
                    title: 'Any volume, in any weather',
                    description: 'We ensure the supply due to automated production, streamlined logistics and efficient chemical additives',
                    imageUrl: require('../assets/images/Rectangle2.png')
                },
                {
                    title: 'The major manufacturer of ready-mixed concrete in Uzbekistan',
                    description: '5 000 cubic metres a day!',
                    imageUrl: require('../assets/images/background.jpg')
                },
                {
                    title: 'Ready-mixed concrete from the manufacturer with just-in-time delivery',
                    description: 'Free cost estimate by expert',
                    imageUrl: require('../assets/images/2beton.png')
                }
            ],
        };
    },
    mounted() {
        this.startAutoAdvance();
    },
    methods: {
        nextFullPageSlide() {
            this.currentFullPageSlideIndex = (this.currentFullPageSlideIndex + 1) % this.fullPageSlides.length;
        },
        startAutoAdvance() {
            setInterval(this.nextFullPageSlide, 5000);
        },
    },
};
</script>

<style scoped>

.full-page-carousel {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin-bottom: 50px;
}

.full-page-carousel-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease;
    opacity: 0;
}

.full-page-carousel-slide.active {
    opacity: 1;
    z-index: 1;
}

.carousel-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 4rem;
    color: #fff;
    text-align: center;
}

.carousel-content h2 {
    color: #fff;
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-content p {
    line-height: 30px;
    margin-top: 20px;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-content a{
    color: #fff;
    padding: 1rem 1.5rem;
    font-size: 16px;
    font-weight: 500;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: #d3c077;
    cursor: pointer;
    transition: all .4s ease;
    text-align: center;
    margin-top: 30px;
    box-shadow:  3px 10px 2px rgb(105 137 161 / 12%);
    text-decoration: none;
}

.carousel-content a:hover {
    background-color: #fcb900;
}

@media (max-width: 1200px) {
    .carousel-content {
        padding: 0 3rem;
    }

    .carousel-content h2 {
        font-size: 2rem;
    }

    .carousel-content p {
        font-size: 1.5rem;
    }
}

@media (max-width: 600px) {
    .carousel-content {
        padding: 0 2rem;
    }

    .carousel-content h2 {
        font-size: 1.5rem;
    }

    .carousel-content p {
        font-size: 1rem;
    }
}

</style>