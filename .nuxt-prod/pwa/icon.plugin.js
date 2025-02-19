export default async function (ctx, inject) {
  const icons = {"64x64":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/icon_64x64.a10774.png","120x120":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/icon_120x120.a10774.png","144x144":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/icon_144x144.a10774.png","152x152":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/icon_152x152.a10774.png","192x192":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/icon_192x192.a10774.png","384x384":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/icon_384x384.a10774.png","512x512":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/icon_512x512.a10774.png","ipad_1536x2048":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_ipad_1536x2048.a10774.png","ipadpro9_1536x2048":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_ipadpro9_1536x2048.a10774.png","ipadpro10_1668x2224":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_ipadpro10_1668x2224.a10774.png","ipadpro12_2048x2732":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_ipadpro12_2048x2732.a10774.png","iphonese_640x1136":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_iphonese_640x1136.a10774.png","iphone6_50x1334":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_iphone6_50x1334.a10774.png","iphoneplus_1080x1920":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_iphoneplus_1080x1920.a10774.png","iphonex_1125x2436":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_iphonex_1125x2436.a10774.png","iphonexr_828x1792":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_iphonexr_828x1792.a10774.png","iphonexsmax_1242x2688":"/landing-nuxt-template/landing-nuxt-template/_nuxt/icons/splash_iphonexsmax_1242x2688.a10774.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
