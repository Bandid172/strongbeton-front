import axios from "axios";

export default {
    actions: {
        fetchFeedbacks(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/feedback')
                    .then((response) => {

                        let feedback = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }

                        context.commit('updateFeedback',feedback)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        },
    },

    mutations: {
        updateFeedback(state, feedback) {
            state.feedback = feedback
        }
    },

    state: {
        feedback: {
            models: [],
            totalItems: 0,
        }
    },

    getters: {
        getFeedbacks(state) {
            return state.feedback.models
        }
    }
}