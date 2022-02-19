<template>
    <ul class="list-unstyled">
        <li v-for="attr in attributes" :key="attr.name">
            <div class="d-flex justify-content-between">
                <div class="pl-2 text-capitalize name-text">
                    {{ attr.name }}
                </div>
                <div class="px-2 text-monospace">
                    {{ attr.val }}
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import { formatNumber } from '@/filters/numeral'
export default {
  name: 'AttributeList',
  filters: { formatNumber },
  props: {
    attributes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
    ul
        li
            .name-text
                color #EFB45D
                font-weight 600
</style>
