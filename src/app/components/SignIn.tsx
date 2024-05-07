"use client"
import React, { useEffect, useState } from "react";
import { auth, provider } from "@/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import Home from "../page";
import { useRouter } from "next/navigation";
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';


function SignIn() {
    const [value, setValue] = useState<any>('')
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState('');
    const router = useRouter()
    const handleClick = async () => {
        await signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            router.push('/Home')
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))

        if (isSignInWithEmailLink(auth, window.location.href)) {
            // now in case user clicks the email link on a different device, we will ask for email confirmation
            let email = localStorage.getItem('email');
            if (!email) {
                email = window.prompt('Please provide your email');
            }
            // after that we will complete the login process
            signInWithEmailLink(auth, localStorage.getItem('email') || '', window.location.href)
                .then((result) => {
                    // we can get the user from result.user but no need in this case
                    console.log(result.user);
                    localStorage.removeItem('email');
                    router.push('/Home')
                }).catch((err) => {
                    console.log(err);

                })
        }
        else {
            console.log('enter email and sign in');
        }
    }, [])

    const handleLogin = (e: any) => {
        e.preventDefault();
        sendSignInLinkToEmail(auth, email, {
            // this is the URL that we will redirect back to after clicking on the link in mailbox
            url: 'http://localhost:3000/',
            handleCodeInApp: true,
        }).then(() => {
            localStorage.setItem('email', email);
            alert("Check Your email , Mostly Spam")
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="flex lg:flex-row flex-col ">
            <img src="/Web.png" alt="Loading..." className="lg:h-screen h-96 bg-contain lg:w-3/4 " />
            <div className="lg:h-screen bg-[#071829] w-full h-96 text-white flex flex-col items-center justify-evenly">
                <img className="absolute lg:static bottom-[28rem] left-40 md:left-96" src="/logo.png" alt="" />
                <p className="absolute lg:static bottom-[25rem] left-20 flex lg:hidden md:left-48 ">Journey to a trillian miles starts from here!!</p>
                <div className="relative flex items-center justify-center flex-col space-y-4 h-96">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <p>Choose a Sign Up Method</p>
                    <button onClick={handleClick} className="border w-80 justify-center rounded-lg px-4 py-2 flex items-center space-x-2 ">
                        <img src="/google.png" alt="" />
                        <p>
                            Sign Up With Google
                        </p>
                    </button>
                    <button onClick={() => setVisible(!visible)} className="border w-80 justify-center rounded-lg px-4 py-2 flex items-center space-x-2">
                        <img src="./Message.jpg" alt="" />
                        <p>
                            Signin With Email
                        </p>
                    </button>
                    {
                        visible && (
                            <div className="flex items-center justify-center mt-8">
                                <input type="email" required placeholder="Enter Email" value={email || ''} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 py-2 px-4 rounded-l-md focus:outline-none text-black focus:ring focus:border-blue-300" />
                                <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring focus:border-blue-300">Click</button>
                            </div>
                        )
                    }
                    <p>Already a user ? Log in</p>
                </div>
            </div>
        </div>
    );
}
export default SignIn;