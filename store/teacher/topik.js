//state
export const state = () => ({

    //topiks
    topiks: [],

    //page
    page: 1,

})

//mutations
export const mutations = {

    //mutation "SET_TOPIKS_DATA"
    SET_TOPIKS_DATA(state, payload) {

        //set value state "topiks"
        state.topiks = payload
    },

    //mutation "SET_PAGE"
    SET_PAGE(state, payload) {

        //set value state "page"
        state.page = payload
    },

}

//actions
export const actions = {

    //get topiks data
    getTopiksData({ commit, state }, payload) {

        //search
        let search = payload ? payload : ''

        //set promise
        return new Promise((resolve, reject) => {

            //fetching Rest API "/api/admin/topiks" with method "GET"
            this.$axios.get(`/api/teacher/topiks?q=${search}&page=${state.page}`)
            
            //success
            .then((response) => {

                //commit ti mutation "SET_TOPIKS_DATA"
                commit('SET_TOPIKS_DATA', response.data.data)

                //resolve promise
                resolve()
            })

        })

    },

    //store topiks
    storeTopik({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/categories" with method "POST"
            this.$axios.post('/api/teacher/topiks', payload)

            //success
            .then(() => {

                //dispatch action "getCategoriesData"
                dispatch('getTopiksData')

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