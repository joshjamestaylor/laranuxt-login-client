export default defineNuxtRouteMiddleware((to, from) => {
      
      let token = useCookie('token') ;
      const headers = {
          'Accept': 'application/json',
          'Authorization' : `Bearer ${token.value}`
  
        }


      const runtimeConfig = useRuntimeConfig()
  
      const { pending, data: user } = useLazyFetch(runtimeConfig.apiBase+'/api/user',{headers})

      watch(user, (loggedUser) => {
        if(!user.value){
          return navigateTo('/')
  
        }
      })

  }
)
