<template>
  <transition name="snack">
    <div
      v-if="active"
      :style="styles"
      class="snackbar"
      :class="config.position">
      <div class="snackbar__text">{{ text }}</div>
      <template v-if="button">
        <div
          @click.prevent="action"
          class="snackbar__action">{{ button }}</div>
      </template>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    config: Object
  },
  data: _ => ({
    active: false,
    text: '',
    button: '',
    action: null
  }),
  computed: {
    styles () {
      return Object.keys(this.config).reduce((p, c) => {
        p += `--${c}: ${this.config[c]};`
        return p
      }, '')
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.css';
// @import '../styles/main.scss';
</style>
