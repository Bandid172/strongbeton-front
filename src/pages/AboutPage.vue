<template>
    <div class="about">
        <div class="heading">
            <h1>About us</h1>
            <hr>
        </div>
        <article class="article">
            <div>
                <div class="overview">
                    <h3>Welcome to StrongBeton - Where Concrete Excellence Begins</h3>
                    <p>Established in 2019, StrongBeton is a trusted leader in concrete manufacturing located in Termez City. We specialize in providing a wide range of high-quality concrete products to meet the diverse needs of our valued customers.</p>
                </div>
                <div class="overview product-range">
                    <h3>Our Product Range:</h3>
                    <ul>
                        <li>
                            <p><span class="strong">Batch Plants: </span>We offer cutting-edge batch plants designed for maximum efficiency and consistency in concrete production.</p>
                        </li>
                        <li>
                            <p><span class="strong">Ready-Mix: </span>Our ready-mix concrete solutions ensure top-tier performance for your construction projects.</p>
                        </li>
                        <li>
                            <p><span class="strong">Self-Compacting Concrete: </span>Experience the ease of self-compacting concrete, designed for optimal flow and minimal segregation.</p>
                        </li>
                        <li>
                            <p><span class="strong">High-Performance Mixes: </span>Our high-performance concrete mixes are engineered for exceptional strength and durability.</p>
                        </li>
                        <li>
                            <p><span class="strong">Lightweight Concrete: </span>Discover lightweight concrete solutions, perfect for reducing structural load without compromising quality.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="../assets/images/Rectangle52.png" />
            </div>
        </article>
        <div class="main-feedbacks">
            <h1>What Our Clients Say</h1>
            <div class="feedbacks" id="feedbacks">
                <div class="feedback" v-for="feedback in getFeedbacks" :key="feedback.id">
                    <img :src="'http://localhost:8505/' + feedback.picture.contentUrl" />
                    <div class="comment">
                        <h4>{{ feedback.name }}</h4>
                        <p>{{ feedback.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AboutPage",
    methods: {
        ...mapActions(['fetchFeedbacks']),
    },

    mounted() {
        this.fetchFeedbacks()
    },

    computed: {
        ...mapGetters(['getFeedbacks'])
    }
}
</script>

<style scoped>

.about h1, h2, h3, h4, h5, h6 {
    color: #323232;
}

.about h1 {
    padding: 1rem 3rem;
}

.article {
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.overview {
    max-width: 700px;
    margin: 1.5rem 0;
}

.overview h3 {
    display: inline;
    margin-right: 10px;
}

.overview p{
    max-width: 400px;
    display: inline;
}

.strong {
    font-weight: bold;
}

.product-range h3{
    display: block;
    margin: 10px 0;
}

.product-range ul li {
    list-style-type: none;
    margin-top: 10px;
}

.main-feedbacks {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 50px;
    margin-top: 50px;
}

.main-feedbacks h1 {
    text-align: center;
    padding: 0;
    margin: 0;
}

.feedbacks {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
}

.feedback {
    display: flex;
    gap: 15px;
    align-items: flex-start;
    justify-content: center;
}

.feedback p {
    max-width: 400px;
}

.feedback img {
    max-width: 130px;
}

.comment p {
    margin-top: 10px;
    text-align: justify;
}

@media (max-width: 1475px) {
    .article {
        flex-direction: column-reverse;
    }

    .article img {
        width: 100%;
    }
}

@media (max-width: 600px) {
    .feedback {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .feedback h4 {
        text-align: center;
    }

    .main-feedbacks h1 {
        text-align: center;
    }

    .comment p {
        font-size: 14px;
    }
}

@media (max-width: 579px) {
    .article {
        padding: 1rem;
        font-size: 14px;
    }
}
</style>