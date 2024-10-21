const state = {
    user: null,
    status: ''
};

const actions = {
    async login({ commit }, { username, password }) {
        try {
            const response = await fetch('API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();

            if (response.ok) {
                commit('setUser', data.user);
                commit('setStatus', 'success');
            } else {
                commit('setStatus', 'error');
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },
    logout({ commit }) {
        commit('setUser', null);
        commit('setStatus', '');
    }
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setStatus(state, status) {
        state.status = status;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};