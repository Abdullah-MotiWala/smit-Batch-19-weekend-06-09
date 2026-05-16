const firebaseConfig = {
  apiKey: "AIzaSyApFhMZhXvLqoSoqw-mybMzpCTY7LAWC6E",
  authDomain: "batch-19-23738.firebaseapp.com",
  projectId: "batch-19-23738",
  storageBucket: "batch-19-23738.firebasestorage.app",
  messagingSenderId: "228969410401",
  appId: "1:228969410401:web:ab8aa937320bebb771df20",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const addButtonEl = document.getElementById("add");
function addBlogClickHandler() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const collectionRef = db.collection("blog");
  collectionRef
    .add({
      title,
      description,
    })
    .then(() => {
      alert("New Blog has been added");
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

addButtonEl.addEventListener("click", addBlogClickHandler);
