import axios from "axios";

export default {
    actions: {
        pushClient(context, clientData,) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/clients', clientData, {
                        headers: {
                            'Content-Type': 'application/ld+json'
                        }
                    })
                    .then(() => {
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    }
}