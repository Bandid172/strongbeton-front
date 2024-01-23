<template>
    <footer class="footer">
        <div class="upper__footer">
            <section class="credentials">
                <img src="../assets/images/SB-logo.png" />
                <p><strong>Address: </strong>I.Karimov st 21, Termez, Surkhandarya 190100</p>
                <p><strong>Mail: </strong>info@strongbeton.uz</p>
                <div class="social__links">
                    <a href="https://www.facebook.com/strong.beton/">
                        <img src="../assets/images/facebook.png" alt="facebook-logo" />
                    </a>
                    <a href="https://www.instagram.com/strongbeton.uz/">
                        <img src="../assets/images/instagram.png" alt="instagram-logo" />
                    </a>
                    <a href="https://t.me/Strongbeton">
                        <img src="../assets/images/telegram.png" alt="telegram-logo" />
                    </a>
                </div>
                <p><strong>Contact number: </strong> +998 (93) 790 01 10</p>
            </section>
            <section class="application__submit">
                <h2>Submit application</h2>
                <form class="application-form" @submit="handleFormSubmit">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" v-model="formData.name" required>
                    <p class="danger" v-if="nameIsEmpty">Name is required</p>
                    <label for="phoneNumber">Your Phone Number</label>
                    <input type="text" id="phoneNumber" v-model="formData.phoneNumber" required>
                    <p class="danger" v-if="phoneNumberIsEmpty">Phone number is required</p>
                    <button id="btnSubmit" @click="handleSubmit">Submit</button>
                </form>
            </section>
        </div>
        <div class="lower__footer">
            <h3>Copyright © StrongBeton 2023 </h3>
        </div>
    </footer>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "FooterRow",
    data() {
        return {
            nameIsEmpty: false,
            phoneNumberIsEmpty: false,
            formData: {
                name: null,
                phoneNumber: null
            }
        }
    },
    methods: {
        ...mapActions(['pushClient']),

        handleFormSubmit() {
            this.pushClient(this.formData)
        },

        handleSubmit()
        {
            const input1 = document.getElementById('name')
            const input2 = document.getElementById('phoneNumber')
            const submitBtn = document.getElementById('btnSubmit')

            if(input1.value == 0) {
                this.nameIsEmpty = true
            } else {
                this.nameIsEmpty = false
            }

            if(input2.value == 0) {
                this.phoneNumberIsEmpty = true
            } else {
                this.phoneNumberIsEmpty = false
            }

            if(input1.value == 0 || input2.value == 0) {
                submitBtn.classList.add('button-shake')
            }

            setTimeout(function() {
                submitBtn.classList.remove('button-shake');
            }, 500);
        },
    }
}
</script>

<style scoped>

.upper__footer {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 2rem;
    background-color: #3E3E3E;
    color: #fff;
}

.credentials img {
    margin-bottom: 1rem;
    max-width: 150px;
}

.credentials p {
    margin-bottom: .5rem;
}

.social__links {
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
    gap: 20px;
}

.social__links a img {
    max-width: 35px;
}

.application__submit h2 {
    font-weight: 700;
    margin-bottom: 2rem;
}

.application-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.application-form input {
    border: none;
    outline: none;
    border-radius: 5px;
    background: #D9D9D9;
    width: 100%;
    padding: .5rem 1rem;
    margin: .75rem 0;
}

.application-form input:focus {
    background-color: rgba(16, 156, 241, 0.16);
    border: 1px solid #109CF1;
    color: #FFFFFF;
}

.application-form button {
    align-self: flex-start;
    border-radius: 7px;
    background: #EA7E15;
    color: #fff;
    border: none;
    outline: none;
    width: 100%;
    padding: .5rem 1.75rem;
    cursor: pointer;
}

.button-shake {
    animation: shake 0.5s;
    animation-iteration-count: 1;
}

@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px);
    }
    50% {
        transform: translateX(5px);
    }
    75% {
        transform: translateX(-5px);
    }
}

.danger {
    color: red;
    margin-bottom: 10px;
}

.lower__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem 2rem;
    background: radial-gradient(50% 50% at 50% 50%, #E88412 0%, #E9721A 100%);
}

.lower__footer::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 60px;
    display: block;
    width: 100%;
    height: 10px;
    background: radial-gradient(50% 50% at 50% 50%, #FFF 0%, #B7B7B7 100%);
}

@media (max-width: 874px) {
    .upper__footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
        padding: 1rem;
    }

    .lower__footer {
        padding: 1rem .5rem;
    }

    .lower__footer h3 {
        font-size: 16px;
    }

    .application__submit {
        align-self: flex-end;
    }


}

</style>