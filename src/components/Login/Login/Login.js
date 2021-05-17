import React, { useState, useContext } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
// import { useState } from 'react';
import {UserContext} from '../../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photoURl: ''
    })
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleSignWithGoogle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURl } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photoURl: photoURl
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser)
                history.replace(from);
                console.log(displayName, email, photoURl)

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(errorCode)
                console.log(error)
            });

    }
    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
            .then(() => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    email: '',
                    error: '',
                    success: false
                }
                setUser(signOutUser)
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        let isFormedValid = true;
        if (e.target.name === 'email') {
            isFormedValid = /\S+@\S+\S+/.test(e.target.value);
            // const isEmailValid = /\S+@\S+\S+/.test(e.target.value);
            // console.log(isEmailValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormedValid = isPasswordValid && passwordHasNumber;
            // console.log(isPasswordValid && passwordHasNumber);
        }
        if (isFormedValid) {
            // debugger;
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // setLoggedInUser(newUserInfo);
                    // history.replace(from);
                    console.log(res)

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    //   var errorCode = error.code;
                    //   var errorMessage = error.message;
                    //  console.log(errorCode, errorMessage);
                });

        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(res)
                    // console.log(res);

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                });
        }
        e.preventDefault();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="form">
                <img style={{ display: 'block', width: '80px', margin: '20px auto', borderRadius: '30%', cursor:'pointer' }} onClick={handleSignWithGoogle}
                    src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3" alt="" />
                <form onSubmit={handleSubmit}>
                    {
                        newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="your name" required />
                    }
                    <input type="email" onBlur={handleBlur} name="email" placeholder="Email" required />
                    <input type="password" onBlur={handleBlur} name="Password" placeholder="Password" required />
                    <input type="submit" value="submit" className="button" />

                    <div className="a">
                        {
                            newUser ? 'already have an account?' : "Don't have an account? "
                        }

                        <span onClick={() => setNewUser(!newUser)}>
                            {
                                newUser ? 'login' : 'sign up'
                            }
                        </span>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;