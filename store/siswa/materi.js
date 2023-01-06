//state
export const state = () => ({

    //materis
    materis: [],

    materisWithTopik:[],

    materi:{},

    //page
    page: 1,

})

//mutations
export const mutations = {

    //mutation "SET_MATERIS_DATA"
    SET_MATERIS_DATA(state, payload) {

        //set value state "materis"
        state.materis = payload
    },

    SET_MATERIS_WITH_TOPIK_DATA(state,payload){
        state.materisWithTopik = payload
    },

    SET_MATERI_DATA(state, payload){
      state.materi = payload
    },

    //mutation "SET_PAGE"
    SET_PAGE(state, payload) {

        //set value state "page"
        state.page = payload
    },

}

//actions
export const actions = {


  //get materis data
  getMaterisWithTopikData({ commit, state }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/materis" with method "GET"
      this.$axios.get(`/api/student/topiksWithMateris`)

        //success
        .then((response) => {

          //commit ti mutation "SET_MATERIS_DATA"
          commit('SET_MATERIS_WITH_TOPIK_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },


  //update materi
  updateMateri({ dispatch, commit }, { materiId, payload }) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/student/materis/:id" with method "POST"
      this.$axios.post(`/api/student/materis/${materiId}`, payload)

        //success
        .then(() => {

          //dispatch action "getChallengesData"
          dispatch('getMaterisData')

          //resolve promise
          resolve()

        })

        //error
        .catch(error => {
          reject(error)
        })

    })
  },

    //get materis data
    getMaterisData({ commit, state }, payload) {

        //search
        let search = payload ? payload : ''

        //set promise
        return new Promise((resolve, reject) => {

            //fetching Rest API "/api/admin/materis" with method "GET"
            this.$axios.get(`/api/student/materis?q=${search}&page=${state.page}`)

            //success
            .then((response) => {

                //commit ti mutation "SET_MATERIS_DATA"
                commit('SET_MATERIS_DATA', response.data.data)

                //resolve promise
                resolve()
            })

        })

    },

  getDetailMateri({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //get to Rest API "/api/student/materis/:id" with method "GET"
      this.$axios.get(`/api/student/materis/${payload}`)

        //success
        .then(response => {

          //commit to mutation "SET_MATERI_DATA"
          commit('SET_MATERI_DATA', response.data.data)

          //resolve promise
          resolve()

        })

    })

  },


    //store materis
    storeMateri({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/categories" with method "POST"
            this.$axios.post('/api/student/materis', payload)

            //success
            .then(() => {

                //dispatch action "getCategoriesData"
                dispatch('getMaterisData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },

}
