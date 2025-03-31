import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: 'John Doe',
        age: 30,
      },
      mutations: {
        updateName(state, newName) {
          state.name = newName;
        }
      },
      actions: {
        asyncUpdateName({ commit }, newName) {
          setTimeout(() => {
            commit('updateName', newName);
          }, 1000);
        }
      },
      getters: {
        userInfo(state) {
          return `${state.name}, Age: ${state.age}`;
        }
      }
  
});
