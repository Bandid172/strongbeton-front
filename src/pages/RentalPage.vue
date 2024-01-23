<template>
    <div class="rental">
        <div class="machinery-heading">
            <h1>Machinery rental</h1>
            <hr>
        </div>
        <div class="machinery">
            <div class="machinery-card">
                <h2>Excavator Loader</h2>
                <img src="../assets/images/jcb-backhoe-loader.jpg" />
            </div>
            <div class="machinery-card">
                <h2>Concrete Mixer</h2>
                <img src="../assets/images/f_1675006239183497.jpg" />
            </div>
            <div class="machinery-card">
                <h2>Autocrane</h2>
                <img src="../assets/images/f_1674982126862729.jpg" />
            </div>
            <div class="machinery-card">
                <h2>Dump Truck</h2>
                <img src="../assets/images/a4fbe81960eb948af8a172e82c98d368.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RentalPage"
}
</script>

<style scoped>
.rental h1, h2, h3, h4, h5, h6 {
    color: #323232;
}

.rental h1 {
    padding: 1rem 3rem;
}

.machinery {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    padding: 0 2rem;
    margin: 2rem 0;
}

.machinery-card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: #FFFFFF;
    max-width: 400px;
    min-width: 200px;
    padding: 1.5rem 0;
    box-shadow: 0 0.1428571429rem 0.5714285714rem 0.0714285714rem rgba(33,41,47,.16);
    border-radius: .2857142857rem;
}

.machinery-card img {
    max-width: 400px;
    width: 100%;
}

@media (max-width: 1368px) {
    .machinery {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 900px) {
    .machinery {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 1rem;
    }
}

@media (max-width: 673px) {
    .machinery {
        grid-template-columns: repeat(1, 4fr);
    }

    .machinery-card {
        max-width: 620px;
    }
}

@media (max-width: 374px) {
    .machinery-card h2 {
        font-size: 16px;
    }
}
</style>