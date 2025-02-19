import Vue from 'vue'

const ModalBus = new Vue()
Vue.prototype.$modal = {
    show(options) {
        ModalBus.$emit('show-modal', options)
    }
}

export default ({ app }, inject) => {
    inject('modal', Vue.prototype.$modal)
} 