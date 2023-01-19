<template>
  <div id="root" class="flex flex-col h-full relative">
    <div class="border-b-2 bg-white border-slate-200 py-5 sticky top-0 w-full flex items-center px-8">
      <div>
        <NuxtLink to="/siswa/video">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1 9L9 17" stroke="#56739D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </NuxtLink>
      </div>

      <div class="mx-auto flex justify-center items-center">
        <h1 class="text-2xl font-bold">
          Video Pembelajaran
        </h1>
      </div>
    </div>

    <div class="mt-4">
      <iframe
        height="250"
        class="w-full"
        :src="url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <h1 class="mt-2 ml-2 font-bold">{{comments.length}} Comments</h1>
    <div id="comment-list" class="h-[48vh] m-3 overflow-y-scroll rounded-xl">
      <div id="comment-container"  v-for="(comment,comment_idx) in comments" :id="comment.id">
        <div class="relative  card-image drop-shadow-lg border-b-2 mb-2 rounded-xl z-10 bg-white py-3 px-2 my-3 z-20" :id="comment.id">
          <div class="flex">
            <img v-if="!comment.student.image" src="~/assets/img/murid/profilepic/defaultUser.svg" class="w-10 h-10" alt="student image">
            <img v-if="comment.student.image" :src="comment.student.image" class="w-10 h-10 rounded-full" alt="student image">
            <div v-if="comment.student" id="student-detail" class="ml-3">
              <h1 class="font-bold"> {{ comment.student.name }} </h1>
              <span>{{ getCommentMoment(comment.updated_at) }}</span>
              <textarea @change="handleCommentChange($event.target.value)" :disabled="show[comment_idx]" class="w-64 card-image drop-shadow-lg bg-gray-200 border-b-2 z-10 mt-2 py-1 px-2 rounded-xl">{{ comment.title }}</textarea>
            </div>
            <div v-if="comment.student_id === getStudentId && show[comment_idx]" id="handle-change" class="absolute top-2 right-2 gap-2 flex flex-row justify-center items-center w-auto h-7 card-image drop-shadow-lg bg-gray-200 border-b-2 z-10 py-1 px-2 rounded-xl">
              <div @click="onEditClicked(comment.id,comment_idx)" class="text-yellow-500">edit</div> |
              <div @click="onDeleteClicked(comment.id)" class="text-red-500">delete</div>
            </div>
            <div v-if="comment.student_id === getStudentId && !show[comment_idx]" id="handle-change" class="absolute top-2 right-2 gap-2 flex flex-row justify-center items-center w-auto h-7 card-image drop-shadow-lg bg-gray-200 border-b-2 z-10 py-1 px-2 rounded-xl">
              <div @click="confirmEdit(comment.id)">Confirm</div>
            </div>

          </div>
          <div class="flex gap-5 mt-2">
            <div v-if="comment.reply_comments.length>0" class="ml-2" @click="onCommentToogleClicked(comment_idx)">^</div>
            <transition name="fade">
            <div v-if="showBalas[comment_idx]" @click="onBalas(comment_idx)" class="bg-blue-200 px-4 rounded-xl text-base">Balas</div>
            </transition>
          </div>
        </div>
