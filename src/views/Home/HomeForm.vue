<template>
    <div class="search-form my-5">
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2">
                <!-- Form -->
                <b-form @submit.prevent="onSubmit">
                    <!-- group A - BattleTag -->
                    <b-form-group
                        id="input-group-1"
                        label="BattleTag:"
                        label-for="input-text"
                        description="Format: YourProfile#1234"
                    >
                        <b-form-input
                            v-focus
                            id="input-text"
                            v-model="form.battleTag"
                            type="text"
                            size="lg"
                            required
                            placeholder="BattleTag"
                        >
                        </b-form-input>
                    </b-form-group>
                    <!-- group B - Region -->
                    <b-form-group
                        id="input-group-2"
                        label="Region:"
                        label-for="input-region"
                    >
                        <b-form-select
                            id="input-region"
                            v-model="form.region"
                            size="lg"
                            :options="regions"
                        />
                    </b-form-group>
                    <!-- Submit button -->
                    <div class="d-flex justify-content-end mt-5">
                        <b-button
                            type="submit"
                            variat="primary"
                            size="lg"
                        >Submit
                        </b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
import { regions } from '@/utils/regions'

export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        battleTag: '',
        region: 'eu'
      }
    }
  },
  computed: {
    regions () {
      return regions.map(region => ({ value: region, text: region.toUpperCase() }))
    }
  },
  methods: {
    onSubmit () {
      const { region, battleTag } = this.form
      this.$router.push({ name: 'Profile', params: { region, battleTag: battleTag.replace('#', '-') } })
    }
  }
}
</script>
