<template>
	<div
		class="view Login"
		v-if="state.username === '' || state.username === null"
	>
		<form class="Login-form" @submit.prevent="Login()">
			<div class="form-inner">
				<h1>Login to Chat</h1>
				<label for="username">Username</label>
				<input
					v-model="inputUserName"
					type="text"
					id="username"
					placeholder="please enter your username"
				/>
				<input type="submit" value="Login" />
			</div>
		</form>
	</div>
	<div class="view chat" v-else>
		<header>
			<button class="logout" @click="Logout">Logout</button>
			<h1>Welcome, {{ state.username }}</h1>
		</header>
		<section class="chat-box">
			<!-- /messages -->
			<div
				v-for="message in state.messages"
				:key="message.key"
				:class="
					message.username == state.username
						? 'message current-user'
						: 'message'
				"
			>
				<div class="message-inner">
					<div class="username">
						{{ message.username }}
					</div>
					<div class="content">
						{{ message.content }}
					</div>
				</div>
			</div>
		</section>
		<footer>
			<form @submit.prevent="SendMessage">
				<input
					v-model="inputMessage"
					type="text"
					placeholder="write a message"
				/>
				<input type="submit" value="Send" />
			</form>
		</footer>
	</div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { initializeApp } from "firebase/app";
import { getDatabase, set, onValue } from "firebase/database";
import { ref as refBase } from "firebase/database";
// import { query, orderBy } from "firebase/firestore";

export default {
	setup() {
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
		const app = initializeApp(firebaseConfig);
		const db = getDatabase(app);

		function writeUserData(name, message, d) {
			set(refBase(db, "messages/" + d), {
				username: name,
				content: message,
				time: d,
			});
		}

		const inputUserName = ref("");
		const inputMessage = ref("");
		const state = reactive({
			username: "",
			messages: [],
		});

		const Login = () => {
			if (inputUserName.value !== "" || inputUserName.value !== null) {
				state.username = inputUserName.value;
				inputUserName.value = "";
			}
		};

		const Logout = () => {
			state.username = "";
		};

		const SendMessage = () => {
			// console.log(writeUserData);

			if (inputMessage.value === "" || inputMessage.value === null) {
				// console.log(messagesRef);
				return;
			}
			const d = new Date().getTime();
			// console.log(d);

			writeUserData(state.username, inputMessage.value, d);

			inputMessage.value = "";
		};

		onMounted(() => {
			const starCountRef = refBase(db, "messages/");

			// const q = query(starCountRef, orderBy("timestamp"));

			onValue(starCountRef, (snapshot) => {
				const data = snapshot.val();
				// console.log(data);
				let messagesArr = [];
				Object.keys(data).forEach((key) => {
					messagesArr.push({
						id: key,
						username: data[key].username,
						content: data[key].content,
					});
				});

				// console.log(messagesArr);
				state.messages = messagesArr;

				state.messages.sort((a, b) => {
					return a.id - b.id;
				});
			});
		});

		return {
			inputUserName,
			Login,
			state,
			SendMessage,
			inputMessage,
			Logout,
		};
	},
};
</script>

<style lang="scss">
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.view {
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-color: purple;

	&.Login {
		align-items: center;
		.Login-form {
			display: block;
			width: 100%;
			padding: 15px;

			.form-inner {
				display: block;
				background-color: #fff;
				padding: 50px 15px;
				border-radius: 16px;
				box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
				h1 {
					color: #aaa;
					font-size: 28px;
					margin-bottom: 30px;
				}
				label {
					display: block;
					margin-bottom: 5px;
					color: #aaa;
					font-size: 16px;
					transition: 0.4s;
				}
				input[type="text"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					border-radius: 8px;
					margin-bottom: 15px;

					color: #333;
					font-size: 18px;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					background-color: #f3f3f3;
					transition: 0.4s;
					&::placeholder {
						color: #888;
						transition: 0.4s;
					}
				}
				input[type="submit"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					background-color: purple;
					border-radius: 8px;
					color: #fff;
					font-size: 18px;
					font-weight: 700;
				}
				&:focus-within {
					label {
						color: purple;
					}
					input[type="text"] {
						background-color: #fff;
						box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
						&::placeholder {
							color: #666;
						}
					}
				}
			}
		}
	}
	&.chat {
		flex-direction: column;
		header {
			position: relative;
			display: block;
			width: 100%;
			padding: 50px 30px 10px;
			.logout {
				position: absolute;
				top: 15px;
				right: 15px;
				appearance: none;
				border: none;
				outline: none;
				background: none;

				color: #fff;
				font-size: 18px;
				margin-bottom: 10px;
				text-align: right;
			}
			h1 {
				color: #fff;
			}
		}
		.chat-box {
			border-radius: 24px 24px 0px 0px;
			background-color: #fff;
			box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
			flex: 1 1 100%;
			padding: 30px;
			.message {
				display: flex;
				margin-bottom: 15px;

				.message-inner {
					.username {
						color: #888;
						font-size: 16px;
						margin-bottom: 5px;
						padding-left: 15px;
						padding-right: 15px;
					}
					.content {
						display: inline-block;
						padding: 10px 20px;
						background-color: #f3f3f3;
						border-radius: 999px;
						color: #333;
						font-size: 18px;
						line-height: 1.2em;
						text-align: left;
					}
				}
				&.current-user {
					margin-top: 30px;
					justify-content: flex-end;
					text-align: right;
					.message-inner {
						max-width: 75%;
						.content {
							color: #fff;
							font-weight: 600;
							background-color: purple;
						}
					}
				}
			}
		}
		footer {
			position: sticky;
			bottom: 0px;
			background-color: #fff;
			padding: 30px;
			box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
			form {
				display: flex;
				input[type="text"] {
					flex: 1 1 100%;
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					border-radius: 8px 0px 0px 8px;

					color: #333;
					font-size: 18px;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					background-color: #f3f3f3;
					transition: 0.4s;
					&::placeholder {
						color: #888;
						transition: 0.4s;
					}
				}

				input[type="submit"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					padding: 10px 15px;
					border-radius: 0px 8px 8px 0px;
					background-color: purple;
					color: #fff;
					font-size: 18px;
					font-weight: 700;
				}
			}
		}
	}
}
</style>
