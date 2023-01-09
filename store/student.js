export const state =()=>({
  id:0,
  name:"",
  email:"",
  image:"",
  score:"",
  rank:0,
  progress:0.0
})


export const mutations ={

    SET_STUDENT_DATA(state, payload) {
      //set value state "topiks"
      state.id = payload.id
      state.name = payload.name
      state.email = payload.email
      state.image = payload.image
      state.score = payload.score
      state.rank = payload.rank
      state.progress = payload.progress
    },
}

export const actions = {
    getStudentData({ commit, state }, student_id) {

      //set promise
      return new Promise((resolve, reject) => {

        //fetching Rest API "/api/admin/topiks" with method "GET"
        this.$axios.get(`/api/student/user`)

          //success
          .then((response) => {
            //commit ti mutation "SET_TOPIKS_DATA"
            commit('SET_STUDENT_DATA', response.data.user)

            //resolve promise
            resolve()
          })

      })
    },
}

export const getters = {
  getStudent (state) {
    return ({
      id: state.id,
      name: state.name,
      email: state.email,
      image: state.image,
      score: state.score,
      rank: state.rank,
      progress: state.progress
    })
  }
}
