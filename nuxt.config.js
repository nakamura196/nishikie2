const fs = require('fs')

const environment = process.env.NODE_ENV
const env = require(`./env/${environment}.ts`)

const conf = JSON.parse(fs.readFileSync('static/data/conf.json'))

for (let key in conf) {
  env[key] = conf[key]
}

const etc = env.etc || {}

// legend, settings, などの追加項目
for (let key in etc) {
  env[key] = JSON.parse(fs.readFileSync(etc[key]))
}

env.menu = [
  {
    label: 'about_',
    to: {
      name: 'page-slug',
      params: {
        slug: 'about',
      },
    },
    icon: 'mdi-information',
    top: true,
  },
  /*
  {
    label: '検索例',
    to: {
      name: 'example',
    },
    icon: 'mdi-view-list',
    top: true,
    description: '本システムの検索例を紹介します。',
  },
  */
  {
    label: '検索',
    to: {
      name: 'search-slug',
    },
    icon: 'mdi-magnify',
    top: true,
    description: 'アイテムを検索します',
  },
  /*
  {
    label: 'エンティティ検索',
    to: {
      name: 'search-slug',
      params: {
        slug: 'entity',
      },
    },
    icon: 'mdi-tag',
    description: 'エンティティ（人物、場所、キーワードなど）を検索します',
    top: true,
  },
  */

  {
    label: 'その他の検索',
    to: {
      name: 'search-list',
    },
    icon: 'mdi-magnify',
    description: 'アイテム以外を検索します。',
    top: true,
  },
  {
    label: 'category',
    to: {
      name: 'category-list',
    },
    icon: 'mdi-chart-bar',
    description: 'メタデータ別の集計結果を表示します。',
    top: true,
  },
  {
    label: 'map',
    to: {
      name: 'map',
    },
    icon: 'mdi-map',
    description: '地図から探す',
    top: true,
  },
  /*
  {
    label: 'category',
    to: {
      name: 'category-slug',
      params: {
        slug: 'item',
      },
    },
    icon: 'mdi-chart-bar',
    description: 'アイテムのメタデータ別の集計結果を表示します。',
    top: true,
  },
  {
    label: 'カテゴリ（エンティティ）',
    to: {
      name: 'category-slug',
      params: {
        slug: 'entity',
      },
    },
    icon: 'mdi-chart-bar',
    description: 'エンティティのメタデータ別の集計結果を表示します。',
    top: true,
  },
  */
  /*
  {
    label: 'map',
    to: {
      name: 'map',
    },
    icon: 'mdi-map',
    description: '地図から探す',
    top: true,
  },
  {
    label: '機械学習関連サービス',
    to: {
      name: 'ml',
    },
    icon: 'mdi-api',
    description: '機械学習関連サービスについて紹介します。',
    top: true,
  },
  */
  /*
  {
    label: 'タグ修正アプリ',
    href: 'https://kunshujo-c.web.app/',
    icon: 'mdi-tag',
    description: '機械が付与したタグを修正するためのアプリケーションです。',
    top: true,
    blank: true,
  },
  {
    label: '可視化',
    to: {
      name: 'vis',
    },
    img: env.BASE_URL + '/img/etc/pd_banner_magnified.webp',
    description: '各種可視化を行います。',
    top: true,
  },
  {
    label: '電子展示『捃拾帖』',
    href: 'https://kunshujo.dl.itc.u-tokyo.ac.jp/',
    icon: 'mdi-database',
    description:
      '第1~18帖までの『捃拾帖』について、東京大学史料編纂所が作成した目録を用いて検索可能なシステムです。',
    top: true,
    blank: true,
  },
  */
]

// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
let routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/nishikie2/',
        },
      }
    : {}

// path
const baseUrl = env.BASE_URL || ''
const baseDir = env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = conf.lang
const siteName = conf.siteName
env.siteName = siteName

const siteDesc = conf.siteDesc
env.siteDesc = siteDesc

const footer = conf.footer
env.footer = footer

const siteKeywords = conf.siteKeywords

// images
const iconImages = baseDir + 'img/icons/'
const ogpImages = basePath + 'img/ogp/'

env.top = basePath + 'img/ogp/home.webp'

// pwa
const shortName = conf.shortName
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

