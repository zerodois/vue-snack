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
    theme: 'default',
    action: null
  }),
  computed: {
    styles () {
      return `--primary: ${this.config[this.theme].primary}`
      // return Object.keys(this.config).reduce((p, c) => {
      //   p += `--${c}: ${this.config[c]};`
      //   return p
      // }, '')
    }
  }
}
</script>
