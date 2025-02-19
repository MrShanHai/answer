<template>
  <transition name="modal">
    <div v-if="visible" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <button @click="close" class="modal-close">×</button>
        </div>
        <div class="modal-content">
          {{ content }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      title: '',
      content: ''
    }
  },
  mounted() {
    this.$root.$on('show-analysis-result', (data) => {
      this.title = data.title
      this.content = data.content
      this.visible = true
    })
  },
  methods: {
    close() {
      this.visible = false
    }
  }
}
</script> 