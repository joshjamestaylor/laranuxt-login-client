export default defineNuxtRouteMiddleware((to, from) => {
    
  
   if (process.server) {
      return
    }
  
    let token = localStorage.getItem('token');
    const headers = {
        'Accept': 'application/json',
        'Authorization' : `Bearer ${token}`

      }

      
    const runtimeConfig = useRuntimeConfig()


    // Redirect from dashboard if not signed in
      
    let user =  fetch(runtimeConfig.apiBase+'/api/user',{headers})
    .then(
      res =>{        
        if(res.status === 200){
          navigateTo('/dashboard')
        }
      }
    )
    // Redirect to dashboard if signed in

  }
)
