<template>
  <div class="flex flex-col h-full px-4 py-4 bg-[#F6F8FF]">
    <div class="header">
      <h2 class="text-center text-2xl font-semibold">
        {{ challenge.title }}
      </h2>
      <hr class=" mt-3">
    </div>
    <div id=""
         class="text-[#56739D] w-[5.625rem] h-[2.25rem] bg-[#DAE5FF] mx-auto absolute top-20 left-0 right-0 rounded-2xl flex flex-col justify-center z-20 text-center"
    >
      <div>{{ page }}/{{ maxPage }}</div>
    </div>

    <div id="quiz-content" class="w-full h-full pt-3 mb-3">
      <div id="quiz-detail"
           class="py-5 flex flex-col justify-center items-center w-full h-auto bg-white rounded-2xl mt-5 relative min-h-[11.063rem] max-h-[18.625rem]"
      >

        <div v-for="item in questions" :key="item.id">
          <img v-if="item.image != null" class="w-[11.938rem] h-[8.313rem]"
               :src="item.image"
               alt
          />
          <p class="text-center">
            {{ item.title }}

          </p>


        </div>

      </div>
      <div id="poin"
           class="w-[5.625rem] h-[2.25rem] bg-[#FFF3B6] text-[#C4AE3B] my-3 mx-auto rounded-2xl flex flex-col justify-center items-center"
      >
        3 poin
      </div>
      <div id="question" class="w-full h-72  py-5 grid justify-items-center">
        <div id="multiple-choiches">
          <div v-for="item in questions" :key="item.id">


            <div v-if="item.is_pilihan_ganda == 1" class="options">
              <label

                :for="'option' + item.options[0].A"
                class="option w-[20.438rem] "
                :class="{ selected: isAselected, disabled: item.student_answers.length>0, historySelected:item.student_answers.length > 0 ? (item.student_answers[0].answer == 'A'? true: false): false}"
              >
                <input
                  :disabled="item.student_answers.length>0"
                  type="radio"
                  :id="'option' + item.options[0].A"
                  :name="item.id"
                  :value="item.options[0].A"
                  v-model="answer"
                  @change="()=>{isAselected=true; isBselected=false; isCselected=false; isDselected=false}"

                />
                <span>{{ item.options[0].A }}</span>
              </label>

              <label

                :for="'option' + item.options[0].B"
                class="option w-[20.438rem] "
                :class="{ selected: isBselected,disabled: item.student_answers.length>0, historySelected:item.student_answers.length > 0 ? (item.student_answers[0].answer == 'B'? true: false): false}"

              >
                <input
                  :disabled="item.student_answers.length>0"
                  type="radio"
                  :id="'option' + item.options[0].B"
                  :name="item.id"
                  :value="item.options[0].B"
                  v-model="answer"
                  @change="()=>{isAselected=false; isBselected=true; isCselected=false; isDselected=false}"


                />
                <span>{{ item.options[0].B }}</span>
              </label>


              <label

                :for="'option' + item.options[0].C"
                class="option w-[20.438rem] "
                :class="{ selected: isCselected, disabled: item.student_answers.length>0, historySelected:item.student_answers.length > 0 ? (item.student_answers[0].answer == 'C'? true: false): false}"

              >
                <input
                  :disabled="item.student_answers.length>0"
                  type="radio"
                  :id="'option' + item.options[0].C"
                  :name="item.id"
                  :value="item.options[0].C"
                  v-model="answer"
                  @change="()=>{isAselected=false; isBselected=false; isCselected=true; isDselected=false}"


                />
                <span>{{ item.options[0].C }}</span>
              </label>


              <label

                :for="'option' + item.options[0].D"
                class="option w-full "
                :class="{ selected: isDselected, disabled: item.student_answers.length>0, historySelected:item.student_answers.length > 0 ? (item.student_answers[0].answer == 'D'? true: false): false}"

              >
                <input
                  :disabled="item.student_answers.length>0"
                  type="radio"
                  :id="'option' + item.options[0].D"
                  :name="item.id"
                  :value="item.options[0].D"
                  v-model="answer"
                  @change="()=>{isAselected=false; isBselected=false; isCselected=false; isDselected=true}"


                />
                <span>{{ item.options[0].D }}</span>
              </label>
            </div>
            <div v-else id="essay">
              <input v-if="item.student_answers.length >0" type="text"
                     :value="item.student_answers[0].answer"
                     :disabled="item.student_answers[0].answer"
                     class="w-[20.438rem] h-[2.875rem] my-3 disabled:bg-[#8fe1a2] disabled:opacity-50 bg-white rounded-xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center px-3"
                     placeholder="Ketik jawaban"
              >
              <input v-else type="text"
                     v-model="answer"
                     class="w-[20.438rem] h-[2.875rem] my-3 bg-white rounded-2xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center px-3"
                     placeholder="Ketik jawaban"
              >
            </div>


          </div>
        </div>
      </div>
    </div>
    <div id="navigate" class="w-full h-20  flex justify-between items-center px-3">
      <button @click="changePage(page-1)" id="kembali"
              class="w-[6.25rem] h-[2.75rem] bg-white rounded-2xl text-[#6D9DE0] border-solid border-2 border-[#6D9DE0]"
      >
        Kembali
      </button>

      <button v-if="page == maxPage" @click="submitChallenge">
        <svg width="128" height="64" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_3488_1103)">
            <rect x="10" y="6" width="108" height="44" rx="20" fill="#6D9DE0"/>
            <path
              d="M23.2206 33.098C22.9872 33.098 22.8052 33.0327 22.6746 32.902C22.5532 32.7713 22.4926 32.5893 22.4926 32.356V23.76C22.4926 23.5173 22.5532 23.3353 22.6746 23.214C22.8052 23.0927 22.9872 23.032 23.2206 23.032C23.4539 23.032 23.6312 23.0927 23.7526 23.214C23.8832 23.3353 23.9486 23.5173 23.9486 23.76V27.568H23.9766L28.2746 23.41C28.4146 23.2793 28.5452 23.186 28.6666 23.13C28.7972 23.0647 28.9419 23.032 29.1006 23.032C29.3152 23.032 29.4692 23.088 29.5626 23.2C29.6652 23.3027 29.7072 23.4287 29.6886 23.578C29.6699 23.7273 29.5906 23.872 29.4506 24.012L24.9846 28.268L25.0126 27.554L29.6606 32.034C29.8286 32.1927 29.9172 32.356 29.9266 32.524C29.9359 32.692 29.8846 32.832 29.7726 32.944C29.6606 33.0467 29.5019 33.098 29.2966 33.098C29.1099 33.098 28.9606 33.0607 28.8486 32.986C28.7366 32.9113 28.6059 32.804 28.4566 32.664L23.9766 28.394H23.9486V32.356C23.9486 32.5893 23.8879 32.7713 23.7666 32.902C23.6452 33.0327 23.4632 33.098 23.2206 33.098ZM33.396 33.126C32.8453 33.126 32.3833 33.0233 32.01 32.818C31.646 32.6127 31.3706 32.3093 31.184 31.908C31.0066 31.4973 30.918 30.984 30.918 30.368V26.784C30.918 26.5413 30.9786 26.364 31.1 26.252C31.2213 26.1307 31.394 26.07 31.618 26.07C31.842 26.07 32.0146 26.1307 32.136 26.252C32.2666 26.364 32.332 26.5413 32.332 26.784V30.382C32.332 30.9327 32.444 31.3387 32.668 31.6C32.892 31.8613 33.2466 31.992 33.732 31.992C34.264 31.992 34.6933 31.8147 35.02 31.46C35.356 31.096 35.524 30.62 35.524 30.032V26.784C35.524 26.5413 35.5846 26.364 35.706 26.252C35.8273 26.1307 36.0046 26.07 36.238 26.07C36.462 26.07 36.6346 26.1307 36.756 26.252C36.8773 26.364 36.938 26.5413 36.938 26.784V32.384C36.938 32.86 36.7093 33.098 36.252 33.098C36.0373 33.098 35.8693 33.0373 35.748 32.916C35.6266 32.7853 35.566 32.608 35.566 32.384V31.194L35.748 31.502C35.5613 32.0247 35.2626 32.426 34.852 32.706C34.4413 32.986 33.956 33.126 33.396 33.126ZM39.4207 33.098C39.1967 33.098 39.024 33.0373 38.9027 32.916C38.7813 32.7853 38.7207 32.608 38.7207 32.384V26.784C38.7207 26.5507 38.7813 26.3733 38.9027 26.252C39.024 26.1307 39.192 26.07 39.4067 26.07C39.6307 26.07 39.7987 26.1307 39.9107 26.252C40.032 26.3733 40.0927 26.5507 40.0927 26.784V27.932L39.9387 27.624C40.1253 27.1293 40.4147 26.742 40.8067 26.462C41.1987 26.182 41.67 26.042 42.2207 26.042C42.79 26.042 43.252 26.1773 43.6067 26.448C43.9613 26.7187 44.204 27.134 44.3347 27.694H44.1387C44.316 27.1807 44.6193 26.7793 45.0487 26.49C45.478 26.1913 45.9773 26.042 46.5467 26.042C47.0693 26.042 47.4987 26.1447 47.8347 26.35C48.1707 26.546 48.4227 26.8493 48.5907 27.26C48.7587 27.6613 48.8427 28.17 48.8427 28.786V32.384C48.8427 32.608 48.7773 32.7853 48.6467 32.916C48.5253 33.0373 48.3527 33.098 48.1287 33.098C47.9047 33.098 47.732 33.0373 47.6107 32.916C47.4893 32.7853 47.4287 32.608 47.4287 32.384V28.856C47.4287 28.2773 47.326 27.8527 47.1207 27.582C46.9247 27.3113 46.598 27.176 46.1407 27.176C45.6273 27.176 45.2213 27.3533 44.9227 27.708C44.624 28.0627 44.4747 28.5527 44.4747 29.178V32.384C44.4747 32.608 44.414 32.7853 44.2927 32.916C44.1713 33.0373 43.9987 33.098 43.7747 33.098C43.5507 33.098 43.3733 33.0373 43.2427 32.916C43.1213 32.7853 43.0607 32.608 43.0607 32.384V28.856C43.0607 28.2773 42.9627 27.8527 42.7667 27.582C42.5707 27.3113 42.244 27.176 41.7867 27.176C41.2733 27.176 40.8673 27.3533 40.5687 27.708C40.2793 28.0627 40.1347 28.5527 40.1347 29.178V32.384C40.1347 32.86 39.8967 33.098 39.4207 33.098ZM51.2816 35.618C51.0576 35.618 50.8849 35.5573 50.7636 35.436C50.6423 35.3147 50.5816 35.1373 50.5816 34.904V26.784C50.5816 26.5507 50.6423 26.3733 50.7636 26.252C50.8849 26.1307 51.0529 26.07 51.2676 26.07C51.4916 26.07 51.6643 26.1307 51.7856 26.252C51.9069 26.3733 51.9676 26.5507 51.9676 26.784V28.002L51.8136 27.708C51.9629 27.204 52.2569 26.8027 52.6956 26.504C53.1343 26.196 53.6523 26.042 54.2496 26.042C54.8563 26.042 55.3836 26.1867 55.8316 26.476C56.2889 26.7653 56.6389 27.1713 56.8816 27.694C57.1336 28.2167 57.2596 28.8467 57.2596 29.584C57.2596 30.3027 57.1336 30.9327 56.8816 31.474C56.6389 32.006 56.2936 32.4167 55.8456 32.706C55.3976 32.986 54.8656 33.126 54.2496 33.126C53.6616 33.126 53.1483 32.9767 52.7096 32.678C52.2709 32.3793 51.9769 31.9827 51.8276 31.488H51.9956V34.904C51.9956 35.1373 51.9303 35.3147 51.7996 35.436C51.6783 35.5573 51.5056 35.618 51.2816 35.618ZM53.8996 32.034C54.2916 32.034 54.6323 31.9407 54.9216 31.754C55.2109 31.5673 55.4349 31.292 55.5936 30.928C55.7523 30.564 55.8316 30.116 55.8316 29.584C55.8316 28.7813 55.6543 28.1747 55.2996 27.764C54.9543 27.3533 54.4876 27.148 53.8996 27.148C53.5169 27.148 53.1763 27.2413 52.8776 27.428C52.5883 27.6053 52.3643 27.876 52.2056 28.24C52.0469 28.604 51.9676 29.052 51.9676 29.584C51.9676 30.3773 52.1449 30.984 52.4996 31.404C52.8543 31.824 53.3209 32.034 53.8996 32.034ZM61.0511 33.126C60.5004 33.126 60.0384 33.0233 59.6651 32.818C59.3011 32.6127 59.0258 32.3093 58.8391 31.908C58.6618 31.4973 58.5731 30.984 58.5731 30.368V26.784C58.5731 26.5413 58.6338 26.364 58.7551 26.252C58.8764 26.1307 59.0491 26.07 59.2731 26.07C59.4971 26.07 59.6698 26.1307 59.7911 26.252C59.9218 26.364 59.9871 26.5413 59.9871 26.784V30.382C59.9871 30.9327 60.0991 31.3387 60.3231 31.6C60.5471 31.8613 60.9018 31.992 61.3871 31.992C61.9191 31.992 62.3484 31.8147 62.6751 31.46C63.0111 31.096 63.1791 30.62 63.1791 30.032V26.784C63.1791 26.5413 63.2398 26.364 63.3611 26.252C63.4824 26.1307 63.6598 26.07 63.8931 26.07C64.1171 26.07 64.2898 26.1307 64.4111 26.252C64.5324 26.364 64.5931 26.5413 64.5931 26.784V32.384C64.5931 32.86 64.3644 33.098 63.9071 33.098C63.6924 33.098 63.5244 33.0373 63.4031 32.916C63.2818 32.7853 63.2211 32.608 63.2211 32.384V31.194L63.4031 31.502C63.2164 32.0247 62.9178 32.426 62.5071 32.706C62.0964 32.986 61.6111 33.126 61.0511 33.126ZM68.5458 33.126C67.8178 33.126 67.2671 32.916 66.8938 32.496C66.5298 32.0667 66.3478 31.4507 66.3478 30.648V23.746C66.3478 23.5127 66.4085 23.3353 66.5298 23.214C66.6511 23.0927 66.8238 23.032 67.0478 23.032C67.2718 23.032 67.4445 23.0927 67.5658 23.214C67.6965 23.3353 67.7618 23.5127 67.7618 23.746V30.564C67.7618 31.0307 67.8551 31.3807 68.0418 31.614C68.2378 31.838 68.5178 31.95 68.8818 31.95C68.9658 31.95 69.0405 31.95 69.1058 31.95C69.1711 31.9407 69.2365 31.9313 69.3018 31.922C69.4138 31.9127 69.4931 31.9453 69.5398 32.02C69.5865 32.0853 69.6098 32.2253 69.6098 32.44C69.6098 32.636 69.5678 32.79 69.4838 32.902C69.3998 33.0047 69.2645 33.07 69.0778 33.098C68.9938 33.1073 68.9051 33.112 68.8118 33.112C68.7185 33.1213 68.6298 33.126 68.5458 33.126ZM71.0891 33.098C70.8651 33.098 70.6924 33.0373 70.5711 32.916C70.4498 32.7853 70.3891 32.608 70.3891 32.384V23.746C70.3891 23.5127 70.4498 23.3353 70.5711 23.214C70.6924 23.0927 70.8651 23.032 71.0891 23.032C71.3131 23.032 71.4858 23.0927 71.6071 23.214C71.7378 23.3353 71.8031 23.5127 71.8031 23.746V29.15H71.8311L74.4491 26.546C74.5984 26.3967 74.7338 26.28 74.8551 26.196C74.9764 26.112 75.1351 26.07 75.3311 26.07C75.5271 26.07 75.6764 26.1213 75.7791 26.224C75.8818 26.3267 75.9331 26.4527 75.9331 26.602C75.9331 26.742 75.8631 26.8867 75.7231 27.036L72.9511 29.78V29.122L75.9751 32.132C76.1244 32.2813 76.1944 32.4307 76.1851 32.58C76.1758 32.7293 76.1151 32.8553 76.0031 32.958C75.8911 33.0513 75.7511 33.098 75.5831 33.098C75.3684 33.098 75.1958 33.056 75.0651 32.972C74.9438 32.888 74.7991 32.762 74.6311 32.594L71.8311 29.878H71.8031V32.384C71.8031 32.86 71.5651 33.098 71.0891 33.098ZM79.4855 33.126C79.0095 33.126 78.5802 33.0327 78.1975 32.846C77.8242 32.6593 77.5302 32.4073 77.3155 32.09C77.1008 31.7727 76.9935 31.4133 76.9935 31.012C76.9935 30.508 77.1195 30.1113 77.3715 29.822C77.6328 29.5233 78.0575 29.3133 78.6455 29.192C79.2428 29.0613 80.0455 28.996 81.0535 28.996H81.7115V29.864H81.0675C80.3955 29.864 79.8635 29.8967 79.4715 29.962C79.0795 30.0273 78.7995 30.1393 78.6315 30.298C78.4728 30.4473 78.3935 30.6573 78.3935 30.928C78.3935 31.2827 78.5148 31.572 78.7575 31.796C79.0002 32.0107 79.3362 32.118 79.7655 32.118C80.1108 32.118 80.4142 32.0387 80.6755 31.88C80.9368 31.712 81.1422 31.488 81.2915 31.208C81.4502 30.928 81.5295 30.606 81.5295 30.242V28.632C81.5295 28.1 81.4175 27.7173 81.1935 27.484C80.9695 27.2507 80.6008 27.134 80.0875 27.134C79.7888 27.134 79.4762 27.1713 79.1495 27.246C78.8322 27.3207 78.5008 27.4467 78.1555 27.624C77.9968 27.6987 77.8615 27.722 77.7495 27.694C77.6375 27.666 77.5488 27.6053 77.4835 27.512C77.4182 27.4093 77.3808 27.302 77.3715 27.19C77.3715 27.0687 77.3995 26.952 77.4555 26.84C77.5208 26.728 77.6282 26.644 77.7775 26.588C78.1882 26.392 78.5942 26.252 78.9955 26.168C79.3968 26.084 79.7748 26.042 80.1295 26.042C80.7548 26.042 81.2682 26.14 81.6695 26.336C82.0802 26.532 82.3835 26.8307 82.5795 27.232C82.7755 27.6333 82.8735 28.1513 82.8735 28.786V32.384C82.8735 32.608 82.8175 32.7853 82.7055 32.916C82.5935 33.0373 82.4302 33.098 82.2155 33.098C82.0102 33.098 81.8468 33.0373 81.7255 32.916C81.6042 32.7853 81.5435 32.608 81.5435 32.384V31.474H81.6695C81.5948 31.8193 81.4548 32.118 81.2495 32.37C81.0535 32.6127 80.8062 32.7993 80.5075 32.93C80.2088 33.0607 79.8682 33.126 79.4855 33.126ZM85.283 33.098C85.059 33.098 84.8863 33.0373 84.765 32.916C84.6437 32.7853 84.583 32.608 84.583 32.384V26.784C84.583 26.5507 84.6437 26.3733 84.765 26.252C84.8863 26.1307 85.0543 26.07 85.269 26.07C85.493 26.07 85.661 26.1307 85.773 26.252C85.8943 26.3733 85.955 26.5507 85.955 26.784V27.876L85.801 27.624C86.0063 27.1013 86.3283 26.7093 86.767 26.448C87.2057 26.1773 87.7097 26.042 88.279 26.042C88.8203 26.042 89.2683 26.1447 89.623 26.35C89.987 26.546 90.2577 26.8493 90.435 27.26C90.6123 27.6613 90.701 28.17 90.701 28.786V32.384C90.701 32.608 90.6403 32.7853 90.519 32.916C90.3977 33.0373 90.225 33.098 90.001 33.098C89.7677 33.098 89.5903 33.0373 89.469 32.916C89.3477 32.7853 89.287 32.608 89.287 32.384V28.87C89.287 28.282 89.1703 27.8527 88.937 27.582C88.713 27.3113 88.3583 27.176 87.873 27.176C87.3037 27.176 86.8463 27.3533 86.501 27.708C86.165 28.0627 85.997 28.5387 85.997 29.136V32.384C85.997 32.86 85.759 33.098 85.283 33.098Z"
              fill="white"
            />
            <path d="M100.648 35.5L106.143 30L100.648 24.5" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter id="filter0_d_3488_1103" x="0.15625" y="0.09375" width="127.688" height="63.6875"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"
              />
              <feOffset dy="3.9375"/>
              <feGaussianBlur stdDeviation="4.92188"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.784314 0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3488_1103"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3488_1103" result="shape"/>
            </filter>
          </defs>
        </svg>

      </button>

      <button v-else @click="changePage(page+1)" id="lanjut/kumpulkan"
              class=" w-[6.25rem] h-[2.75rem] bg-[#6D9DE0] rounded-2xl text-white"
      >


        <span>
          lanjut
        </span>
      </button>


    </div>

    <!--    <pagination :items="questions" :initial-page="1" :page-size="1" @changePage="changePage"/>-->


  </div>
