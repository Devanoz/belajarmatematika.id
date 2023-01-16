<template>
<div :style="image" class="flex flex-col h-full pt-10 px-6">
    <h1 class="text-3xl font-semibold text-cyan-700">
        Selamat Datang <br>Kembali!
    </h1>
    <span class="text-lg font-light text-slate-400">Masuk ke akun untuk melanjutkan</span>

    <form @submit.prevent="login" class="mt-10 h-full flex flex-col gap-y-5">
        <label class="flex flex-col">
            <input v-model="user.email" class="bg-white px-5 py-3 font-light text-lg rounded-full" type="email" placeholder="Email">
        </label>
        <label class="flex flex-col">
            <input v-model="user.password" class="bg-white px-5 py-3 font-light text-lg rounded-full" type="password" placeholder="Password">
        </label>

        <div class="flex justify-between">
            <CheckBox label="Ingat Saya" />
            <NuxtLink to="siswa/auth/forget" class="underline text-lg text-cyan-700">
                Lupa Kata Sandi?
            </NuxtLink>
        </div>

        <div class="mt-auto mb-10">

            <button type="submit" class="bg-cs-blue-500 w-full py-3 text-center text-white rounded-2xl shadow-md">
                Masuk
            </button>

            <span class="text-center w-full inline-block mt-5">Belum Punya Akun?
                <NuxtLink to="/register" class="underline text-lg text-cyan-700">
                    Daftar
                </NuxtLink>
            </span>
            <span class="text-center w-full inline-block mt-5">
              <NuxtLink to="auth/login" class="underline text-lg text-cyan-700 mt-8">
                Masuk sebagai Guru
              </NuxtLink>
            </span>
        </div>
    </form>
</div>
</template>

<script>
import TextInput from '~/components/form/TextInput.vue'
import CheckBox from '~/components/form/CheckBox.vue'

export default {
    name: 'RegisterPage',
    components: {
        TextInput,
        CheckBox,

    },

    data() {
        return {
            url: require('~/assets/img/general/bg.jpeg'),
            image: ` backgroundImage: url(${require('~/assets/img/general/bg.jpeg')}); backgroundSize: cover; opacity: 1 `,
            user: {
                email: '',
                password: '',
            },
            //validation
            validation: []
        }
    },

    methods: {
        async login() {

            await this.$auth.loginWith('student', {
                    data: {
                        email: this.user.email,
                        password: this.user.password
                    }
                })

                .then(() => {

                    //redirect
                    this.$router.push({
                        name: 'siswa-materi'
                    })

                })

                .catch(() => {
                    //assign validation
                    // this.validation = error.response.data
                  this.$swal.fire({
                    text : 'Email atau password salah',
                    icon :'warning'
                  })
                })
        }

    }

}
</script>
