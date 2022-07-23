export const username=(username)=>{
    return{
        type: 'username',
        username
    }
}
export const email=(email)=>{
    return{
        type: 'email',
        email,
    }
}
export const password=(password)=>{
    return{
        type: 'password',
        password,
    }
}
export const confirmPass=(confirmPass)=>{
    return{
        type: 'confirmPass',
        confirmPass,
    }
}
export const signup=()=>{
return{
    type: 'SIGNUP',
}
}
export const emailORUsername=(emailORUsername)=>{
return{
    type: 'emailORUsername',
    emailORUsername
}
}
export const login=()=>{
return{
    type: 'LOGIN',
}
}