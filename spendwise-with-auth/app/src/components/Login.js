import React, { useState, useContext, useEffect } from "react";
import useAuthentication from "../context/useAuthentication";
import { useNavigate, useLocation } from "react-router-dom";

// const { Title } = Typography;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const history = useHistory();
  const navigate = useNavigate();
  const location = useLocation();
  const { AuthCtx } = useAuthentication();
  const { user, error, logIn, 
    // logOut,
  } = useContext(AuthCtx);
  const { from } = (location && location.state) || { from: { pathname: "/" } };
  
  useEffect(() => {
    user && navigate(from, { replace: true }); //history.replace(from);
  }, [user, from, navigate]);

  return (
    <div>
        <form>
          <h1>Login Section</h1>
          <input onChange={e => setEmail(e.target.value)}    value={email}    type="email" placeholder="E-Mail"/>
          <input onChange={e => setPassword(e.target.value)} value={password} type="password"  placeholder="Password"/>
          <button type="primary"  onClick={(event) => { logIn(event, email, password) }} >Login</button>
          </form>

      {error ? ({error}) : null}

  </div>
  );
};

export default Login;
