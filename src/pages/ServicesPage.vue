<template>
    <div class="ready-mixed-concrete">
        <div class="concrete-info">
            <div class="heading">
                <h1>Ready-mixed concrete</h1>
                <p>We would like to offer you to learn more about concrete grades available. You will find out here in the concrete mixes for:</p>
                <ul>
                    <li>Foundation pouring and screeding</li>
                    <li>Filling walls and courtyards</li>
                    <li>Highway pillows</li>
                    <li>Concrete products production</li>
                    <li>Pouring piles and crossbars</li>
                    <li>Floors of a private house</li>
                    <li>Bridges, tunnels, swimming pools and skyscrapers</li>
                </ul>
            </div>
            <img src="../assets/images/Rectangle55.png" alt="picture" />
        </div>
        <div v-if="loading" class="loading">
            <div v-if="loading" class="loading-spinner">
                <div class="spinner-inner"></div>
            </div>
        </div>
        <div class="concrete-blocks" v-if="loading === false">
            <div class="concrete-block" v-for="product in getProducts" :key="product.id">
                <img :src="'http://localhost:8505/' + product.picture.contentUrl" />
                <div class="details">
                    <router-link :to="'/concrete-info/' + product.id" class="router--link">{{ product.name }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ServicesPage",

    data() {
        return {
            loading: false
        }
    },

    methods: {
        ...mapActions(['fetchProducts'])
    },

    mounted() {
        this.loading = true
        this.fetchProducts()
            .finally(() => {
                this.loading = false
            })
    },

    computed: {
        ...mapGetters(['getProducts'])
    }
}
</script>

<style scoped>
.loading {
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: relative;
}

.spinner-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid #f3f3f3;
    border-top-color: #3498db;
    animation: spin 1.5s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.ready-mixed-concrete {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 75px;
    margin-bottom: 75px;
    color: #323232;
    padding: 0 1.5rem;
    gap: 100px;
}

.concrete-info {
    display: flex;
    gap: 25px;
    justify-content: center;
}

.heading h1 {
    font-weight: bold;
}

.heading p {
    max-width: 600px;
    margin-top: 25px;
    margin-bottom: 25px;
}

.heading ul {
    margin-left: 40px;
}

.concrete-info img {
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
}

.concrete-blocks {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 50px;
}

.concrete-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
}

.concrete-block img {
    max-width: 350px;
    width: 100%;
}

.details {
    width: 100%;
    padding: 1rem;
    background: #3E3E3E;
    color: #FFFFFF;
    text-align: center;
}

.details a {
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    color: #FFFFFF;
    text-transform: uppercase;
    transition: all .5s ease;
}

.details a:hover {
    color: #ccc;
}

@media (max-width: 1201px) {
    .concrete-blocks {
        grid-template-columns: repeat(3,1fr);
    }
}

@media (max-width: 1006px) {
    .concrete-info img {
        max-width: 500px;
    }
}

@media (max-width: 915px) {
    .ready-mixed-concrete {
        padding: 0 1rem;
    }

    .concrete-info img {
        max-width: 400px;
    }

    .concrete-blocks {
        grid-template-columns: repeat(2,1fr);
    }
}

@media (max-width: 791px) {
    .concrete-info img {
        max-width: 375px;
    }

    .heading p {
        font-size: 14px;
    }

    .heading ul {
        margin-left: 20px;
        font-size: 14px;
    }
}

@media (max-width: 727px) {
    .concrete-info  {
        flex-direction: column-reverse;
        align-items: center;
    }

    .concrete-info img {
        max-width: 600px;
    }
}

@media (max-width: 436px) {
    .concrete-blocks {
        grid-template-columns: repeat(1,1fr);
    }
}
</style>