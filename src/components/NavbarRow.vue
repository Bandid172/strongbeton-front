<template>
    <header class="header">
        <div class="upper-header">
            <p id="paragraph">Concrete in any volume, in any weather just in time.</p>
            <p id="email"><strong>E-mail: </strong>info@strongbeton.uz</p>
            <button id="order-btn" @click="ActivateModalWindow">Order a call</button>
        </div>
        <nav class="navbar">
            <img class="logo" src="../assets/images/SB-logo.png" alt="logo" />
            <div class="nav-items">
                <router-link to="/">Home</router-link>
                <router-link to="/services">Ready-mixed concrete</router-link>
                <router-link to="/rental">Rental</router-link>
                <router-link to="/about">About us</router-link>
                <router-link to="/contacts">Contacts</router-link>
            </div>
            <div class="contact">
                <h2>+998 93 790 01 10</h2>
                <button class="hamburger" id="hamburger" @click="toggleHamburgerMenu">
                    <div class="bar"></div>
                </button>
            </div>
        </nav>
    </header>
    <nav class="mobile-nav" id="mobile-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Ready-mixed concrete</router-link>
        <router-link to="/rental">Rental</router-link>
        <router-link to="/about">About us</router-link>
        <router-link to="/contacts">Contacts</router-link>
        <div class="contact">
            <h4>E-mail:</h4>
            <p>info@strongbeton.uz</p>
            <h2>+998 93 790 01 10</h2>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavbarRow",
    emits: ['setIsActive'],

    methods: {
        toggleHamburgerMenu() {
            const hamburger = document.getElementById('hamburger')
            const mobileNav = document.getElementById('mobile-nav')

            mobileNav.classList.toggle('is-active')
            hamburger.classList.toggle('is-active')

            if(hamburger.classList.contains('is-active') || mobileNav.classList.contains('is-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },

        ActivateModalWindow() {
            this.$emit('setIsActive');
            document.body.style.overflow = 'hidden';
        },
    },

    mounted() {
        window.addEventListener('resize', () => {
            document.getElementById('hamburger').classList.remove('is-active')
            document.getElementById('mobile-nav').classList.remove('is-active')
            document.body.style.overflow = '';
        })
    },

    watch: {
        '$route'() {
            document.getElementById('hamburger').classList.remove('is-active')
            document.getElementById('mobile-nav').classList.remove('is-active')
            document.body.style.overflow = '';
        },
    },
}
</script>

<style scoped>

.header {
    padding: 2rem;
    background-color: #fff;
}

.upper-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.upper-header button {
    border: none;
    background-color: hsl(144deg 53% 53%);
    outline: none;
    color: #fff;
    cursor: pointer;
    padding: .75rem 1rem;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
    display: flex;
    gap: 5px;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar a::before {
    content: "";
    position: absolute;
    bottom: -2px;
    height: 3px;
    width: 0;
    background: #d3c077;
    border-radius: 50px;
    transition: width 0.3s ease;
}

.navbar a:hover::before {
    width: 100%;
}

.logo {
    max-width: 150px;
}

.nav-items a {
    position: relative;
    color: #000;
    text-decoration: none;
    margin: 0 10px;
}

.contact {
    display: flex;
    align-items: center;
    gap: 20px;
}

.contact h2 {
    color: #d3c077;
}

.hamburger {
    position: relative;
    display: none;
    width: 35px;
    cursor: pointer;
    z-index: 100;
    appearance: none;
    background: none;
    outline: none;
    border: none;
}

.hamburger .bar, .hamburger::after, .hamburger::before{
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: #555;
    margin: 6px 0;
    transition: .4s;
    z-index: 100;
}

.hamburger.is-active {
    position: fixed;
    right: 10px;
}

.hamburger.is-active::before {
    transform: rotate(-45deg) translate(-8px, 6px);
}

.hamburger.is-active .bar {
    opacity: 0;
}

.hamburger.is-active::after {
    transform: rotate(45deg) translate(-9px, -8px);
}

.mobile-nav {
    display: block;
    position: fixed;
    top: 0;
    right: 100%;
    width: 100%;
    min-height: 100vh;
    z-index: 98;
    background-color: #fff;
    padding: 100px 2rem 1rem;
    transition: .4s;
}

.mobile-nav.is-active {
    right: 0;
}

.mobile-nav a {
    display: block;
    padding: 12px 16px;
    width: fit-content;
    text-decoration: none;
    color: #000;
}

.mobile-nav a:hover {
    background-color: #ccc;
}

.mobile-nav .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 16px;
}

h1, h2, h3, h4, h5, h6 {
    color: #323232;
}

@media (max-width: 1188px) {
    .header {
        padding: 2rem 1rem;
    }

    .logo {
        max-width: 125px;
    }

    .contact h2 {
        font-size: 1rem;
    }
}

@media (max-width: 998px) {
    .nav-items {
        display: none;
    }

    #paragraph {
        display: none;
    }

    .hamburger {
        display: block;
    }
}

@media (max-width: 434px) {
    .header {
        padding: 2rem .5rem;
    }

    #email {
        display: none;
    }

    .logo {
        max-width: 85px;
    }

    .contact h2 {
        font-size: .75rem;
    }

    .mobile-nav {
        padding: 100px .5rem;
    }
}
</style>