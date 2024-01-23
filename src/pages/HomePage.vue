<template>
    <div class="container">
        <CarouselSlider />
        <main class="main">
            <section>
                <div class="production-info">
                    <article>
                        <h3>We produce wide range of concrete: M100 - M800</h3>
                        <p>We produce concrete mix under the trade mark “StrongBeton” - for civil works of any kind. Pouring of foundations, walls and yard areas, concrete blinding coats, road sub-base, design of precast concrete products, construction of bridges, dams, skyscrapers, etc.</p>
                    </article>
                    <router-link to="/services">Ready-mixed concrete</router-link>
                </div>
            </section>
            <section>
                <h1>Why would you choose our company?</h1>
                <div class="company-overview">
                    <div class="card">
                        <img src="../assets/images/9.png" />
                        <article>
                            <h3>Quality</h3>
                            <p>All ready-mixed concrete is certified and conforms to the GOST 7473-2010.</p>
                        </article>
                    </div>
                    <div class="card">
                        <img src="../assets/images/5.png" />
                        <article>
                            <h3>Laboratory control</h3>
                            <p>We have our own independent laboratory, where our experts carry out continuous quality control.</p>
                        </article>
                    </div>
                    <div class="card">
                        <img src="../assets/images/2.png" />
                        <article>
                            <h3>Online order monitoring</h3>
                            <p>The function, which allows you to keep track of your order status in real-time mode. Thus, you will know at any time the situation with your order and progress thereof.</p>
                        </article>
                    </div>
                    <div class="card">
                        <img src="../assets/images/1.png" />
                        <article>
                            <h3>Production technologies</h3>
                            <p>Five (5) state-of-the-art plants with total concrete manufacturing capacity of 5 000 m³/day, equipped with the Chinese equipment. Thereby, large orders can be placed.</p>
                        </article>
                    </div>
                </div>
            </section>
            <section>
                <div class="machinery-rental">
                    <img id="concrete-pump" src="../assets/images/Rectangle32.png" alt="concrete-pump-picture" />
                    <article>
                        <h2>Equipment rental</h2>
                        <p>Along with cement and ready mixed concrete sale, we render the special-purpose machinery rental service. At our disposal, there are:</p>
                        <ul>
                            <li>3 concrete mixers</li>
                            <li>1 autocrane</li>
                            <li>3 dump trucks</li>
                            <li>1 excavator loader</li>
                        </ul>
                        <p>You can easily place a machinery rental order, having placed an order on site or making a phone call. We would appreciate your phone call!</p>
                    </article>
                </div>
            </section>
            <section>
                <h1>Our Team</h1>
                <div class="our-team snaps-inline">
                    <div class="team-card">
                        <img src="../assets/images/Rectangle37.png" />
                        <div class="employee-info">
                            <h2>John Doe</h2>
                            <p>Sales Manager</p>
                        </div>
                    </div>
                    <div class="team-card">
                        <img src="../assets/images/Rectangle38.png" />
                        <div class="employee-info">
                            <h2>Steve Clark</h2>
                            <p>Primal Engineer</p>
                        </div>
                    </div>
                    <div class="team-card">
                        <img src="../assets/images/Rectangle39.png" />
                        <div class="employee-info">
                            <h2>Amanda Jackson</h2>
                            <p>Accounting Manager</p>
                        </div>
                    </div>
                    <div class="team-card">
                        <img src="../assets/images/Rectangle40.png" />
                        <div class="employee-info">
                            <h2>Peter Smith</h2>
                            <p>General Manager</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Who trusts us?</h2>
                <ImageSwiper />
            </section>
        </main>
    </div>
</template>

<script>
import CarouselSlider from "@/components/CarouselSlider";
import ImageSwiper from "@/components/ImageSwiper";

export default {
    name: "HomePage",
    components: {
        ImageSwiper,
        CarouselSlider
    },
}
</script>

<style scoped>

.main {
    padding: 0 2rem;
}

section {
    margin-bottom: 75px;
}

.production-info {
    padding: 5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #fff;
    flex-direction: column;
}

.production-info article h3 {
    text-align: center;
    font-weight: 500;
    font-style: normal;
    font-size: 30px;
    margin-bottom: 28px;
}

.production-info article p{
    max-width: 1200px;
    text-align: center;
}

.production-info a {
    padding: 1rem 2rem;
    border: 2px solid #d3c077;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    margin-top: 30px;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    transition: all .5s;
    text-decoration: none;
    color: #000;
}

.production-info a:hover {
    background-color: #d3c077;
    color: #fff;
}

.company-overview {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;
}

.card {
    margin-top: 50px;
    max-width: 600px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
}

.card article h3 {
    margin: 10px 0;
}

.card article p {
    max-width: 450px;
    padding-bottom: 50px;
}

.machinery-rental {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

.machinery-rental article {
    max-width: 700px;
}

.machinery-rental article h2 {
    margin-bottom: 20px;
    color: #323232;
}

.machinery-rental article p {
    margin: 20px 0;
}

.machinery-rental article ul {
    margin-left: 40px;
}

#concrete-pump {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
}

.our-team {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    margin-top: 40px;
    overflow-y: scroll;
}

.our-team {
    display: grid;
    grid-auto-flow: column;

    overflow-y: hidden;
    overflow-x: auto;
    overscroll-behavior: contain;
}

.our-team::-webkit-scrollbar {
    border-radius: 6px;
    background: #BCBCBC;
    height: 10px;
}

.our-team::-webkit-scrollbar-thumb {
    background: #3E3E3E;
    border-radius: 6px
}

.snaps-inline {
    scroll-snap-type: inline mandatory;
}

.snaps-inline > * {
    scroll-snap-align: start;
}

.team-card {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    margin: 30px 0;
    padding-bottom: 10px;
}

.team-card img{
    max-width: 300px;
    min-width: 200px;
    width: 100%;
    transition: all .5s;
}

.team-card img:hover {
    transform: scale(0.95);
}

.employee-info h2 {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.carousel {
    position: relative;
    overflow: hidden;
    margin: 30px auto 50px;
}

.carousel-track-container {
    width: 100%;
    overflow: hidden;
}

.carousel-track img {
    max-width: 130px;
    height: 130px;
}

.carousel-button {
    position: absolute;
    top: 50%;
    font-size: 1rem;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,0.5);
    color: white;
    border: none;
    cursor: pointer;
}

.carousel-button.left {
    left: 10px;
}

.carousel-button.right {
    right: 10px;
}

.carousel-track {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-slide {
    min-width: 35%;
    box-sizing: border-box;
    margin-right: 10px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease;
    flex: 0 0 auto;
}

@media (max-width: 1199px) {
    .company-overview {
        grid-template-columns: repeat(3,1fr);
    }
}

@media (max-width: 1031px) {
    .machinery-rental {
        flex-direction: column;
    }
}

@media (max-width: 945px) {
    .company-overview {
        grid-template-columns: repeat(2,1fr);
    }
}

@media (max-width: 768px) {
    .carousel-slide {
        width: 50%;
    }
}

@media (max-width: 740px) {
    .company-overview {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 480px) {
    .production-info a {
        font-size: 12px;
        text-align: center;
    }

    .carousel-slide {
        width: 100%;
    }
}

</style>