export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  // head: {
  //   title: process.env.npm_package_name || '',
  //   meta: [
  //     {charset: 'utf-8'},
  //     {name: 'viewport', content: 'width=device-width, initial-scale=1'},
  //     {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
  //   ],
  //   link: [
  //     {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  //   ]
  // },
  head: {
    title: 'NPage 简约导航',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'NPage 简约导航和浏览器的启动页,高级搜索和书签云同步功能等你体验'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    'mdui/dist/css/mdui.min.css',
    '@/assets/css/npage.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
