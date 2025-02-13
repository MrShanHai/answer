import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip, {
    defaultTrigger: 'hover',
    defaultDelay: {
        show: 200,
        hide: 0
    }
}) 