<!--        reply comment input-->
        <transition name="fade">
        <div v-if="showReplyComment[comment_idx]"  class="bg-cs-blue-300 w-full p-4 pt-4 flex flex-row gap-4 justify-between">
          <label class="w-full">
            <input v-model="studentReplyComment" placeholder="Tambah Comment" class="w-full py-3 px-4 rounded-full" type="text">
          </label>
          <div class="flex flex-col justify-center">
            <div @click="onReplyCommentSendCanceled(comment_idx)" class="bg-yellow-300 h-10 w-auto px-2 rounded-xl font-bold flex flex-col justify-center items-center text-white"><span>Cancel</span></div>
          </div>
          <div  @click="onReplyCommentSend(comment.id,comment_idx)" id="send-button" class="flex flex-col justify-center">
            <svg width="35" height="35" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.91245 9.9998H3.00045L1.02345 2.1348C1.01079 2.0891 1.00308 2.04216 1.00045 1.9948C0.978447 1.2738 1.77245 0.773804 2.46045 1.1038L21.0004 9.9998L2.46045 18.8958C1.78045 19.2228 0.996447 18.7368 1.00045 18.0288C1.00247 17.9655 1.01359 17.9029 1.03345 17.8428L2.50045 12.9998" stroke="#56739D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        </transition>
        <transition name="fade">
          <div v-if="replyShow[comment_idx]">
            <div v-for="(reply,reply_index) in comment.reply_comments" class="ml-5 bg-gray-100 relative flex card-image drop-shadow-lg border-b-2 mb-2 rounded-xl z-10 bg-white py-3 px-2 my-3 z-20">
              <img v-if="reply.student_id?!reply.student.image:(reply.teacher_id)?true:false" src="~/assets/img/murid/profilepic/defaultUser.svg" class="w-10 h-10" alt="student image">
              <img v-if="reply.student_id?reply.student.image:false" :src="comment.student.image" class="w-10 h-10 rounded-full" alt="student image">
              <div v-if="comment.student" id="student-detail" class="ml-3">
                <h1 class="font-bold"> {{ reply.student_id?reply.student.name:reply.teacher.name }} </h1>
                <span>{{ getCommentMoment(reply.updated_at) }}</span>
                <textarea @change="handleReplyChange($event.target.value)" :disabled="replyShowList[comment_idx][reply_index]" class="w-64 card-image drop-shadow-lg bg-white border-b-2 z-10 mt-2 py-1 px-2 rounded-xl">{{ reply.title }}</textarea>
              </div>
              <div v-if="reply.student_id === getStudentId && replyShowList[comment_idx][reply_index]" id="handle-change" class="absolute top-2 right-2 gap-2 flex flex-row justify-center items-center w-auto h-7 card-image drop-shadow-lg bg-gray-200 border-b-2 z-10 py-1 px-2 rounded-xl">
                <div @click="onEditReplyClicked(reply.id,comment_idx,reply_index)" class="text-yellow-500">edit</div> |
                <div @click="onDeleteReplyClicked(reply.id)" class="text-red-500">delete</div>
              </div>
              <div v-if="reply.student_id === getStudentId && !replyShowList[comment_idx][reply_index]" id="handle-change" class="absolute top-2 right-2 gap-2 flex flex-row justify-center items-center w-auto h-7 card-image drop-shadow-lg bg-gray-200 border-b-2 z-10 py-1 px-2 rounded-xl">
                <div @click="confirmReplyEdit(reply.id,comment_idx)">Confirm</div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div v-if="showCommentSend && triggerComment" class="bg-cs-blue-300 w-full p-4 pt-4 flex flex-row gap-4 justify-between fixed bottom-0 z-30">
      <label class="w-full">
        <input v-model="studentComment" placeholder="Tambah Comment" class="w-full py-3 px-4 rounded-full" type="text">
      </label>
      <div class="flex flex-col justify-center">
        <div @click="onCommentSendCanceled" class="bg-yellow-300 h-10 w-auto px-2 rounded-xl font-bold flex flex-col justify-center items-center text-white"><span>Cancel</span></div>
      </div>
      <div  @click="onCommentSend" id="send-button" class="flex flex-col justify-center">
        <svg width="35" height="35" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.91245 9.9998H3.00045L1.02345 2.1348C1.01079 2.0891 1.00308 2.04216 1.00045 1.9948C0.978447 1.2738 1.77245 0.773804 2.46045 1.1038L21.0004 9.9998L2.46045 18.8958C1.78045 19.2228 0.996447 18.7368 1.00045 18.0288C1.00247 17.9655 1.01359 17.9029 1.03345 17.8428L2.50045 12.9998" stroke="#56739D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div v-if="!showCommentSend && !triggerComment" @click="toggleCommentSend" class="w-full p-4 pt-4 flex flex-row gap-4 justify-between fixed bottom-0 z-30 justify-center items-center">
      <div class="w-full h-10 bg-cs-blue-500 rounded-2xl flex flex-row justify-center items-center">
        <span class="font-bold text-white">Tambah comment</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Video',
  layout: 'default',
  middleware:'isStudent',
  data () {
    return {
      showCommentSend : false,

      clicked: false,
      url:"",
      studentComment:'',
      val: '~/assets/img/navbar/basic/peringkat.svg',
      comments: [],
      //comment condition
      commentDisabled: true,
      //show send
      show:[],
      commentVal : '',
      replyVal: '',
      //reply show
      replyShow: [],
      //reply show list
      replyShowList:[],
      showReplyComment: [],
      studentReplyComment:'',

      triggerComment: false,

      showBalas: []
    }
  },
  computed : {
    getStudentId () {
      return this.$store.getters['student/getStudent'].id
    },
  },
  async created () {
    if (!this.getStudentId) {
      await this.$store.dispatch('student/getStudentData')
    }
    const video_id = this.$route.query.id
    this.$axios.get(`/api/student/videos/${video_id}`).then((response) => {
      const video = response.data.data
      this.url = video.url
      this.comments = response.data.data.comments
      this.show = Array.from({length:this.comments.length},()=>true)
      this.replyShowList = Array.from({length:this.comments.length},()=>[true])
      this.replyShow = Array.from({length:this.comments.length},()=>false)
      this.showReplyComment = Array.from({length:this.comments.length},()=>false)
      this.showBalas = Array.from({length:this.comments.length},()=>true)
    })
  },
  methods: {
    onDeleteReplyClicked (reply_id) {
      this.$axios.delete(`/api/student/replyComments/${reply_id}`).then((response)=>{
        const video = response.data.data
        this.url = video.url
        this.comments = response.data.data.comments
        this.$forceUpdate()
      }).catch(()=>{
        this.$swal.fire({
          text: 'Gagal menghapus comment',
          icon: 'error',
          showConfirmButton: false,
          timer: 1000
        })
      })
    },
    onReplyCommentSend (comment_id,comment_idx) {
      const formData = new FormData()
      formData.append('comment_id',comment_id)
      formData.append('title',this.studentReplyComment)
      this.$axios.post(`/api/student/replyComments/`,formData).then((response)=>{
        const video = response.data.data
        this.url = video.url
        this.comments = response.data.data.comments
        this.studentComment = ''
        this.studentReplyComment = ''
        this.showReplyComment[comment_idx] = !this.showReplyComment[comment_idx]
        this.replyShow = Array.from({length:this.comments.length},()=>false)//
        this.$forceUpdate()
      }).catch((err)=>{
      })
      this.$forceUpdate()
    },
    onReplyCommentSendCanceled (comment_idx) {
      this.showReplyComment[comment_idx] = !this.showReplyComment[comment_idx]
      this.$forceUpdate()
    },
    onBalas (comment_idx) {
      this.triggerComment = !this.triggerComment
      this.showReplyComment[comment_idx] = !this.showReplyComment[comment_idx]
      this.$forceUpdate()
    },
    toggleCommentSend () {
      this.showBalas = Array.from({length:this.comments.length},()=>false)
      this.showCommentSend = !this.showCommentSend
      this.triggerComment = !this.triggerComment
      this.$forceUpdate()
    },
    onCommentSendCanceled () {
      this.showBalas = Array.from({length:this.comments.length},()=>true)
      this.showCommentSend = !this.showCommentSend
      this.triggerComment = !this.triggerComment
      this.$forceUpdate()
    },
    confirmReplyEdit (reply_id,comment_idx) {
      const formData = new FormData()
      formData.append('title', this.replyVal)
      formData.append('_method', 'PATCH')
      this.$axios.post(`/api/student/replyComments/${reply_id}`,formData).then((response)=>{
        const video = response.data.data
        this.url = video.url
        this.comments = response.data.data.comments
        this.show = Array.from({length:this.comments.length},()=>true)
        this.replyShowList[comment_idx] = this.replyShowList[comment_idx].map(()=>{return true})
        this.$forceUpdate()
      }).catch((eror)=>{
        console.log(eror)
        this.$swal.fire({
          text : 'gagal edit comment',
          icon : 'error',
          showConfirmButton : false,
          timer: 1000
        })
      })
    },
    onCommentToogleClicked (comment_idx) {
      this.replyShow[comment_idx] = !this.replyShow[comment_idx]
      this.replyShowList[comment_idx] = Array.from({length:this.comments[comment_idx].reply_comments.length},()=>true)
      this.$forceUpdate()
    },
    onEditReplyClicked (reply_id,comment_idx,reply_index) {
      console.log(this.replyShowList)
      this.replyShowList[comment_idx] = this.replyShowList[comment_idx].map((reply,index)=>{
        if(reply_index === index){
          return !reply
        }
        return reply
      })
      console.log(this.replyShowList)
      this.$forceUpdate()
    },
    doClick () {
      this.clicked = !this.clicked
    },
    getCommentMoment(comment_moment) {
      return moment(comment_moment,"YYYY-MM-DD hh:mm:ss","id").fromNow()
    },
    getColor () {
      return (this.clicked) ? 'red' : ''
    },
    onCommentSend () {
      const video_id = this.$route.query.id
      const formData = new FormData()
      formData.append('video_id',video_id)
      formData.append('title',this.studentComment)
      this.$axios.post('/api/student/comments',formData).then((response)=>{
        const video = response.data.data
        this.url = video.url
        this.comments = response.data.data.comments
        this.show = Array.from({length:this.comments.length},()=>true)
        this.showBalas = Array.from({length:this.comments.length},()=>true)
        this.studentComment = ''
        this.$forceUpdate()
      })
      this.showCommentSend = !this.showCommentSend
      this.triggerComment = !this.triggerComment
      this.showBalas = Array.from({length:this.comments.length},()=>true)
    },
    confirmEdit (comment_id) {
      const formData = new FormData()
      formData.append('title', this.commentVal)
      formData.append('_method', 'PATCH')
      this.$axios.post(`/api/student/comments/${comment_id}`,formData).then((response)=>{
        const video = response.data.data
        this.url = video.url
        this.comments = response.data.data.comments
        this.show = Array.from({length:this.comments.length},()=>true)
        this.$forceUpdate()
      }).catch(()=>{
        this.$swal.fire({
          text : 'gagal edit comment',
          icon : 'error',
          showConfirmButton : false,
          timer: 1000
        })
      })
    },
    handleCommentChange (comment_value) {
      this.commentVal = comment_value
    },
    handleReplyChange (reply_value) {
      this.replyVal = reply_value
    },
    onEditClicked (comment_id,comment_idx) {
      this.show = this.show.map((val,idx)=>{
        if(comment_idx === idx){
          return !val
        }else {
          return val
        }
      })
      this.$forceUpdate()
    },
    onDeleteClicked (comment_id) {
      this.$axios.delete(`/api/student/comments/${comment_id}`).then((response)=>{
        const video = response.data.data
        this.url = video.url
        this.comments = response.data.data.comments
        this.$forceUpdate()
      }).catch(()=>{
        this.$swal.fire({
          text: 'Gagal menghapus comment',
          icon: 'error',
          showConfirmButton: false,
          timer: 1000
        })
      })
    }
  }
}
</script>

<style>
#root{
  width: inherit;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
