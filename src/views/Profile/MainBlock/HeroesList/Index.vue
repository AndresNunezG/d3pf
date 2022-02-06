<template>
    <div>
        <h1>Heroes List</h1>
        <b-table
          dark
          hover
          small
          striped
          stacked="sm"
          :items="heroes"
          :fields="fields"
        >
          <template v-slot:cell(name)="data">
            <HeroIco :hero="data.item"/>
          </template>
          <template v-slot:cell(class)="data">
            <HeroClassLevel :hero="data.item"/>
          </template>
          <template v-slot:cell(kills)="data">
            <span>{{ data.item.kills.elites }}</span>
          </template>
        </b-table>
    </div>
</template>

<script>
import HeroIco from './HeroIco.vue'
import HeroClassLevel from './HeroClassLevel.vue'

export default {
  name: 'HeroesList',
  components: {
    HeroIco,
    HeroClassLevel
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  }
}
</script>
