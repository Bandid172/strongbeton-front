import axios from "axios";

export default {
    actions: {
        fetchProducts(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/products')
                    .then((response) => {

                        let products = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateProducts', products)

                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        },

        fetchProduct(context,productId) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/products/' + productId)
                    .then((response) => {
                        console.log(response)

                        let product = {
                            name: response.data.name,
                            price: response.data.price,
                            picture: response.data.picture.contentUrl,
                            text: response.data.text,
                            strength: response.data.strength,
                            density: response.data.density,
                            freezeResistance: response.data.freezeResistance,
                            consistency: response.data.consistency,
                            waterproofingCapacity: response.data.waterproofingCapacity,
                            gost: response.data.gost,
                            requiredMaterials: response.data.requiredMaterials,
                            reccomendations: response.data.reccomendations
                        }

                        context.commit('updateProduct', product)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateProducts(state, products) {
            state.products = products
        },

        updateProduct(state, product) {
            state.product = product
        }
    },

    state: {
        products: {
            models: [],
            totalItems: 0
        },
        product: {
            name: '',
            price: '',
            picture: '',
            text: '',
            strength: '',
            density: '',
            freezeResistance: '',
            consistency: '',
            waterproofingCapacity: '',
            gost: '',
            requiredMaterials: [],
            reccomendations: []
        }
    },

    getters: {
        getProducts(state) {
            return state.products.models
        },

        getProduct(state) {
            return state.product
        }
    }
}
