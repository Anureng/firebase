"use client"
import React, { useEffect, useState } from "react";
import { auth, provider } from "@/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import Home from "../page";


function SignIn() {
    const [value, setValue] = useState<any>('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <div>
            {value ? <Home /> :
                <button onClick={handleClick}>Signin With Google</button>
            }
        </div>
    );
}
export default SignIn;