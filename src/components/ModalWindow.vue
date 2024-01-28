<template>
    <div class="success-message" id="success-message">
        <p>Application Submitted Successfully</p>
    </div>
    <div class="modal" v-if="isActive">
        <div class="modal-dialog">
            <div class="modal-content">
                <span class="close" @click="DisActivateModalWindow">&times;</span>
                <slot>
                    <form @submit.prevent="submitApplication">
                        <label for="name">Name<span>*</span></label>
                        <input v-model="formData.name" id="name" type="text" required placeholder="John Doe" />
                        <label for="phoneNumber">Number<span>*</span></label>
                        <input v-model="formData.phoneNumber" id="phoneNumber" type="text" required placeholder="+9989 77 777 77 77" />
                        <button>Submit Application</button>
                    </form>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "ModalWindow",

    data() {
        return {
            formData: {
                name: '',
                phoneNumber: ''
            }
        }
    },

    emits: ['unSetIsActive'],

    methods: {
        DisActivateModalWindow() {
            this.$emit('unSetIsActive');
            document.body.style.overflow = '';
        },

        ...mapActions(['pushClient']),

        submitApplication() {
            this.pushClient(this.formData)
                .then(() => {
                    this.formData.name = ''
                    this.formData.phoneNumber = ''
                    this.DisActivateModalWindow()
                })
                .finally(() => {
                    document.getElementById('success-message').style.display = 'flex'

                    setTimeout(() => {
                        document.getElementById('success-message').style.display = 'none'
                    },2000)
                })
        }
    },

    props: {
        isActive: Boolean
    }
}
</script>

<style scoped>
.success-message {
    position: fixed;
    top: 5%;
    left: 50%;
    display: none;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: #5cb85c;
    color: #fff;
    text-align: center;
    width: 400px;
    height: 50px;
    z-index: 101;
    transform: translate(-50%);
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
}

.modal-dialog {
    max-width: 80%;
}

.modal-content form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 3rem;
}

.modal-content form input {
    border: 1px solid #D9D9D9;
    color: #000;
    font-family: 'Poppins',sans-serif;
    height: 36px;
    border-radius: 6px;
    outline: none;
    padding: .75rem;
    margin-bottom: 10px;
}

.modal-content form label {
    font-family: 'Poppins', sans-serif;
    color: rgba(68, 65, 80, 1);
    margin-bottom: 10px;
}

.modal-conform form label span {
    color: rgba(16, 156, 241, 1);
}

.modal-content form button {
    background-color: rgba(16, 156, 241, 1);
    font-family: 'Poppins', sans-serif;
    border-radius: 4px;
    width: 100%;
    padding: .75rem 1.5rem;
    margin-top: 10px;
    color: #ffffff;
    outline: none;
    border: none;
    align-self: center;
    cursor: pointer;
}

.modal-content form input:focus {
    background-color: rgba(16, 156, 241, 0.16);
    border: 1px solid #109CF1;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    position: relative;
}

.close {
    position: absolute;
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

</style>
