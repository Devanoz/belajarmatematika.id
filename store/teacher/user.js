//state
export const state = () => ({

  //user
  user: {},

})

//mutations
export const mutations = {

  SET_USER_DATA (state, payload) {

    state.user = payload
  },

}

//actions
export const actions = {
  getDetailUser ({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      this.$axios.get(`/api/teacher/user`)

        //success
        .then(response => {

          //commit to mutation "SET_MATERI_DATA"
          commit('SET_USER_DATA', response.data.user)

          //resolve promise
          resolve()

        })

    })

  },

}
