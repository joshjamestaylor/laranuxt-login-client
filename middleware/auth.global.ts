export default defineNuxtRouteMiddleware((to, from) => {

    //  let token = localStorage.getItem('token');
      //let token = ''
      
    let token = useCookie('token') ;
    const headers = {
        'Accept': 'application/json',
        'Authorization' : `Bearer ${token.value}`

      }

      
    const runtimeConfig = useRuntimeConfig()

    if(token.value){
    // Redirect from dashboard if not signed in
      
    fetch(runtimeConfig.apiBase+'/api/user',{headers})
    .then(
      res =>{      
        runtimeConfig.loggedIn = false;

        if(res.ok){
          runtimeConfig.loggedIn = true;
        }
        

      }
    ).catch(error => {console.log(error)})

    }


  }
)
