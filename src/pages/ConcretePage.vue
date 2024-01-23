<template>
    <div v-if="loading" class="loading">
        <div v-if="loading" class="loading-spinner">
            <div class="spinner-inner"></div>
        </div>
    </div>
    <main v-if="loading === false" class="main main-concrete">
        <div class="concrete-info">
            <div>
                <img :src="'http://localhost:8505/' + getProduct.picture" alt="concrete-block"/>
            </div>
            <div>
                <h1>Ready-mixed concrete of class {{ getProduct.name }}</h1>
                <p>{{ getProduct.text }}</p>
            </div>
        </div>
        <div class="detailed-info">
            <div class="specifications">
                <table class="specifications-table">
                    <tr>
                        <th>Specifications</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Average strength:</td>
                        <td>{{ getProduct.strength }}</td>
                    </tr>
                    <tr>
                        <td>Density:</td>
                        <td>{{ getProduct.density }}</td>
                    </tr>
                    <tr>
                        <td>Freeze-thaw resistance:</td>
                        <td>{{ getProduct.freezeResistance }}</td>
                    </tr>
                    <tr>
                        <td>Consistency:</td>
                        <td>{{ getProduct.consistency }}</td>
                    </tr>
                    <tr>
                        <td>Waterproofing capacity:</td>
                        <td>{{ getProduct.waterproofingCapacity }}</td>
                    </tr>
                    <tr>
                        <td>GOST:</td>
                        <td>{{ getProduct.gost }}</td>
                    </tr>
                </table>
            </div>
            <div class="recommendations">
                <div>
                    <h3>For manufacture of 1 m³of concrete mix of class {{ getProduct.name }}, the following materials are required:</h3>
                    <ul>
                        <li v-for="product in getProduct.requiredMaterials" :key="product.id">{{ product }}</li>
                    </ul>
                </div>
                <div>
                    <h3>It is recommended for:</h3>
                    <ul>
                        <li v-for="product in getProduct.reccomendations" :key="product.id">{{ product }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ConcretePage",
    methods: {
        ...mapActions(['fetchProduct'])
    },

    data() {
        return {
            loading: false
        }
    },

    computed: {
        ...mapGetters(['getProduct'])
    },

    mounted() {
        this.loading = true
        this.fetchProduct(this.$route.params.id)
            .finally(() => {
                this.loading = false
            })
    }
}
</script>

<style scoped>

.loading {
    width: 100%;
    height: 100vh;
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

.main-concrete {
    padding: 2rem;
    display: flex;
    gap: 100px;
    color: #323232;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.main-concrete img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
}

.concrete-info {
    display: flex;
    align-items: center;
    gap: 100px;
}

.concrete-info h1{
    margin-bottom: 50px;
    max-width: 600px;
    font-size: 2.8rem;
    font-weight: bold;
}

.concrete-info p {
    max-width: 700px;
    line-height: 24px;
    margin-bottom: 50px;
}

.detailed-info {
    display: flex;
    gap: 100px;
    align-items: center;
}

.specifications-table {
    border-collapse: collapse;
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
}
.specifications-table th, .specifications-table td {
    padding: 2rem 4rem;
    border: 1px solid #F0F0F0;
    text-align: center;
}

.specifications-table td {
    background-color: #f9f9f9;
}

.recommendations h3 {
    margin-bottom: 30px;
    max-width: 600px;
}

.recommendations ul {
    margin-bottom: 30px;
    margin-left: 40px;
    line-height: 24px;
    max-width: 550px;
}

@media (max-width: 1200px) {
    .main-concrete {
        flex-direction: column;
    }

    .concrete-info {
        flex-direction: column;
    }

    .detailed-info {
        flex-direction: column;
    }
}

@media (max-width: 604px) {
    .concrete-info h1 {
        font-size: 1.7rem;
        margin-bottom: 25px;
    }

    .concrete-info p {
        margin-bottom: 30px;
    }
}

@media screen and (max-width: 600px) {
    .specifications-table th, .specifications-table td {
        padding: 8px;
    }
}

@media (max-width: 420px) {
    .main-concrete {
        padding-right: 1rem;
        padding-left: 1rem;
    }

    .recommendations h3 {
        font-size: 16px;
    }

    .recommendations ul {
        margin-left: 20px;
    }

    .recommendations ul li {
        font-size: 14px;
    }

    .specifications-table {
        font-size: 12px;
    }
}
</style>