</template>

<script>


export default {
  name: 'quiz',
  components: {},
  data () {
    return {
      essay: true,
      challenge: {
        title: ''
      },
      page: 1,
      maxPage: 1,
      isAselected: false,
      isBselected: false,
      isCselected: false,
      isDselected: false,
      pageOfItems: [],
      search: '',
      answer: '',
      validation: []

    }
  },

  async asyncData ({
    store,
    route
  }) {
    store.commit('siswa/question/SET_PAGE', route.query.page)
    await store.dispatch('siswa/question/getQuestionsData', route.query.id)
  },

  //computed
  computed: {

    questions () {
      return this.$store.state.siswa.question.questions.questions.data
    }

  },

  watch: {

    $route (to, from) {
      this.page = parseInt(this.$route.query.page)
      console.log(this.page, 'ini berubah')
      this.$store.commit('siswa/question/SET_PAGE', this.$route.query.page)
      this.$store.dispatch('siswa/question/getQuestionsData', this.$route.query.id)
      this.pageOfItems[0] = this.$store.state.siswa.question.questions.questions.data
    },

    pageOfItems (newData, oldData) {

      console.log(this.answer)
      console.log(newData[0], 'ini data baru')
      console.log(oldData[0], 'ini data lama')
      console.log('hehe')
      if (this.questions.length === 1) {
        console.log('cuma 1')
        if (this.questions[0].student_answers.length != 0) {
          console.log('udah ada jawabannya')
          this.submitChallenge()
        }

      }
      if (this.answer != '') {
        console.log('ada jawaban')
        if (oldData[0].id <= newData[0].id) {
          console.log('bisa subimit')
          this.submitAnswer(oldData[0].id)

          if (oldData[0].id === newData[0].id) {
            console.log('halo')

          }

        }

      } else {

      }
    }
  },

  methods: {
    async submitAnswer (data) {

      //define formData
      let formData = new FormData()
      formData.append('challenge_id', this.$route.query.id)

      formData.append('question_id', data)
      if (this.isAselected == true) {
        formData.append('answer', 'A')
      } else if (this.isBselected == true) {
        formData.append('answer', 'B')
      } else if (this.isCselected == true) {
        formData.append('answer', 'C')
      } else if (this.isDselected == true) {
        formData.append('answer', 'D')
      } else {
        formData.append('answer', this.answer)
      }

      //sending data to action "storeCategory" vuex
      await this.$store.dispatch('siswa/question/submitAnswer', formData)

        //success
        .then(() => {
          this.$store.dispatch('siswa/question/getQuestionsData', this.$route.query.id)
          this.isAselected = false
          this.isBselected = false
          this.isCselected = false
          this.isDselected = false
          this.answer = ''

          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Soal Dikerjakan!',
            icon: 'success',
            showConfirmButton: false,
            timer: 500
          })

        })

        //error
        .catch(error => {

          let currentPath = this.$router.currentRoute.path

          this.$router.push({
            path: currentPath,
            query: {
              id: this.$route.query.id,
              title: this.$route.query.title,
              page: this.page - 1,

            }
          })

          //assign error to state "validation"
          this.validation = error.response.data
          if (this.validation) {
            this.$swal.fire({
              title: 'Tidak!',
              text: 'Pertanyaan Harus Dijawab dulu!',
              icon: 'warning',
              showConfirmButton: false,
              timer: 500
            })
          }
        })
    },
    async submitChallenge () {

      await this.submitAnswer(this.questions[0].id)

      //define formData
      let formData = new FormData()

      formData.append('challenge_id', this.$route.query.id)

      //sending data to action "storeCategory" vuex
      await this.$store.dispatch('siswa/question/submitChallenge', formData)

        //success
        .then(() => {

          this.$swal.fire({
            title: 'Horee!',
            text: 'Tantangan Selesai!',
            icon: 'success',
            showConfirmButton: false,
            timer: 500
          })

          this.$router.push({
            name: 'siswa-tantangan-history-detail',
            query: {
              id: this.$route.query.id
            }
          })

        })

        //error
        .catch(error => {

          //assign error to state "validation"
          this.$swal.fire({
            title: 'Yahh!',
            text: 'Selesaiin dulu dong soalnya!',
            icon: 'error',
            showConfirmButton: false,
            timer: 500
          })

        })
    },

    changePage (page) {
      let currentPath = this.$router.currentRoute.path
      if (page === this.maxPage + 1) {

      } else if (page === 0) {
        this.$router.push({
          name: 'siswa-tantangan'
        })
      } else {
        if (this.page < page & this.questions[0].student_answers.length == 0) {
          this.submitAnswer(this.questions[0].id)
        }
        this.$router.push({
          path: currentPath,
          query: {
            id: this.$route.query.id,
            title: this.$route.query.title,
            page: page,

          }
        })
      }

      console.log(page)

      //dispatch on action "getCategoriesData"
      // this.$store.dispatch('siswa/question/getQuestionsData', this.$route.query.id)
    },
  },
  mounted () {
    this.page = this.$store.state.siswa.question.questions.questions.current_page
    this.challenge.title = this.$route.query.title
    this.maxPage = this.$store.state.siswa.question.questions.questions.total
    console.log(this.questions)
  }
}
</script>

<style>
.options {
  margin-bottom: 1rem;
}

.option {
  padding: 0.8rem;
  display: block;
  background-color: white;
  margin-bottom: 0.5rem;
  border-radius: 0.8rem;
  border: 0.15rem solid #6D9DE0;
  cursor: pointer;
}

.option:hover {
  background-color: #FFF3B6;
}

.option.selected {
  background-color: #2ed054;
}

.option.selected.disabled {
  background-color: #8fe1a2;

}

.option.disabled.historySelected {
  background-color: #8fe1a2;

}

.option.disabled {
  background-color: #7899bd;

}


.option.wrong {
  background-color: #ff5a5f;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}


</style>
