<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5 mb-10">
      <h2 class="mb-5">{{ title }}</h2>

      <v-row class="mt-5">
        <v-col cols="6" md="3" v-for="(item, key) in items" :key="key">
          <a :href="item.href">
            <v-img
              max-height="150"
              contain
              :src="item.img"
              style="height: 150px"
              width="100%"
              class="grey lighten-2"
            />
          </a>

          <a :href="item.href">
            <h3 class="mt-2">{{ item.label }}</h3>
          </a>
          <div class="mt-2">
            {{ item.description }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class about extends Vue {
  title: any = this.$t('可視化')

  baseUrl: any = process.env.BASE_URL

  items: any[] = [
    {
      label: 'アイテムの可視化 1',
      href: 'https://utda.github.io/kunshujo-a/item/pd/',
      img: this.baseUrl + '/img/etc/pd_banner_magnified.webp',
      description: 'NYPLが公開する手法を用いた可視化を行います。',
    },
    {
      label: 'アイテムの可視化 2',
      href: 'https://utda.github.io/kunshujo-a/item/pp/',
      img: this.baseUrl + '/img/etc/pixplot.webp',
      description:
        'Yale大学が公開する手法「PixPlot」を用いた可視化を行います。',
    },
    {
      label: 'オブジェクトの可視化 1',

      href: 'https://utda.github.io/kunshujo-a/object/pd/',
      img: this.baseUrl + '/img/etc/pd_banner_magnified.webp',
      description: 'NYPLが公開する手法を用いた可視化を行います。',
    },
    {
      label: 'オブジェクトの可視化 2',
      href: 'https://utda.github.io/kunshujo-a/object/pp/',
      img: this.baseUrl + '/img/etc/pixplot.webp',
      description:
        'Yale大学が公開する手法「PixPlot」を用いた可視化を行います。',
    },
  ]

  bh: any[] = [
    {
      text: this.$t('top'),
      disabled: false,
      to: this.localePath({ name: 'index' }),
      exact: true,
    },
    {
      text: this.title,
    },
  ]

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
