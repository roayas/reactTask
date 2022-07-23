// import './login.css';
// import {useSelector,useDispatch } from 'react-redux';
// import {username,email,password,confirmPass, signup, emailORUsername,login} from "./actions";


function Home() {

    // const dispatch=useDispatch();
    // const error=useSelector(state=>state.register);
    let user_info= sessionStorage.getItem("user_info");
    const info = user_info.split(' ');
    const email= info[0];
    const username= info[1];

    
  return (
    <>
  <div id="container_demo">
    <a  id="toregister" />
    <a  id="tologin" />
    <div id="wrapper">
      <div id="login" className="animate form">
        <form   autoComplete="on">
          <h1>Welcome!</h1>
          <p>
            <label htmlFor="userName" className="uname" data-icon="u">
              Your Email:
            </label>
            <br></br>
            {email}
          </p>
          <p>
            <label htmlFor="password" className="youpasswd" data-icon="p">
              Your Username:
            </label>
            <br></br>
            {username}
          </p>
          <p className="change_link">
            <a href="/" className="to_register" onClick={()=>sessionStorage.clear()}>
              Logout
            </a>
          </p>
          
          
        </form>
      </div>{" "}
    </div>{" "}
    {/* End Wrapper */}
  </div>{" "}
  {/* End container_demo */}
</>
  )
}

export default Home