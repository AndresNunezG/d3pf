<template>
    <div class="text-center bg-dark h-100 pt-3 d3-icon-item" :class="itemClassColor">
        <div class="d-flex flex-column justify-content-between h-100">
            <template v-if="item.id">
                <div>
                    <div class="item-image">
                        <p class="text-muted">{{ item.name }}</p>
                        <img :src="itemUrl" :alt="item.slots + ' ' + item.name">
                    </div>
                </div>
                <div>
                    <template v-if="itemHasGems">
                        <small>{{ gemOrJewel }}</small>
                        <ul class="list-inline">
                            <li
                                v-for="(gem, index) in item.gems"
                                :key="'gem-'+index"
                                class="list-inline-item"
                            >
                                <ItemDetailGem :gem="gem"/>
                            </li>
                        </ul>
                    </template>
                </div>
            </template>
            <p v-else>
                <b-badge class="text-dark">{{ item.slotName }}</b-badge>
            </p>
        </div>
    </div>
</template>

<script>
import ItemDetailGem from './ItemDetailGem.vue'

export default {
  name: 'ItemDetail',
  props: {
    item: {
      type: Object || undefined,
      required: true
    }
  },
  components: { ItemDetailGem },
  computed: {
    itemUrl () {
      const host = 'http://media.blizzard.com/d3/icons/items/large/'
      return `${host}${this.item.icon}.png`
    },
    itemHasGems () {
      return Object.prototype.hasOwnProperty.call(this.item, 'gems')
    },
    gemOrJewel () {
      return this.item.gems[0].isGem ? 'Gems' : 'Jewel'
    },
    itemClassColor () {
      if (Object.prototype.hasOwnProperty.call(this.item, 'displayColor')) {
        return `item-${this.item.displayColor}`
      }
      return 'item-none'
    }
  }
}
</script>

<style lang="stylus">
.d3-icon-item
    min-height 100px
    border-top-style solid
    border-top-width 4px
    &.item-none
        border-color transparent
    &.item-green
        border-color #8BC34A
    &.item-orange
        border-color #FF9800
    &.item-yellow
        border-color #FFEB3B
    &.item-blue
        border-color #03A9F4
    &.item-white
        border-color #A0AAB5
</style>
