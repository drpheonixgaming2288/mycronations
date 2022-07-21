import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../Firebase";


export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const auth = getAuth(app);

  async function handleSubmit(e) {
    createUserWithEmailAndPassword(auth, username, password).then(
      (userCred) => {
        //isLoggedIn.setIsLoggedIn(true);
        // console.log("IS LOGGED IN FALSE?? " + user.isLoggedIn);
        // console.log(userCred);
        // // user.setIsLoggedIn(true);
        // // isLoggedIn.setIsLoggedIn(true);
        // console.log("IS LOGGED IN TRUE?? " + user.isLoggedIn)
        console.log(userCred.user.email)
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message

      console.log(errorMessage);
    })
  }


//   const validatePassword = () => {
//     let isValid = true
//     if (password !== '' && confirmPassword !== ''){
//       if (password !== confirmPassword) {
//         isValid = false
//         setError('Passwords does not match')
//       }
//     }
//     return isValid
//   }
  

  return (
    <form className="mt-5 mx-auto text-center" style={{ width: "30vw" }}>
      {/* <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input
              type="username"
              id="usernameInput"
              className="form-control"
              onChange={(e) => setUsername(e.value)}
            />
            <label className="form-label" for="usernameInput">
              Username
            </label>
          </div>
        </div>
      </div> */}

      <div className="form-outline mb-4">
        <input type="email" id="emailInput" className="form-control" onChange={(e) => setEmail(e.value)} />
        <label className="form-label" for="emailInput">
          Email Address
        </label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="passwordInput" className="form-control" onChange={(e) => setPassword(e.value)} />
        <label className="form-label" for="passwordInput">
          Password
        </label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="confirmPasswordInput" className="form-control" onChange={(e) => setConfirmPassword(e.value)} />
        <label className="form-label" for="confirmPasswordInput">
          Confirm Password
        </label>
      </div>

      <button onClick={handleSubmit} className="btn btn-primary btn-block mb-4">
        Register
      </button>
    </form>
  );
}
