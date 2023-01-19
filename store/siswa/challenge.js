//state
export const state = () => ({

  //challenges
  challenges: [],

  challengesWithTopik: [],

  doneChallenges: [],

  challenge: {},

  //page
  page: 1,

})

//mutations
export const mutations = {

  //mutation "SET_CHALLENGES_DATA"
  SET_CHALLENGES_DATA (state, payload) {

    //set value state "challenges"
    state.challenges = payload
  },

  SET_DONE_CHALLENGES_DATA (state, payload) {

    //set value state "challenges"
    state.doneChallenges = payload
  },

  SET_CHALLENGES_WITH_TOPIK_DATA (state, payload) {
    state.challengesWithTopik = payload
  },

  SET_CHALLENGE_DATA (state, payload) {
    state.challenge = payload
  },

  //mutation "SET_PAGE"
  SET_PAGE (state, payload) {

    //set value state "page"
    state.page = payload
  },

}

//actions
export const actions = {

  //get challenges data
  getChallengesWithTopikData ({
    commit,
    state
  }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/challenges" with method "GET"
      this.$axios.get(`/api/student/topiksWithChallenges`)

        //success
        .then((response) => {

          //commit ti mutation "SET_CHALLENGES_DATA"
          commit('SET_CHALLENGES_WITH_TOPIK_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

  //update challenge
  updateChallenge ({
    dispatch,
    commit
  }, {
    challengeId,
    payload
  }) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/student/challenges/:id" with method "POST"
      this.$axios.post(`/api/student/challenges/${challengeId}`, payload)

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

  //get challenges data
  getChallengesData ({
    commit,
    state
  }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/challenges" with method "GET"
      this.$axios.get(`/api/student/challenges?title=${search}&page=${state.page}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_CHALLENGES_DATA"
          commit('SET_CHALLENGES_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

  getChallengesDoneData ({
    commit,
    state
  }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/challenges" with method "GET"
      this.$axios.get(`/api/student/challenges?q=${search}&page=${state.page}&done=true`)

        //success
        .then((response) => {

          //commit ti mutation "SET_CHALLENGES_DATA"
          commit('SET_DONE_CHALLENGES_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

  getDetailChallenge ({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //get to Rest API "/api/student/challenges/:id" with method "GET"
      this.$axios.get(`/api/student/challenges/${payload}`)

        //success
        .then(response => {

          //commit to mutation "SET_CHALLENGE_DATA"
          commit('SET_CHALLENGE_DATA', response.data.data)

          //resolve promise
          resolve()

        })

    })

  },

  //store challenges
  storeChallenge ({
    dispatch,
    commit
  }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/categories" with method "POST"
      this.$axios.post('/api/student/challenges', payload)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"
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

}
