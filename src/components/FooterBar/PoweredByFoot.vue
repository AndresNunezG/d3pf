<template>
    <div class="text-center">
        <p class="text-muted">Powered by</p>
        <ul class="list-inline">
            <li v-for="(icon, index) in icons" :key="index" class="list-inline-item mx-2">
                <a href="icon.href" target="_blank" :title="icon.href">
                    <font-awesome-icon :icon="icon.classes" class="fa-lg" :style="{'color': icon.color}"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default ({
  name: 'PoweredByFoot',
  props: {
    icons: {
      required: true,
      type: Array
    }
  }
})
</script>
