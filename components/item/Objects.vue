<template>
  <div v-if="moreLikeThisData.length > 0">
    <div class="text-center my-5">
      <h3 class="mb-2">{{ $t('オブジェクト') }}（{{ $t('mtag') }}）</h3>
      <small
        >誤認識を含みますのでご注意ください。

        <template v-if="false"
          >よろしければ
          <v-btn
            rounded
            class="mx-1"
            color="primary"
            depressed
            small
            target="_blank"
            :href="`https://kunshujo-c.web.app/item/${moreLikeThisData[0].id}`"
            >タグ修正 <v-icon class="ml-1">mdi-exit-to-app</v-icon></v-btn
          >
          にご協力ください。</template
        ></small
      >
    </div>
    <HorizontalItems :data="moreLikeThisData" :height="150" />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Watch, Vue } from 'nuxt-property-decorator'
import HorizontalItems from '../display/HorizontalItems.vue'
import axios from 'axios'

@Component({
  components: {
    HorizontalItems,
  },
})
export default class morelikethis extends Vue {
  moreLikeThisData: any[] = []
  baseUrl: any = process.env.BASE_URL

  @Prop({
    required: true,
  })
  item: any

  mounted() {
    this.moreLikeThis()
  }

  @Watch('itemId')
  watchId(): void {
    this.moreLikeThis()
  }

  async moreLikeThis() {
    const id = this.item.objectID

    let index: any = await axios.get(this.baseUrl + '/data/gcv.json')
    index = index.data

    const moreLikeThisData = []

    for (const item of index) {
      const within = item.within

      if (within === id) {
        moreLikeThisData.push({
          id: item.objectID,
          label: item.label,
          thumbnail: item.thumbnail,
          to: {
            name: 'object-id',
            params: {
              id: item.objectID,
            },
          },
        })
      }
    }

    this.moreLikeThisData = moreLikeThisData
  }
}
</script>