env.searches = {
  default: {
    label: 'item',
    index: 'data/index.json',
    aggs: {
      書名: {
        key: '書名',
        sort: '',
        label: '書名',
        value: {},
        more: false,
        open: true,
      },
      画工名: {
        key: '画工名',
        sort: '',
        label: '画工名',
        value: {},
        more: false,
        open: true,
      },
      和暦年月日: {
        key: '和暦年月日',
        sort: '',
        label: '和暦年月日',
        value: {},
        more: false,
        open: true,
      },
      判: {
        key: '判',
        sort: '',
        label: '判',
        value: {},
        more: false,
        open: true,
      },
      形態: {
        key: '形態',
        sort: '',
        label: '形態',
        value: {},
        more: false,
        open: true,
      },
      彩色: {
        key: '彩色',
        sort: '',
        label: '彩色',
        value: {},
        more: false,
        open: true,
      },
      検印状況: {
        key: '検印状況',
        sort: '',
        label: '検印状況',
        value: {},
        more: false,
        open: true,
      },
      主題: {
        key: '主題',
        sort: '',
        label: '主題',
        value: {},
        more: false,
        open: true,
      },
      細目: {
        key: '細目',
        sort: '',
        label: '細目',
        value: {},
        more: false,
        open: true,
      },
      agential: {
        key: 'agential',
        sort: '',
        label: 'agential',
        value: {},
        more: false,
        open: true,
      },
      place: {
        key: 'place',
        sort: '',
        label: 'place',
        value: {},
        more: false,
        open: true,
      },
      org: {
        key: 'org',
        sort: '',
        label: 'org',
        value: {},
        more: false,
        open: true,
      },
      keyword: {
        key: 'keyword',
        sort: '',
        label: 'keyword',
        value: {},
        more: false,
        open: true,
      },
      event: {
        key: 'event',
        sort: '',
        label: 'event',
        value: {},
        more: false,
        open: true,
      },
      time: {
        key: 'time',
        sort: '',
        label: 'time',
        value: {},
        more: false,
        open: true,
      },
      color: {
        key: 'color',
        sort: '',
        label: 'color',
        value: {},
        more: false,
        open: true,
      },
      mtag: {
        key: 'mtag',
        sort: '',
        label: 'mtag',
        value: {},
        more: false,
        open: true,
      },
    },
    sort: [{ label: '適合度', value: '_score' }],
    defaultSort: '_score:desc',
    defaultLayout: 'grid',
    name: 'item-id',
    detail: [
      { label: '題名', value: '題名', type: 'text' },
      { label: '書名', value: '書名' },
      { label: '所蔵機関', value: '所蔵機関', type: 'text' },
      { label: '請求記号', value: '請求記号', type: 'text' },
      { label: '画工名', value: '画工名' },
      { label: '和暦年月日', value: '和暦年月日' },
      { label: '版元名', value: '版元名', type: 'text' },
      { label: '版元住所', value: '版元住所', type: 'text' },
      { label: '判', value: '判' },
      { label: '形態', value: '形態' },
      { label: '彩色', value: '彩色' },
      { label: '検印状況', value: '検印状況' },
      { label: '主題', value: '主題' },
      { label: '細目', value: '細目' },
      { label: 'その他書誌事項', value: 'その他書誌事項', type: 'text' },
      { label: '人名', value: '人名', type: 'text' },
      { label: '検印', value: '検印', type: 'text' },
      { label: 'その他固有件名', value: 'その他固有件名', type: 'text' },
      { label: '彫師', value: '彫師', type: 'text' },
      { label: '地名', value: '地名', type: 'text' },
      {
        label: 'agential',
        value: 'agential',
      },
      {
        label: 'org',
        value: 'org',
      },
      {
        label: 'place',
        value: 'place',
      },
      {
        label: 'keyword',
        value: 'keyword',
      },
      {
        label: 'event',
        value: 'event',
      },
      {
        label: 'time',
        value: 'time',
      },
      {
        label: 'color',
        value: 'color',
      },
      {
        label: 'mtag',
        value: 'mtag',
      },
    ],
    advanced: [],
    layout: [
      {
        label: 'list',
        value: 'list',
        icon: 'mdi-view-list',
        component: 'search-layout-list',
      },
      {
        label: 'grid',
        value: 'grid',
        icon: 'mdi-view-grid',
        component: 'search-layout-grid',
      },
      {
        label: 'graph',
        value: 'graph',
        icon: 'mdi-chart-bar',
        component: 'search-layout-graph',
      },
    ],
    list: [
      {
        label: '画工名',
        value: '画工名',
      },
      {
        label: '和暦年月日',
        value: '和暦年月日',
      },
      {
        label: '版元名',
        value: '版元名',
      },
      {
        label: '形態',
        value: '形態',
      },
    ],
  },
  entity: {
    label: 'entity',
    index: 'data/entity.json',
    aggs: {
      タイプ: {
        key: 'タイプ',
        sort: '',
        label: 'タイプ',
        value: {},
        more: false,
        open: true,
      },
    },
    sort: [
      { label: '適合度', value: '_score' },
      { label: '出現頻度', value: 'count' },
    ],
    defaultSort: 'count:desc',
    defaultLayout: 'grid',
    name: 'entity-id',
    detail: [
      {
        label: 'タイプ',
        value: 'タイプ',
      },
    ],
    advanced: [],
    layout: [
      {
        label: 'list',
        value: 'list',
        icon: 'mdi-view-list',
        component: 'search-layout-list',
      },
      {
        label: 'grid',
        value: 'grid',
        icon: 'mdi-view-grid',
        component: 'search-layout-grid',
      },
      {
        label: 'graph',
        value: 'graph',
        icon: 'mdi-chart-bar',
        component: 'search-layout-graph',
      },
    ],
    list: [
      {
        label: 'タイプ',
        value: 'タイプ',
      },
      {
        label: 'description',
        value: 'description',
      },
    ],
  },
  object: {
    label: 'object',
    index: 'data/gcv.json',
    aggs: {
      mtag: {
        key: 'mtag',
        sort: '',
        label: 'mtag',
        value: {},
        more: false,
        open: true,
      },
      /*
      color: {
        key: 'color',
        sort: '',
        label: 'color',
        value: {},
        more: false,
        open: true,
      },
      */
      /*
      score: {
        key: 'score',
        sort: '',
        label: 'score',
        value: {},
        more: false,
        open: true,
      },
      */
    },
    sort: [
      { label: '適合度', value: '_score' },
      { label: 'score', value: 'score' },
    ],
    defaultSort: '_score:desc',
    defaultLayout: 'grid',
    name: 'object-id',
    detail: [
      {
        label: 'mtag',
        value: 'mtag',
      },
      {
        label: 'color',
        value: 'color',
      },
      {
        label: 'score',
        value: 'score',
        type: 'text',
      },
    ],
    advanced: [],
    layout: [
      {
        label: 'list',
        value: 'list',
        icon: 'mdi-view-list',
        component: 'search-layout-list',
      },
      {
        label: 'grid',
        value: 'grid',
        icon: 'mdi-view-grid',
        component: 'search-layout-grid',
      },
      {
        label: 'graph',
        value: 'graph',
        icon: 'mdi-chart-bar',
        component: 'search-layout-graph',
      },
    ],
    list: [
      {
        label: 'score',
        value: 'score',
      },
    ],
  },
}

