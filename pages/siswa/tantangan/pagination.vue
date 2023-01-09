<template>
  <div class="card text-center m-3">
    <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3>
    <div class="card-body">
      <div v-for="item in pageOfItems" :key="item.id">{{ item.title }}</div>
    </div>
    <div class="card-footer pb-0 pt-3">
      <!--      <jw-pagination :items="exampleItems" @changePage="onChangePage" :labels="defaultLabels" :styles="defaultStyles"-->
      <!--      ></jw-pagination>-->
      <pagination :items="exampleItems" :initial-page="1" :page-size="2" @changePage="onChangePage"/>
    </div>
  </div>
</template>

<script>
// an example array of items to be paged
const exampleItems = [...Array(20).keys()].map(i => ({
  id: (i + 1),
  name: 'Item ' + (i + 1)
}))

export default {
  data () {
    return {
      exampleItems,
      pageOfItems: [],
      defaultLabels: {
        first: '<<',
        last: '>>',
        previous: '<',
        next: '>'
      },

      defaultStyles: {
        ul: {
          border: '2px solid red'
        },
        li: {
          display: 'inline-block',
          border: '2px dotted green'
        },
        a: {
          color: 'blue'
        }
      }
    }
  },

  mounted () {
    console.log(this.exampleItems)
  },
  methods: {
    onChangePage (pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
    }
  }
}
</script>
