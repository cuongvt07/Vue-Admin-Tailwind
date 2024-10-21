import { createStore } from 'vuex';
import Auth from './modules/Auth';

const store = createStore({
    modules: {
        Auth
    }
});

export default store;