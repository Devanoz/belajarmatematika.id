//state
export const state = () => ({

  //topiks
  videos: [],

  //last played url
  currentVideos:null,
  //page
  page: 1,

})

export const mutations = {

  //mutation "SET_TOPIKS_DATA"
  SET_VIDEOS_DATA(state, payload) {

    //set value state "topiks"
    state.videos = payload.videos
    state.currentVideos = payload.currentVideos
  },
  SET_VIDES_FOR_SEARCHING(state, payload){
    state.videos = payload.videos
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
  getVideosData({ commit, state }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/materis" with method "GET"
      this.$axios.get(`/api/student/videos?title=${search}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_MATERIS_DATA"
          commit('SET_VIDEOS_DATA', response.data.data)

          //resolve promise
          resolve(response.data.data)
        })

    })

  },

  getVideosDataFilteredByTitle({ commit, state }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/materis" with method "GET"
      this.$axios.get(`/api/student/videos?title=${search}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_MATERIS_DATA"
          commit('SET_VIDES_FOR_SEARCHING', response.data.data)

          //resolve promise
          resolve(response.data.data)
        })

    })

  },

  //store materis
  storeVideo({ dispatch, commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/categories" with method "POST"
      this.$axios.post('/api/siswa/videos', payload)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"
          dispatch('getVideosData')

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

