

import { useState } from "react";
import { LoginProps } from "./Interfaces";

export const Login = (props: LoginProps) => {
    const [inputUsername, setName] = useState('');

    const submitUser = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevents page reload. 
      props.postFunction(inputUsername);  // RUNS the post-function 
    }
  
    return (
        <div>
            <p>=== LOGIN PROMT ===</p>
            <form onSubmit={submitUser}>
                <label>
                Enter username: 
                <input type="text" name="name" value={inputUsername} onChange={(event) => setName(event.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>

    );
  };


