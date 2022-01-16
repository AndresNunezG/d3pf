<template>
    <div class="loading-wrapper text-center py 5">
        <div class="spinner-wrapper w-100">
            <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant"/>
        </div>
        <h1>loading...</h1>
    </div>
</template>

<script>
export default ({
  name: 'Loading',
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      required: false,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].indexOf(value) !== -1
      }
    }
  }
})
</script>

<style lang="stylus">
.spinner-wrapper
  .spinner
    width 4rem
    height 4rem
</style>
