<template>
  <transition name="modal">
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <component 
          :is="template" 
          v-bind="props"
          @close="close"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      template: null,
      props: {}
    }
  },
  created() {
    this.$modalBus.$on('show-modal', (options) => {
      this.template = { template: options.template }
      this.props = options.props || {}
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