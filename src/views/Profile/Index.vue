<template>
    <div>
        <BaseLoading v-if="isLoading"/>
        <h1>Profile view</h1>
    </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import BaseLoading from '@/components/BaseLoading'

export default {
  name: 'ProfileView',
  components: {
    BaseLoading
  },
  mixins: [
    setError
  ],
  data () {
    return {
      profileData: null,
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    fetchData (region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
        }
        )
        .catch((err) => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          // setError MIXIN
          this.setApiError(errObj)
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
