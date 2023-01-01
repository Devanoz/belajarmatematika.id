//state
export const state = () => ({

    //challenges
    challenges: [],

    challenge:{},

    //page
    page: 1,

})

//mutations
export const mutations = {

    //mutation "SET_CHALLENGES_DATA"
    SET_CHALLENGES_DATA(state, payload) {
        //set value state "challenges"
        state.challenges = payload
    },

    SET_CHALLENGE_DATA(state, payload){
        state.challenge = payload
    },

    //mutation "SET_PAGE"
    SET_PAGE(state, payload) {

        //set value state "page"
        state.page = payload
    },

}

//actions
export const actions = {

    //get challenges data
    getChallengesData({ commit, state }, payload) {

        //search
        let search = payload ? payload : ''

        //set promise
        return new Promise((resolve, reject) => {

            //fetching Rest API "/api/admin/challenges" with method "GET"
            this.$axios.get(`/api/teacher/challenges?q=${search}&page=${state.page}`)

            //success
            .then((response) => {

                //commit ti mutation "SET_CHALLENGES_DATA"
                commit('SET_CHALLENGES_DATA', response.data.data)

                //resolve promise
                resolve()
            })

        })

    },

     //get challenges data
     getChallengesWithMateriData({ commit, state }, payload) {

        //search
        let search = payload ? payload : ''

        //set promise
        return new Promise((resolve, reject) => {

            //fetching Rest API "/api/admin/challenges" with method "GET"
            this.$axios.get(`/api/teacher/challengesWithMateri`)

            //success
            .then((response) => {

                //commit ti mutation "SET_CHALLENGES_DATA"
                commit('SET_CHALLENGES_DATA', response.data.data)

                //resolve promise
                resolve()
            })

        })

    },

    //store challenges
    storeChallenge({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/challenges" with method "POST"
            this.$axios.post('/api/teacher/challenges', payload)

            //success
            .then(() => {

                //dispatch action "getChallengesData"
                dispatch('getChallengesData')

                //resolve promise
                resolve()

            })

            //error
            .catch(error => {
                reject(error)
            })

        })
    },


  //get detail challenge
  getDetailChallenge({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //get to Rest API "/api/teacher/challenges/:id" with method "GET"
      this.$axios.get(`/api/teacher/challenges/${payload}`)

        //success
        .then(response => {

          //commit to mutation "SET_CHALLENGE_DATA"
          commit('SET_CHALLENGE_DATA', response.data.data)

          //resolve promise
          resolve()

        })

    })

  },


  //update challenge
  updateChallenge({ dispatch, commit }, { challengeId, payload }) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/teacher/challenges/:id" with method "POST"
      this.$axios.post(`/api/teacher/challenges/${challengeId}`, payload)

        //success
        .then(() => {

          //dispatch action "getChallengesData"
          dispatch('getChallengesData')

          //resolve promise
          resolve()

        })

        //error
        .catch(error => {
          reject(error)
        })

    })
  },


  //destroy challenge
  destroyChallenge({ dispatch, commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //delete to Rest API "/api/teacher/challenges/:id" with method "DELETE"
      this.$axios.delete(`/api/teacher/challenges/${payload}`)

        //success
        .then(() => {

          //dispatch action "getChallengesData"
          dispatch('getChallengesData')

          //resolve promise
          resolve()

        })

    })

  },

}
