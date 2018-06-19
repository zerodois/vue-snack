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
      <template v-if="config.close">
        <div
          @click="$emit('close')"
          class="times">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#E3E3E3" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
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
    }
  }
}
</script>
