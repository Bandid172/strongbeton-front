import { createStore } from "vuex";
import client from "@/plugins/client";
import feedback from "@/plugins/feedback";
import product from "@/plugins/product";

export default createStore({
    modules: {
        client,
        feedback,
        product
    }
})