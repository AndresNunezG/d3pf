export default {
  methods: {
    /**
         * Go to hero Id
         * @param {String | Number} heroId
         */
    goToHero (heroId) {
      const { region, battleTag } = this.$route.params
      this.$router.push({ name: 'Hero', params: { region, battleTag, heroId } })
    }
  }
}
