// import initializeAuthentication from './Firebase/firebase.initialize';
import initializeAuthentication from '../pages/Login/Firebase/firebase.initialize'
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification
} from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

initializeAuthentication();
const useFirebase = () => {

    // different set
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));

    }
    // observer

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    useEffect(() => {
        fetch(`https://blooming-anchorage-75661.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    // logout
    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));

    }
    const saveUser = (email, displayName, method) => {

        const user = { email, displayName };
        fetch('https://blooming-anchorage-75661.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        error,
        signInUsingGoogle,
        handleLogOut,
        createUserWithEmailAndPassword,
        auth,
        updateProfile,
        signInWithEmailAndPassword,
        sendEmailVerification,
        isLoading,
        saveUser,
        admin
    }

}
export default useFirebase;