import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      userCart: [],
    };
  },
  mutations: {
    updateUserCart(state, payload) {
      state.userCart = payload;
    },
  },
  actions: {
    fetchUserCart(context) {
      axios.get("http://localhost:8000/api/userCart")
        .then(response => {
            console.log(response.data.data);
            context.commit('updateUserCart', response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  getters: {
    userCart: state => state.userCart,
  },
});

export default store;
