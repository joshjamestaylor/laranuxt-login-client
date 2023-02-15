declare module '#auth' {
  const getServerSession: typeof import('/var/www/html/projects/affinity-chat/client/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').getServerSession
  const getToken: typeof import('/var/www/html/projects/affinity-chat/client/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').getToken
  const NuxtAuthHandler: typeof import('/var/www/html/projects/affinity-chat/client/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').NuxtAuthHandler
}