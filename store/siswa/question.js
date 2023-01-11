//state
export const state = () => ({

  //topiks
  questions: [],

  //page
  page: 1,

})

export const mutations = {

  //mutation "SET_TOPIKS_DATA"
  SET_QUESTIONS_DATA (state, payload) {

    //set value state "topiks"
    state.questions = payload
  },

  //mutation "SET_PAGE"
  SET_PAGE (state, payload) {

    //set value state "page"
    state.page = payload
  },

}
//actions
export const actions = {

  //get materis data
  getQuestionsData ({
    commit,
    state
  }, payload) {

    //search
    let challenge_id = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/materis" with method "GET"
      this.$axios.get(`/api/student/questions?challenge_id=${challenge_id}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_MATERIS_DATA"
          commit('SET_QUESTIONS_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

  //store materis
  storeQuestion ({
    dispatch,
    commit
  }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/questions" with method "POST"
      this.$axios.post('/api/students/questions', payload)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"
          dispatch('getQuestionsData')

          //resolve promise
          resolve()

        })

        //error
        .catch(error => {
          reject(error)
        })

    })
  },

  submitAnswer ({
    dispatch,
    commit
  }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/student/submitAnswers" with method "POST"
      this.$axios.post('/api/student/submitAnswers', payload)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"
          // dispatch('getQuestionsData', payload.challenge_id)

          //resolve promise
          resolve()

        })

        //error
        .catch(error => {
          reject(error)
        })

    })
  },

  submitChallenge ({
    dispatch,
    commit
  }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/student/submitChallenges" with method "POST"
      this.$axios.post('/api/student/submitChallenges', payload)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"
          dispatch('getQuestionsData', payload)

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

