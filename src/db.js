// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyAt1tDZQ9Q7-61AOFaW5wVrjxcK600Wu4o",
	authDomain: "chat-vue-39eec.firebaseapp.com",
	projectId: "chat-vue-39eec",
	storageBucket: "chat-vue-39eec.appspot.com",
	messagingSenderId: "317479173943",
	appId: "1:317479173943:web:aed9357f915777c47164b2",
	measurementId: "G-Y5JCVW7EH3",
};
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;

// import firebase from "firebase/app";
// import "firebase/database";

// const config = {
// 	apiKey: "AIzaSyAt1tDZQ9Q7-61AOFaW5wVrjxcK600Wu4o",
// 	authDomain: "chat-vue-39eec.firebaseapp.com",
// 	projectId: "chat-vue-39eec",
// 	storageBucket: "chat-vue-39eec.appspot.com",
// 	messagingSenderId: "317479173943",
// 	appId: "1:317479173943:web:aed9357f915777c47164b2",
// 	measurementId: "G-Y5JCVW7EH3",
// }

// const db = firebase.initializeApp(config);
// export default db;
