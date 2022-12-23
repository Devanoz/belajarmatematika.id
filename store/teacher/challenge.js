//state
export const state = () => ({

    //challenges
    challenges: [],

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

            //store to Rest API "/api/admin/categories" with method "POST"
            this.$axios.post('/api/teacher/challenges', payload)

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