env.gtag = '' //G-KYBLVDY8SM

export default {
  telemetry: false,
  server: {
    port: 8003, // デフォルト: 3000
  },
  // Target (https://go.nuxtjs.dev/config-target)

  ssr: env.ssr,
  target: 'static',
  // srcDir: 'src/',

  env,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.jpg`,
      },
      { name: 'twitter:card', content: 'summary' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
    ],
  },

  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },

  loading: { color: '#E64A19', height: '5px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/utils.ts',
    { src: '@/plugins/leaflet.js', ssr: false },
    { src: '@/plugins/vue-scrollTo.js', ssr: false },
    '@/plugins/es.ts',
    '@/plugins/localEs.ts',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  moment: {
    // ここにオプションが記述できる
    locales: ['ja'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
    // Simple usage
    // '@nuxtjs/amp',
    '@nuxt/content',
    '@nuxtjs/google-gtag',
  ],

  'google-gtag': {
    id: env.gtag, //サイトのID
    debug: true, // 開発環境でも表示したい場合
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    defaultAssets: {
      font: false,
      icons: 'mdi',
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // strategy: 'no_prefix'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  ...routerBase,

  generate: {
    routes() {
      return [] //routes2()
    },
  },
}

function routes2() {
  const pages = []
  const fs = require('fs')
  const index = JSON.parse(fs.readFileSync('static/data/index.json'))
  for (const item of index) {
    const id = item.objectID
    pages.push({
      route: `/item/${id}`,
    })

    pages.push({
      route: `/en/item/${id}`,
    })
  }

  return pages
}
