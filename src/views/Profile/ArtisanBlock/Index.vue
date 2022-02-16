<template>
    <div class="artisan-light">
        <hr class="bg-light my-5"/>
        <h3 class="diablo-font mb-4">Artisans</h3>
        <b-row>
            <b-col lg="4" v-for="artisan in artisansInfo" :key="artisan.name">
                <ArtisansItem :artisan="artisan"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ArtisansItem from './ArtisansItem.vue'

export default {
  name: 'ArtisansBlock',
  components: {
    ArtisansItem
  },
  props: {
    artisansData: {
      required: true,
      type: Object
    }
  },
  computed: {
    artisansInfo () {
      return [
        {
          name: 'blacksmith',
          icon: 'hammer',
          emoji: '⚒️',
          color: '#FFB74D',
          normal: this.artisansData.blacksmith,
          hardcore: this.artisansData.blacksmithHardcore
        },
        {
          name: 'jeweler',
          icon: 'gem',
          emoji: '💎',
          color: '#4DD0E1',
          normal: this.artisansData.jeweler,
          hardcore: this.artisansData.jewelerHardcore
        },
        {
          name: 'mystic',
          icon: 'hat-wizard',
          emoji: '🔮',
          color: '#BA68C8',
          normal: this.artisansData.mystic,
          hardcore: this.artisansData.mysticHardcore
        }
      ]
    }
  }
}
</script>
