//state
export const state = () => ({

    //materis
    materis: [],

    //page
    page: 1,

})

//mutations
export const mutations = {

    //mutation "SET_MATERIS_DATA"
    SET_MATERIS_DATA(state, payload) {

        //set value state "materis"
        state.materis = payload
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
    getMaterisData({ commit, state }, payload) {

        //search
        let search = payload ? payload : ''

        //set promise
        return new Promise((resolve, reject) => {

            //fetching Rest API "/api/admin/materis" with method "GET"
            this.$axios.get(`/api/teacher/materis?q=${search}&page=${state.page}`)

            //success
            .then((response) => {

                //commit ti mutation "SET_MATERIS_DATA"
                commit('SET_MATERIS_DATA', response.data.data)

                //resolve promise
                resolve()
            })

        })

    },

    //store materis
    storeMateri({ dispatch, commit }, payload) {

        //set promise
        return new Promise((resolve, reject) => {

            //store to Rest API "/api/admin/categories" with method "POST"
            this.$axios.post('/api/teacher/materis', payload)

            //success
            .then(() => {

                //dispatch action "getCategoriesData"
                dispatch('getMaterisData')

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
