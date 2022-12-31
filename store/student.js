export const state =()=>({
  name:"",
  email:"",
  image:"",
  score:"",
})


export const mutations ={

    SET_STUDENT_DATA(state, payload) {
      //set value state "topiks"
      state.name = payload.name
      state.email = payload.email
      state.image = payload.image
      state.score = payload.score
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
      name: state.name,
      email:state.email,
      image:state.image,
      score:state.score,
    })
  }
}
