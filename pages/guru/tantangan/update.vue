<template>

  <div>
    <!--  edit quetion moda   -->
    <transition name="pop" appear>
      <div v-if="isModalVisible">
        <div
          @click="onToggle"
          class="fixed  bg-black opacity-70 w-full h-full inset-0 z-20"
        ></div>
        <div
          class="w-full max-w-lg p-3 overflow-hidden absolute mx-auto mt-20 my-auto rounded-xl shadow-lg bg-white z-30"
        >
          <div>
            <div class="text-center px-0.5 flex-auto justify-center leading-6">
              <h2 class="text-xl text-gray-700 font-bold">
                Edit Question
              </h2>

              <form>
                <div class="flex flex-col mt-2">
                  <label class=" font-medium text-gray-500 self-start">Deskripsi Soal</label>
                  <textarea id="" v-model="questionData.title" cols="42" rows="2"
                            class="w-full text-gray-500 mb-2 border-gray-500 rounded-2xl px-2 py-1 border-2"
                  />
                </div>

                <div class="flex flex-col mt-2">
                  <label class="mt-4 font-medium text-gray-500 self-start">Uploud Gambar Soal (Opsional)</label>

                  <div v-if="questionData.file == ''" class="flex items-center justify-center w-full mb-2  px-2">
                    <label for="dropzone-file"
                           class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">

                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Klik untuk melampirkan file</span>
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange">

                    </label>
                  </div>
                  <div v-if="questionData.file !=''" class="file-preview px-4 mt-6">
                <span class=" font-semibold text-gray-500 mb-3">
                  Terlampir
                </span>
                    <div class="grid grid-cols-4">
                      <img src="~/assets/img/general/pdf.svg" alt="">
                      <span class=" col-span-2">
                    {{ questionData.file.name }}
                  </span>
                      <button class="place-self-end self-center" @click="onFileDeleted">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.10385 7.01018L12.7491 2.3649C12.8266 2.29274 12.8887 2.20572 12.9318 2.10903C12.9748 2.01234 12.998 1.90797 12.9999 1.80213C13.0017 1.6963 12.9823 1.59117 12.9426 1.49302C12.903 1.39487 12.844 1.30571 12.7691 1.23087C12.6943 1.15602 12.6051 1.09701 12.507 1.05737C12.4088 1.01772 12.3037 0.998255 12.1979 1.00012C12.092 1.00199 11.9877 1.02516 11.891 1.06824C11.7943 1.11132 11.7073 1.17343 11.6351 1.25087L6.98982 5.89615L2.34454 1.25087C2.19512 1.11164 1.99749 1.03584 1.79329 1.03945C1.58908 1.04305 1.39425 1.12577 1.24983 1.27019C1.10542 1.41461 1.02269 1.60944 1.01909 1.81364C1.01549 2.01785 1.09129 2.21548 1.23052 2.3649L5.8758 7.01018L1.23052 11.6555C1.08291 11.8032 1 12.0036 1 12.2125C1 12.4213 1.08291 12.6217 1.23052 12.7695C1.37831 12.9171 1.57865 13 1.78753 13C1.99641 13 2.19675 12.9171 2.34454 12.7695L6.98982 8.1242L11.6351 12.7695C11.7829 12.9171 11.9832 13 12.1921 13C12.401 13 12.6013 12.9171 12.7491 12.7695C12.8967 12.6217 12.9796 12.4213 12.9796 12.2125C12.9796 12.0036 12.8967 11.8032 12.7491 11.6555L8.10385 7.01018Z"
                            fill="#BDBDBD" stroke="#828282" stroke-width="0.4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col mt-2">
                  <label class=" font-medium text-gray-500 self-start">Bentuk Soal</label>
                  <multiselect
                    :allowEmpty="false"
                    :hideSelected="true"
                    v-model="questionData.is_pilihan_ganda"
                    :options="options"
                    :searchable="true"
                    placeholder="Pilihan Ganda / Essay"
                    selected-label="text"
                    select-label=""
                    deselect-label=""
                    track-by="text"
                    label="text"
                  />
                </div>


                <div v-if="questionData.is_pilihan_ganda.value ==1" class="opsi-pilgan mt-2">
                  <label class="mt-6 font-medium text-gray-500 mb-2">Pilihan A</label><br>
                  <input id="judul" v-model="questionData.options[0].body" type="text"
                         class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
                  >
                  <label class="mt-6 font-medium text-gray-500 mb-2">Pilihan B</label><br>
                  <input id="judul" v-model="questionData.options[1].body" type="text"
                         class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
                  >
                  <label class="mt-6 font-medium text-gray-500 mb-2">Pilihan C</label><br>
                  <input id="judul" v-model="questionData.options[2].body" type="text"
                         class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
                  >
                  <label class="mt-6 font-medium text-gray-500 mb-2">Pilihan D</label><br>
                  <input id="judul" v-model="questionData.options[3].body" type="text"
                         class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
                  >

                  <div
                    v-if="questionData.options[0].body != '' && questionData.options[1].body != '' && questionData.options[2].body != ''&& questionData.options[3].body != '' "
                  >
                    <label class=" font-medium text-gray-500 mb-2">Kunci Jawaban</label><br>
                    <multiselect
                      v-model="questionData.answerKey"
                      :options="questionData.options"
                      :searchable="true"
                      placeholder="Kunci"
                      selected-label=""
                      select-label=""
                      deselect-label=""
                      track-by="body"
                      label="body"
                    />
                  </div>


                </div>

                <div v-else class="opsi-essay mt-2">

                  <label class=" font-bold text-gray-500 mb-2">Jawaban Benar</label><br>
                  <textarea id="" v-model="questionData.answerKey" cols="42" rows="2"
                            class="w-full text-gray-500 mb-2 border-gray-500 rounded-2xl px-2 py-1 border-2"
                  />
                </div>


              </form>


            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">

              <button
                @click="onToggle"
                class="mb-2 md:mb-0 bg-red-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >
                Close
              </button>

              <button
                @click="updateQuestion"
                class="mb-2 md:mb-0 bg-sky-500 text-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border rounded-md hover:shadow-lg "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!--  edit quetion moda   -->
    <transition name="pop" appear>
      <div v-if="isModalAddVisible">
        <div
          @click="onToggleCreate"
          class="fixed  bg-black opacity-70 w-full h-full inset-0 z-20"
        ></div>
        <div
          class="w-full max-w-lg p-3 overflow-hidden absolute mx-auto mt-20 my-auto rounded-xl shadow-lg bg-white z-30"
        >
          <div>
            <div class="text-center px-0.5 flex-auto justify-center leading-6">
              <h2 class="text-xl text-gray-700 font-bold">
                Tambah Soal
              </h2>

              <form>
                <div class="flex flex-col mt-2">
                  <label class=" font-medium text-gray-500 self-start">Deskripsi Soal</label>
                  <textarea id="" v-model="question.title" cols="42" rows="2"
                            class="w-full text-gray-500 mb-2 border-gray-500 rounded-2xl px-2 py-1 border-2"
                  />
                </div>

                <div class="flex flex-col mt-2">
                  <label class="mt-4 font-medium text-gray-500 self-start">Uploud Gambar Soal (Opsional)</label>

                  <div v-if="question.file == ''" class="flex items-center justify-center w-full mb-2  px-2">
                    <label for="dropzone-file"
                           class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">

                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Klik untuk melampirkan file</span>
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" @change="handleFileCreateChange">

                    </label>
                  </div>
                  <div v-if="question.file !=''" class="file-preview px-4 mt-6">
                <span class=" font-semibold text-gray-500 mb-3">
                  Terlampir
                </span>
                    <div class="grid grid-cols-4">
                      <img src="~/assets/img/general/pdf.svg" alt="">
                      <span class=" col-span-2">
                    {{ question.file.name }}
                  </span>
                      <button class="place-self-end self-center" @click="onFileDeleted">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.10385 7.01018L12.7491 2.3649C12.8266 2.29274 12.8887 2.20572 12.9318 2.10903C12.9748 2.01234 12.998 1.90797 12.9999 1.80213C13.0017 1.6963 12.9823 1.59117 12.9426 1.49302C12.903 1.39487 12.844 1.30571 12.7691 1.23087C12.6943 1.15602 12.6051 1.09701 12.507 1.05737C12.4088 1.01772 12.3037 0.998255 12.1979 1.00012C12.092 1.00199 11.9877 1.02516 11.891 1.06824C11.7943 1.11132 11.7073 1.17343 11.6351 1.25087L6.98982 5.89615L2.34454 1.25087C2.19512 1.11164 1.99749 1.03584 1.79329 1.03945C1.58908 1.04305 1.39425 1.12577 1.24983 1.27019C1.10542 1.41461 1.02269 1.60944 1.01909 1.81364C1.01549 2.01785 1.09129 2.21548 1.23052 2.3649L5.8758 7.01018L1.23052 11.6555C1.08291 11.8032 1 12.0036 1 12.2125C1 12.4213 1.08291 12.6217 1.23052 12.7695C1.37831 12.9171 1.57865 13 1.78753 13C1.99641 13 2.19675 12.9171 2.34454 12.7695L6.98982 8.1242L11.6351 12.7695C11.7829 12.9171 11.9832 13 12.1921 13C12.401 13 12.6013 12.9171 12.7491 12.7695C12.8967 12.6217 12.9796 12.4213 12.9796 12.2125C12.9796 12.0036 12.8967 11.8032 12.7491 11.6555L8.10385 7.01018Z"
                            fill="#BDBDBD" stroke="#828282" stroke-width="0.4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col mt-2">
                  <label class=" font-medium text-gray-500 self-start">Bentuk Soal</label>
                  <multiselect
                    :allowEmpty="false"
                    :hideSelected="true"
                    v-model="question.is_pilihan_ganda"
                    :options="options"
                    :searchable="true"
                    placeholder="Pilihan Ganda / Essay"
                    selected-label="text"
                    select-label=""
                    deselect-label=""
                    track-by="text"
                    label="text"
                  />
                </div>


                <div v-if="question.is_pilihan_ganda.value ==1" class="opsi-pilgan mt-2">
                  <label class="mt-6 font-medium text-gray-500 mb-2">Pilihan A</label><br>
                  <input id="judul" v-model="question.options[0].body" type="text"
                         class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
                  >
                  <label class="mt-6 font-medium text-gray-500 mb-2">Pilihan B</label><br>
                  <input id="judul" v-model="question.options[1].body" type="text"
                         class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
                  >
                  <label class="mt-6 font-medium text-gray-500 mb-2">Pilihan C</label><br>
                  <input id="judul" v-model="question.options[2].body" type="text"
                         class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
                  >
                  <label class="mt-6 font-medium text-gray-500 mb-2">Pilihan D</label><br>
                  <input id="judul" v-model="question.options[3].body" type="text"
                         class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
                  >

                  <div
                    v-if="question.options[0].body != '' && question.options[1].body != '' && question.options[2].body != ''&& question.options[3].body != '' "
                  >
                    <label class=" font-medium text-gray-500 mb-2">Kunci Jawaban</label><br>
                    <multiselect
                      v-model="question.answerKey"
                      :options="question.options"
                      :searchable="true"
                      placeholder="Kunci"
                      selected-label=""
                      select-label=""
                      deselect-label=""
                      track-by="body"
                      label="body"
                    />
                  </div>


                </div>

                <div v-else class="opsi-essay mt-2">

                  <label class=" font-bold text-gray-500 mb-2">Jawaban Benar</label><br>
                  <textarea id="" v-model="question.answerKey" cols="42" rows="2"
                            class="w-full text-gray-500 mb-2 border-gray-500 rounded-2xl px-2 py-1 border-2"
                  />
                </div>


              </form>


            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">

              <button
                @click="onToggleCreate"
                class="mb-2 md:mb-0 bg-red-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >
                Close
              </button>

              <button
                @click="addQuestion"
                class="mb-2 md:mb-0 bg-sky-500 text-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border rounded-md hover:shadow-lg "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="flex  flex-col px-4 py-4">

      <div class="title h-16 grid grid-cols-4 items-center">
        <button class="ml-8 text-[1.4em] col-span-1">
          <nuxt-link to="/guru/tantangan">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.4718 9.01357L16.6655 2.81987C16.7688 2.72365 16.8516 2.60762 16.909 2.47871C16.9665 2.34979 16.9973 2.21062 16.9998 2.06951C17.0023 1.92839 16.9764 1.78822 16.9235 1.65736C16.8707 1.5265 16.792 1.40762 16.6922 1.30782C16.5924 1.20802 16.4735 1.12935 16.3426 1.07649C16.2118 1.02363 16.0716 0.997674 15.9305 1.00016C15.7894 1.00265 15.6502 1.03354 15.5213 1.09098C15.3924 1.14842 15.2763 1.23124 15.1801 1.3345L8.98643 7.5282L2.79273 1.3345C2.5935 1.14886 2.32999 1.04779 2.05772 1.05259C1.78545 1.0574 1.52567 1.1677 1.33311 1.36025C1.14056 1.55281 1.03026 1.81259 1.02545 2.08486C1.02065 2.35713 1.12172 2.62064 1.30736 2.81987L7.50106 9.01357L1.30736 15.2073C1.11055 15.4043 1 15.6714 1 15.95C1 16.2285 1.11055 16.4956 1.30736 16.6926C1.50442 16.8895 1.77154 17 2.05004 17C2.32855 17 2.59567 16.8895 2.79273 16.6926L8.98643 10.4989L15.1801 16.6926C15.3772 16.8895 15.6443 17 15.9228 17C16.2013 17 16.4684 16.8895 16.6655 16.6926C16.8623 16.4956 16.9729 16.2285 16.9729 15.95C16.9729 15.6714 16.8623 15.4043 16.6655 15.2073L10.4718 9.01357Z"
                fill="#56739D" stroke="#56739D" stroke-width="0.5"
              />
            </svg>
          </nuxt-link>
        </button>
        <h1 class="text-[1.4em] col-span-2 text-gray-700 font-medium text-center">
          Edit Tantangan
        </h1>
      </div>


      <div class="form-challenge z-20">
        <form @submit.prevent="updateChallenge">
          <div class="materi-section mt-6 px-4 h-auto">
            <label class=" font-bold text-gray-500 mb-2">Judul Tantangan</label><br>
            <input id="judul" v-model="challenge.title" type="text"
                   class="w-full text-gray-500 h-11 rounded-2xl border-2 border-gray-400 px-5 disabled:text-gray-400 "
            >
            <div v-if="validation.title" class=" text-center py-4 px-2 w-full">
              <div class="p-2 bg-yellow-100  items-center text-yellow-700 leading-none rounded-full inline-flex"
                   role="alert"
              >
                <span class="flex rounded-full bg-yellow-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Warning</span>
                <span class="font-semibold mr-2 text-left flex-auto">{{ validation.title[0] }}</span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="materi-section px-4 mt-4">
            <label class=" font-bold text-gray-500 mb-2">Materi</label><br>
            <multiselect
              v-model="materi_id"
              :options="materis"
              :searchable="true"
              placeholder="Materi"
              selected-label=""
              select-label=""
              deselect-label=""
              track-by="title"
              label="title"
            />


            <label class="relative mt-4 inline-flex items-center cursor-pointer">
              <input v-model="is_published" @change="publishChallenge" :disabled="is_published==true" type="checkbox"
                     value=""
                     class="sr-only peer"
              >
              <div
                class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span class="ml-3 text-sm font-bold text-gray-500 dark:text-gray-300">Publish Tantangan ?</span>
            </label>


            <div v-if="validation.materi_id" class=" text-center py-4 px-2 w-full">
              <div class="p-2 bg-yellow-100  items-center text-yellow-700 leading-none rounded-full inline-flex"
                   role="alert"
              >
                <span class="flex rounded-full bg-yellow-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Warning</span>
                <span class="font-semibold mr-2 text-left flex-auto">{{ validation.materi_id[0] }}</span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="button-tambahkan flex flex-row justify-center">
            <button type="submit" class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl">
              Update
            </button>
          </div>
        </form>
      </div>


      <div class="px-3">
        <div class="
                      relative
                      z-0
                      grid grid-cols-6
                      card-image
                      drop-shadow-lg
                      border-b-2
                      mb-2
                      rounded-xl
                      bg-white
                      py-3
                      px-3
                      my-3" v-for="question in questions"
        >

          <div class="body col-span-5">
            <p class="question">
              {{ question.title }}

            </p>
            <div v-if="question.is_pilihan_ganda ==1" class="optionA ml-2 mt-2">

              <div class="grid grid-cols-9 ">
                <div class="form-group col-span-8 grid justify-items-center">

                  <label class="option w-full disabled" :class="{selected: question.answer_key=='A'}">
                    <input type="radio" :name="'opsi' + question.title" class="checked:text-green-600"
                           :checked="question.answer_key=='A'"
                    >
                    <span>
                          {{ question.options[0].A }}
                          </span>
                  </label>
                </div>
                <div v-if="question.answer_key=='A'" class="checked justify-self-end self-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01667 9.35 5.75 9.35C5.48333 9.35 5.25 9.45 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.25 7.81667 15.25 7.55C15.25 7.28333 15.15 7.05 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                      fill="#0FA958"
                    />
                  </svg>
                </div>
              </div>

              <div class="grid grid-cols-9 ">
                <div class="form-group col-span-8 grid justify-items-center">

                  <label class="option w-full disabled" :class="{selected: question.answer_key=='B'}">
                    <input type="radio" :name="'opsi' + question.title" class="checked:text-green-600"
                           :checked="question.answer_key=='B'"
                    >
                    <span>
                          {{ question.options[0].B }}
                          </span>
                  </label>
                </div>
                <div v-if="question.answer_key=='B'" class="checked justify-self-end self-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01667 9.35 5.75 9.35C5.48333 9.35 5.25 9.45 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.25 7.81667 15.25 7.55C15.25 7.28333 15.15 7.05 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                      fill="#0FA958"
                    />
                  </svg>
                </div>
              </div>

              <div class="grid grid-cols-9 ">
                <div class="form-group col-span-8 grid justify-items-center">

                  <label class="option w-full disabled" :class="{selected: question.answer_key=='C'}">
                    <input type="radio" :name="'opsi' + question.title" class="checked:text-green-600"
                           :checked="question.answer_key=='C'"
                    >
                    <span>
                          {{ question.options[0].C }}
                          </span>
                  </label>
                </div>
                <div v-if="question.answer_key=='C'" class="checked justify-self-end self-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01667 9.35 5.75 9.35C5.48333 9.35 5.25 9.45 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.25 7.81667 15.25 7.55C15.25 7.28333 15.15 7.05 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                      fill="#0FA958"
                    />
                  </svg>
                </div>
              </div>

              <div class="grid grid-cols-9 ">
                <div class="form-group col-span-8 grid justify-items-center">

                  <label class="option w-full disabled" :class="{selected: question.answer_key=='D'}">
                    <input type="radio" :name="'opsi' + question.title" class="checked:text-green-600"
                           :checked="question.answer_key=='D'"
                    >
                    <span>
                          {{ question.options[0].D }}
                          </span>
                  </label>
                </div>
                <div v-if="question.answer_key=='D'" class="checked justify-self-end self-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01667 9.35 5.75 9.35C5.48333 9.35 5.25 9.45 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.25 7.81667 15.25 7.55C15.25 7.28333 15.15 7.05 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                      fill="#0FA958"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div v-else class="text-green-600">
              Jawaban Benar: {{ question.answer_key }}
            </div>
          </div>
          <div class="btn-edit justify-self-end self-end gap-x-2">
            <button @click="onEdit(question)">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 20.525C1.45 20.525 0.979 20.329 0.587 19.937C0.195667 19.5457 0 19.075 0 18.525V4.525C0 3.975 0.195667 3.504 0.587 3.112C0.979 2.72067 1.45 2.525 2 2.525H10.925L8.925 4.525H2V18.525H16V11.575L18 9.575V18.525C18 19.075 17.8043 19.5457 17.413 19.937C17.021 20.329 16.55 20.525 16 20.525H2ZM13.175 3.1L14.6 4.5L8 11.1V12.525H9.4L16.025 5.9L17.45 7.3L10.25 14.525H6V10.275L13.175 3.1ZM17.45 7.3L13.175 3.1L15.675 0.6C16.075 0.2 16.5543 0 17.113 0C17.671 0 18.1417 0.2 18.525 0.6L19.925 2.025C20.3083 2.40833 20.5 2.875 20.5 3.425C20.5 3.975 20.3083 4.44167 19.925 4.825L17.45 7.3Z"
                  fill="#E4A951"
                />
              </svg>

            </button>

            <button class=" px-2 py-2" :disabled="is_published===true"
                    @click="deleteQuestion(question)"
            >
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  :class="{'fill-gray-500': is_published===true, 'fill-red-700': is_published===false}"

                  d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                  fill="currentColor"
                />
              </svg>

            </button>
          </div>


        </div>

      </div>


    </div>

    <button v-if="is_published==false" @click="onToggleCreate">
      <div
        id="floating-button"
        class="
          bg-[#6D9DE0]
          w-[3.375rem]
          h-[3.375rem]
          z-10
          fixed
          shadow-xl
          bottom-[6rem]
          right-[1.5rem]
          rounded-full
          flex
          justify-center
          items-center
        "
      >
        <img src="@/assets/img/guru/video/plusSign.svg" alt=""/>
      </div>
    </button>

  </div>

</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  name: 'update-tantangan',
  components: {
    Multiselect
  },

  data () {
    return {
      options: [
        {
          value: 1,
          text: 'Pilihan Ganda'
        },
        {
          value: 0,
          text: 'Essay'
        }

      ],
      questionData: {
        title: '',
        file: '',
        is_pilihan_ganda: {
          value: ''
        },
        answerKey: '',
        options: [
          {
            id: 'A',
            body: ''
          },
          {
            id: 'B',
            body: ''
          }, {
            id: 'C',
            body: ''
          }, {
            id: 'D',
            body: ''
          }
        ]
      },

      question: {
        title: '',
        file: '',
        is_pilihan_ganda: {
          value: ''
        },
        answerKey: '',
        options: [
          {
            id: 'A',
            body: ''
          },
          {
            id: 'B',
            body: ''
          }, {
            id: 'C',
            body: ''
          }, {
            id: 'D',
            body: ''
          }
        ]
      },

      tempQuestion: '',
      isOpen: false,
      isCreateModalOpen: false,
      materi_id: '',
      challenge_id: '',
      challenge: {
        id: '',
        title: ''
      },

      is_published: false,

      materi: {
        id: '',
        title: ''
      },

      validation: []
    }
  },

  //hook "asyncData"
  async asyncData ({
    store,
    route
  }) {
    await store.dispatch('teacher/materi/getMaterisData')
    await store.dispatch('teacher/challenge/getDetailChallenge', route.query.challenge)
    await store.dispatch('teacher/question/getQuestionsData', route.query.challenge)
    await store.dispatch('teacher/materi/getDetailMateri', route.query.materi)
  },

  //computed
  computed: {
    isModalVisible () {
      return this.isOpen
    },

    isModalAddVisible () {
      return this.isCreateModalOpen
    },

    materis () {
      return this.$store.state.teacher.materi.materis
    },

    questions () {
      return this.$store.state.teacher.question.questions
    }

  },

  mounted () {
    this.materi_id = this.$route.query.materi
    this.challenge.id = this.$route.query.challenge
    this.materi_id = this.$store.state.teacher.materi.materi
    this.challenge.title = this.$store.state.teacher.challenge.challenge.title
    this.is_published = this.$store.state.teacher.challenge.challenge.is_published == 1 ? true : false

  },

  watch: {
    tempQuestion () {
      console.log('temp question berubahh')
      this.questionData.title = this.tempQuestion.title
      if (this.tempQuestion.is_pilihan_ganda == 1) {
        this.questionData.is_pilihan_ganda = {
          value: 1,
          text: 'Pilihan Ganda'
        }

        switch (this.tempQuestion.answer_key) {
          case 'A':
            this.questionData.answerKey = {
              id: 'A',
              body: this.tempQuestion.options[0].A
            }
            break

          case 'B':
            this.questionData.answerKey = {
              id: 'B',
              body: this.tempQuestion.options[0].B
            }
            break

          case 'C':
            this.questionData.answerKey = {
              id: 'C',
              body: this.tempQuestion.options[0].C
            }
            break

          case 'D':
            this.questionData.answerKey = {
              id: 'D',
              body: this.tempQuestion.options[0].D
            }
            break

        }
        this.questionData.options[0].body = this.tempQuestion.options[0].A
        this.questionData.options[1].body = this.tempQuestion.options[0].B
        this.questionData.options[2].body = this.tempQuestion.options[0].C
        this.questionData.options[3].body = this.tempQuestion.options[0].D
      } else {
        this.questionData.options[0].body = '',
          this.questionData.options[1].body = '',
          this.questionData.options[2].body = '',
          this.questionData.options[3].body = '',
          this.questionData.answerKey = this.tempQuestion.answer_key
        this.questionData.is_pilihan_ganda = {
          value: 0,
          text: 'Essay'
        }
      }

    }
  },

  methods: {

    deleteQuestion (question) {
      this.$swal.fire({
        title: 'APAKAH ANDA YAKIN ?',
        text: 'INGIN MENGHAPUS DATA INI !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'YA, HAPUS!',
        cancelButtonText: 'TIDAK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('teacher/question/destroyCategory', question.id)
            .then((result) => {
              this.$store.dispatch('teacher/question/getQuestionsData', this.$route.query.challenge)

            })

        }
      })
    },

    async publishChallenge () {
      const formData = new FormData()

      formData.append('title', this.challenge.title)
      formData.append('materi_id', this.materi_id.id)
      formData.append('is_published', this.is_published === true ? 1 : 0)
      formData.append('_method', 'PATCH')

      //sending data to action "updateCategory" vuex
      await this.$store.dispatch('teacher/challenge/updateChallenge', {
        challengeId: this.$route.query.challenge,
        payload: formData
      })

        //success
        .then(() => {

          //sweet alert
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Data Berhasil Diupdate!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })

          //redirect route "admin-categories"

        })

        //error
        .catch(error => {

          //assign error to state "validation"
          this.validation = error.response.data
        })
    },

    handleFileChange (e) {
      // get image
      const image = this.questionData.file = e.target.files[0]
      // check fileType
      if (!image.type.match('image.*')) {
        console.log('error')
        this.$swal.fire({
          title: 'OOPS!',
          text: 'Format File Tidak Didukung!',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        })

        // if fileType not allowed, then clear value and set null
        e.target.value = ''

        // set state "category.image" to null
        this.questionData.file = ''
      }

      console.log('yee berhasil')
    },

    handleFileCreateChange (e) {
      // get image
      const image = this.question.file = e.target.files[0]
      // check fileType
      if (!image.type.match('image.*')) {
        console.log('error')
        this.$swal.fire({
          title: 'OOPS!',
          text: 'Format File Tidak Didukung!',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        })

        // if fileType not allowed, then clear value and set null
        e.target.value = ''

        // set state "category.image" to null
        this.question.file = ''
      }

      console.log('yee berhasil')
    },

    onFileDeleted () {
      this.questionData.file = ''
      this.question.file = ''
    },

    onEdit (data) {
      window.scrollTo(0, 0)
      this.tempQuestion = data
      this.isOpen = !this.isOpen

      console.log(this.tempQuestion)
    },
    onToggle () {
      this.isOpen = !this.isOpen
    },

    onToggleCreate () {
      this.isCreateModalOpen = !this.isCreateModalOpen
    },

    async addQuestion () {
      const formData = new FormData()
      formData.append('title', this.question.title)

      let isPilihanGanda = this.questionData.isPilihanGanda == true ? 1 : 0

      if (this.question.is_pilihan_ganda.value == 1) {
        formData.append('answer_key', this.question.answerKey ? this.question.answerKey.id : '')

      } else {
        console.log('ini bukan pilgan')
        formData.append('answer_key', this.question.answerKey)
      }

      if (this.question.file !== '') {
        formData.append('image', this.question.file)
      }
      formData.append('challenge_id', this.$route.query.challenge)
      formData.append('is_pilihan_ganda', this.question.is_pilihan_ganda.value)
      formData.append('A', this.question.options[0].body)
      formData.append('B', this.question.options[1].body)
      formData.append('C', this.question.options[2].body)
      formData.append('D', this.question.options[3].body)

      await this.$axios.post(`/api/teacher/questions`, formData)
        .then(() => {
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Data Berhasil Ditambah!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })

          this.question.title = ''
          this.question.answerKey = ''
          this.question.file = ''
          this.question.options[0].body = ''
          this.question.options[1].body = ''
          this.question.options[2].body = ''
          this.question.options[3].body = ''

          this.isCreateModalOpen = !this.isCreateModalOpen

          this.$store.dispatch('teacher/question/getQuestionsData', this.$route.query.challenge)

        })
    },

    async updateQuestion () {
      const formData = new FormData()
      formData.append('title', this.questionData.title)

      let isPilihanGanda = this.questionData.isPilihanGanda == true ? 1 : 0

      if (this.questionData.is_pilihan_ganda.value == 1) {
        formData.append('answer_key', this.questionData.answerKey ? this.questionData.answerKey.id : '')

      } else {
        console.log('ini bukan pilgan')
        formData.append('answer_key', this.questionData.answerKey)
      }

      if (this.questionData.file !== '') {
        formData.append('image', this.questionData.file)
      }
      formData.append('challenge_id', this.$route.query.challenge)
      formData.append('is_pilihan_ganda', this.questionData.is_pilihan_ganda.value)
      formData.append('A', this.questionData.options[0].body)
      formData.append('B', this.questionData.options[1].body)
      formData.append('C', this.questionData.options[2].body)
      formData.append('D', this.questionData.options[3].body)
      formData.append('_method', 'PATCH')

      await this.$axios.post(`/api/teacher/questions/${this.tempQuestion.id}`, formData)
        .then(() => {
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Data Berhasil Diupdate!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })

          this.isOpen = !this.isOpen

          this.$store.dispatch('teacher/question/getQuestionsData', this.$route.query.challenge)

        })
    },

    async updateChallenge () {
      //define formData
      const formData = new FormData()

      formData.append('title', this.challenge.title)
      formData.append('materi_id', this.materi_id.id)
      formData.append('_method', 'PATCH')

      //sending data to action "updateCategory" vuex
      await this.$store.dispatch('teacher/challenge/updateChallenge', {
        challengeId: this.$route.query.challenge,
        payload: formData
      })

        //success
        .then(() => {

          //sweet alert
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Data Berhasil Diupdate!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })

          //redirect route "admin-categories"

        })

        //error
        .catch(error => {

          //assign error to state "validation"
          this.validation = error.response.data
        })

    }
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
  margin-bottom: 0.8rem !important;
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


.iframe-container {
  overflow: hidden;
  padding-top: 62.5%;
  position: relative;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}


.pop-enter-active,
.pop-leave-active {
  transition: transform 0.2s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.2s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

</style>
