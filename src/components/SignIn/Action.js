import axios from "axios";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

export function singIn (data){
    const SingIn = 'https://latam-challenge-2.deta.dev/api/v1/users/sign-up'

    axios.post(SingIn, data).then (res => {console.log(res)})
}


export function SingUp (data){

  const authCtx = useContext(AuthContext);

    
        const SingUp = 'https://latam-challenge-2.deta.dev/api/v1/users/sign-in'
        axios.post(SingUp, data).then (res => {
            console.log(res.data.token)
            if(res.status === 200){
                // Guarda el token en el localStorage o en una cookie
                localStorage.setItem('token', res.data.token);
                const localTokenUser = localStorage.getItem("token")
                authCtx.login(localTokenUser)
              }else{
                // Mostrar mensaje de error al usuario
                alert('Error al iniciar sesión, revise sus credenciales')
              }
        })

        
     
}
