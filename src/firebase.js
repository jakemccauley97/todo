import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCCJHEkjmDsGwiZCL8dfft_qwZHQB91itg",
  authDomain: "todo-58494.firebaseapp.com",
  databaseURL: "https://todo-58494.firebaseio.com",
  projectId: "todo-58494",
  storageBucket: "todo-58494.appspot.com",
  messagingSenderId: "487915053328",
  appId: "1:487915053328:web:c12b45d9410eae5e4c8595"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
