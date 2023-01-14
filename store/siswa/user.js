//state
export const state = () => ({

  user: {},

  //page
  page: 1,

})

//mutations
export const mutations = {

  SET_USER_DATA (state, payload) {
    state.user = payload
  },

  //mutation "SET_PAGE"
  SET_PAGE (state, payload) {

    //set value state "page"
    state.page = payload
  },

}

//actions
export const actions = {

  getDetailUser ({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //get to Rest API "/api/student/users/:id" with method "GET"
      this.$axios.get(`/api/student/user`)

        //success
        .then(response => {

          //commit to mutation "SET_USER_DATA"
          commit('SET_USER_DATA', response.data.data)

          //resolve promise
          resolve()

        })

    })

  },

}
