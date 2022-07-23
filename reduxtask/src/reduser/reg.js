import axios from "axios";


const usernameRegExp= RegExp(
    /^[A-Za-z0-9_-]*$/
)
const emailRegExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegExp= RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
)



const registerReducer=(state={usernameError:'',emailError:'',passError:'',confirmPassError:''},action)=>{

    switch(action.type){
        
        case "username":
            if(action.username !=='' && usernameRegExp.test(action.username)){
                return {...state,username:action.username, usernameError: null};
            }else{
                return{...state,usernameError: 'Username is invalid'}
            }
        case "email":
            if(action.email !=='' && emailRegExp.test(action.email)){
                return {...state,email:action.email, emailError: null}
            }else{
                return{...state,emailError: 'Email is invalid'}
            }
        case "password":
            if(action.password !=='' && passRegExp.test(action.password)){
                return {...state,password:action.password, passError: null}
            }else{
                return{...state,passError: 'Password is invalid'}
            }
        case "confirmPass":
            if(action.confirmPass === state.password && action.password !== ''){
                return {...state, confirmPassError: null};
            }else{
                return{...state,confirmPassError: 'The two passwords do not match'}
            }
        case "SIGNUP":
            if(state.usernameError == null && state.emailError == null && state.passError == null && state.confirmPassError == null) {

                axios.post('http://localhost/loginredux/php/reg.php?username='+state.username+'&email='+state.email+'&password='+state.password)
 
            }else{
                return console.log('error');
            }
            break;
        default:
            return state;
    }
    
    
    
}
export default registerReducer;