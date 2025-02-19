export const Modal = () => import('../../components/global/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const AppLogo = () => import('../../components/AppLogo.vue' /* webpackChunkName: "components/app-logo" */).then(c => wrapFunctional(c.default || c))
export const LanguageSwitcher = () => import('../../components/LanguageSwitcher.vue' /* webpackChunkName: "components/language-switcher" */).then(c => wrapFunctional(c.default || c))
export const CommonGlobalModal = () => import('../../components/Common/GlobalModal.vue' /* webpackChunkName: "components/common-global-modal" */).then(c => wrapFunctional(c.default || c))
export const FooterSimple = () => import('../../components/footer/FooterSimple.vue' /* webpackChunkName: "components/footer-simple" */).then(c => wrapFunctional(c.default || c))
export const AnalysisButton = () => import('../../components/analysis/AnalysisButton.vue' /* webpackChunkName: "components/analysis-button" */).then(c => wrapFunctional(c.default || c))
export const HeadersCentered = () => import('../../components/headers/HeadersCentered.vue' /* webpackChunkName: "components/headers-centered" */).then(c => wrapFunctional(c.default || c))
export const HeadersTestimonial = () => import('../../components/headers/HeadersTestimonial.vue' /* webpackChunkName: "components/headers-testimonial" */).then(c => wrapFunctional(c.default || c))
export const MarketingLiveDemo = () => import('../../components/marketing/LiveDemo.vue' /* webpackChunkName: "components/marketing-live-demo" */).then(c => wrapFunctional(c.default || c))
export const NavigationSimple = () => import('../../components/navigation/NavigationSimple.vue' /* webpackChunkName: "components/navigation-simple" */).then(c => wrapFunctional(c.default || c))
export const SectionsFeatureSimple = () => import('../../components/sections/FeatureSimple.vue' /* webpackChunkName: "components/sections-feature-simple" */).then(c => wrapFunctional(c.default || c))
export const SectionsTestimonialCentered = () => import('../../components/sections/TestimonialCentered.vue' /* webpackChunkName: "components/sections-testimonial-centered" */).then(c => wrapFunctional(c.default || c))
export const SectionsTestimonialGrid = () => import('../../components/sections/TestimonialGrid.vue' /* webpackChunkName: "components/sections-testimonial-grid" */).then(c => wrapFunctional(c.default || c))
export const TestimonialsCard = () => import('../../components/testimonials/TestimonialsCard.vue' /* webpackChunkName: "components/testimonials-card" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
