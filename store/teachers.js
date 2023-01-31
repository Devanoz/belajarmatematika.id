export const state =()=>({
  id:0,
  name:"",
  email:"",
  image:"",
})


export const mutations ={

  SET_TEACHER_DATA(state, payload) {
    state.id = payload.id
    state.name = payload.name
    state.email = payload.email
    state.image = payload.image
  },
}

export const actions = {
  getTeacherData({ commit, state }, student_id) {

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/topiks" with method "GET"
      this.$axios.get(`/api/teacher/user`)

        //success
        .then((response) => {
          //commit ti mutation "SET_TOPIKS_DATA"
          commit('SET_TEACHER_DATA', response.data.user)

          //resolve promise
          resolve(response.data.user)
        })

    })
  },
}

export const getters = {
  getTeacher (state) {
    return ({
      id: state.id,
      name: state.name,
      email: state.email,
      image: state.image,
    })
  }
}
