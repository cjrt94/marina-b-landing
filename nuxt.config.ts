// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss"],
    app: {
        head: {
            title: 'Marina Buraschi - Alpaca & Vicuña essentials',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'format-detection', content: 'telephone=no'},
                {
                    name: 'description',
                    content: 'Alpaca & Vicuña essentials',
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#1C2C1F'
                },
                {
                    name: 'theme-color',
                    content: '#1C2C1F'
                }
            ],
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon.png'
                }
            ]
        }
    }
})
