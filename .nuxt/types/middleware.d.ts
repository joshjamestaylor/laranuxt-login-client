import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "dashboard" | "guest"
declare module "/var/www/html/projects/affinity-chat/client/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}