//state
export const state = () => ({

  //clases
  clases: [],

  //page
  page: 1,

})

//mutations
export const mutations = {

  //mutation "SET_CLASES_DATA"
  SET_CLASES_DATA (state, payload) {

    //set value state "clases"
    state.clases = payload
  },

  //mutation "SET_PAGE"
  SET_PAGE (state, payload) {

    //set value state "page"
    state.page = payload
  },

}

//actions
export const actions = {

  //get clases data
  getClasesData ({
    commit,
    state
  }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/clases" with method "GET"
      this.$axios.get(`/api/student/kelas?q=${search}&page=${state.page}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_CLASES_DATA"
          commit('SET_CLASES_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

}
