// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    
    // components: true,
    css:[
        '@/assets/style/main.scss'
    ],
    // runtimeConfig: {
    //     public: {
    //       baseURL: process.env.BASE_URL || 'https://api.example.com/',
    //     },
    // },
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: '123',
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: 'https://api.tvmaze.com/'
        }
      }
})