<template>
    <svgicon @click="click" :icon="icon" :width="width" :height="height" :color="color" ></svgicon>
</template>

<script>
  import '@/assets/compiled-icons'
  export default {
    props: ['width', 'height', 'color', 'icon'],
    methods: {
      click (e) {
        this.$emit("click", e);
      }
    }
  }
</script>