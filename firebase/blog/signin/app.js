const firebaseConfig = {
  apiKey: "AIzaSyApFhMZhXvLqoSoqw-mybMzpCTY7LAWC6E",
  authDomain: "batch-19-23738.firebaseapp.com",
  projectId: "batch-19-23738",
  storageBucket: "batch-19-23738.firebasestorage.app",
  messagingSenderId: "228969410401",
  appId: "1:228969410401:web:ab8aa937320bebb771df20",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const signinBtnEl = document.getElementById("sign-in");
function handleSigninClick() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password).then(() => {
    alert("User loggedIn");
    location.href = "/smit-Batch-19-weekend-06-09/firebase/blog/index.html";
  });
}

signinBtnEl.addEventListener("click", handleSigninClick);
