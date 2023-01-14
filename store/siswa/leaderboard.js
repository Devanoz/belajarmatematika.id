//state
export const state = () => ({

  //topiks
  students: [],

  //page
  page: 1,

})

export const mutations = {

  //mutation "SET_TOPIKS_DATA"
  SET_STUDENTS_DATA(state, payload) {

    //set value state "topiks"
    state.students = payload
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
  getStudentsData({ commit, state }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/materis" with method "GET"
      this.$axios.get(`/api/student/scoreboards`)

        //success
        .then((response) => {

          //commit ti mutation "SET_MATERIS_DATA"
          commit('SET_STUDENTS_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

  //store materis
  storeStudent({ dispatch, commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/categories" with method "POST"
      this.$axios.post('/api/siswa/videos', payload)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"
          dispatch('getStudentsData')

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

export const getters = {
  getStudentList (state) {
    return state.students
  }
}

