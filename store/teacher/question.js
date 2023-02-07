//state
export const state = () => ({

  //questions
  questions: [],

  //page
  page: 1,

})

//mutations
export const mutations = {

  //mutation "SET_QUESTIONS_DATA"
  SET_QUESTIONS_DATA (state, payload) {

    //set value state "questions"
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

  //get questions data
  getQuestionsData ({
    commit,
    state
  }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/questions" with method "GET"
      this.$axios.get(`/api/teacher/questions?challenge_id=${search}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_QUESTIONS_DATA"
          commit('SET_QUESTIONS_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

  //store questions
  storeMateri ({
    dispatch,
    commit
  }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/questions" with method "POST"
      this.$axios.post('/api/teacher/questions', payload)

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

  destroyCategory ({
    dispatch,
    commit
  }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //delete to Rest API "/api/admin/categories/:id" with method "DELETE"
      this.$axios.delete(`/api/teacher/questions/${payload}`)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"

          //resolve promise
          resolve()

        })

    })

  }

}
