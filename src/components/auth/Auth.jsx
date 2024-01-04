import React, { useState } from 'react'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,signOut } from 'firebase/auth'
import { Provider, auth } from 'config/firebase';

const Auth = () => {
    const [error, setError] = useState("failed");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email)
    
    const signInWithGoogle = async (e) => {
        e.preventDefault()
        try {
            await signInWithPopup(auth,Provider);
         } catch (err) {
             console.error(err)
             console.log(error)
         }
    }
    const signOutUser = async (e) => {
        e.preventDefault()
        try {
            await signOut(auth);
            alert("user is sign out")
         } catch (err) {
             console.error(err)
             console.log(error)
         }
    }
    // console.log(auth?.currentUser?.uid)
    const sign=async(e)=>{
        e.preventDefault()
        try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (err) {
        console.error(err)
        console.log(error)
    }
}
    const signWithEP=async(e)=>{
        e.preventDefault()
        try {
        await createUserWithEmailAndPassword(auth,email,password)
    } catch (err) {
        console.error(err)
        console.log(error)
    }
}


    return (
        <div style={{ width: "300px", height: "150px", margin: "auto" }}>
            <form >
                <fieldset>
                    <legend>Authentication</legend><br />
                    <input onChange={(e) =>setEmail(e.target.value)} type="email" placeholder='Email' /> <br /><br />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' /><br /><br />
                    <button onClick={signWithEP}>Sign up</button>
                    <button onClick={sign}>Sign In</button>
                    <button onClick={signInWithGoogle}>Google</button>
                    <button onClick={signOutUser}>Sign Out</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Auth;