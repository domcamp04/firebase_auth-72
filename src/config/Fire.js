import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDcO4OgnXEEYw6uvlmZv9WTg3g2rvUM6LQ",
    authDomain: "auth-example-72-dc.firebaseapp.com",
    projectId: "auth-example-72-dc",
    storageBucket: "auth-example-72-dc.appspot.com",
    messagingSenderId: "637209540887",
    appId: "1:637209540887:web:934f6e10af34f74b669f52"
};

const fire = initializeApp(firebaseConfig);
export default fire;