<template>
  <v-select
    v-model="size"
    hide-details
    outlined
    rounded
    :items="items"
    dense
    @change="changeHitsPerPage()"
  ></v-select>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class FullTextSearch extends Vue {
  get size(): number {
    return this.$store.getters.getSize
  }

  set size(value: number) {
    this.$store.commit('setSize', value)
  }

  get items() {
    const sizes: any = process.env.size || [24, 60, 120, 512]

    const items: any[] = []
    for (const size of sizes) {
      items.push({
        text: size + ' ' + this.$t('results'),
        value: size,
      })
    }

    return items
  }

  changeHitsPerPage() {
    const query = JSON.parse(JSON.stringify(this.$route.query))
    query.size = this.size

    const slug = this.$route.params.slug

    this.$router.push(
      this.localePath({
        name: 'search-slug',
        params: {
          slug,
        },
        query,
      })
    )
    //console.log('test')
  }
}
</script>
