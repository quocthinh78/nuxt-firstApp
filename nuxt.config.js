export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Firstapp',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/modals/v-modal.js', "@/plugins/core-component.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        // bootstrap vue
        "bootstrap-vue/nuxt",
    ],
    loading: '~/components/LoadingBar.vue',

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseUrl: 'https://nuxt-author-default-rtdb.firebaseio.com/'
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    env: {
        baseUrl: 'https://nuxt-author-default-rtdb.firebaseio.com/'
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    router: {
        middleware: 'router-log'
    }
}