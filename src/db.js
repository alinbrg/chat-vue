import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	// ...
	// The value of `databaseURL` depends on the location of the database
	databaseURL: "https://chat-vue-39eec-default-rtdb.firebaseio.com",
	apiKey: "AIzaSyAt1tDZQ9Q7-61AOFaW5wVrjxcK600Wu4o",
	authDomain: "chat-vue-39eec.firebaseapp.com",
	projectId: "chat-vue-39eec",
	storageBucket: "chat-vue-39eec.appspot.com",
	messagingSenderId: "317479173943",
	appId: "1:317479173943:web:aed9357f915777c47164b2",
	measurementId: "G-Y5JCVW7EH3",
};

function writeUserData(name, message) {
	const app = initializeApp(firebaseConfig);
	const db = getDatabase(app);
	set(ref(db, "messages/" + message), {
		username: name,
		content: message,
	});
}
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const starCountRef = ref(db, "messages/");

onValue(starCountRef, (snapshot) => {
	const data = snapshot.val();
	console.log(data);
	let messagesArr = [];
	Object.keys(data).forEach((key) => {
		messagesArr.push({
			id: key,
			username: data[key].username,
			content: data[key].content,
		});
	});

	console.log(messagesArr);
	// state.messages = messagesArr;
});

export default writeUserData;
