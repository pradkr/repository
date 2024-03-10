import React, {useEffect, useState} from 'react';
import { jwtDecode } from "jwt-decode";


export const Header = () => {
  const [user, setUser] = useState({});  //remove state and use redux or global state
  

  const handleCallbackResponse = (resonse) => {
    const userInfo = jwtDecode(resonse.credential);
    setUser(userInfo);
    document.getElementById('sign-in-div').hidden = true; //if user info returned, s/he is logged in, hide the signin button
  }
  const handleSignOut = (e) => {
    setUser({}); //empty the user details
    document.getElementById('sign-in-div').hidden = false;  //show sign in button now
  }
      //   {
      //     "iss": "https://accounts.google.com",
      //     "azp": "610648660195-2i11qvl03lc4v5jk7o171o85jk7g7ptn.apps.googleusercontent.com",
      //     "aud": "610648660195-2i11qvl03lc4v5jk7o171o85jk7g7ptn.apps.googleusercontent.com",
      //     "sub": "118362314425910005641",
      //     "email": "prad6g@gmail.com",
      //     "email_verified": true,
      //     "nbf": 1708806108,
      //     "name": "pradeep kumar",
      //     "picture": "https://lh3.googleusercontent.com/a/ACg8ocJSFgNm28dkn6EotccF5wl30RgkcLLaEAXkOVkfW1S1=s96-c",
      //     "given_name": "pradeep",
      //     "family_name": "kumar",
      //     "locale": "en",
      //     "iat": 1708806408,
      //     "exp": 1708810008,
      //     "jti": "02a1c6b8f806782f373d83af09cc7433d5144492"
      //   }
    
    useEffect(() => {
      const google = window.google;
      if (google && typeof google.accounts !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
          client_id: "610648660195-2i11qvl03lc4v5jk7o171o85jk7g7ptn.apps.googleusercontent.com",
          callback: handleCallbackResponse,
        });
        //https://developers.google.com/identity/gsi/web/reference/js-reference
        google.accounts.id.renderButton(
          document.getElementById('sign-in-div'), 
          {theme:'outline', size: 'small', shape: 'pill'
        });
        //google.accounts.id.prompt();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return ( 
    <nav>
        <div className="logo">SpendWise</div>
        <div className="nav-buttons">
            
            
            <div id='sign-in-div'></div>
            {(user && user.given_name && user.picture) && (
            <div className='logged-in'>
              <span className='username'>Hello {user.given_name}</span><span><img src={user.picture} alt={user.given_name} className='logged-in-user-img' /></span>
            </div>
            )}
            { (Object.keys(user).length !== 0) && (user.email)  ? (
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
              ) : (<button>Sign in</button>)
            }
              
        </div>
    </nav>
  )
}
