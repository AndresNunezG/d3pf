<template>
    <div>
        <h1>Profile view</h1>
    </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

export default {
  name: 'ProfileView',
  mixins: [
    setError
  ],
  data () {
    return {
      profileData: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      const { region, battleTag: account } = this.$route.params
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
    }
  }
}
</script>
