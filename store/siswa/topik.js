//state
export const state = () => ({

  //topiks
  topiks: [],

  //page
  page: 1,

})

//mutations
export const mutations = {

  //mutation "SET_TOPIKS_DATA"
  SET_TOPIKS_DATA (state, payload) {

    //set value state "topiks"
    state.topiks = payload
  },

  //mutation "SET_PAGE"
  SET_PAGE (state, payload) {

    //set value state "page"
    state.page = payload
  },

}

//actions
export const actions = {

  //get topiks data
  getTopiksData ({
    commit,
    state
  }, payload) {

    //search
    let search = payload ? payload.search : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/topiks" with method "GET"
      this.$axios.get(`/api/student/topiks?q=${search}&page=${state.page}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_TOPIKS_DATA"
          commit('SET_TOPIKS_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

}
