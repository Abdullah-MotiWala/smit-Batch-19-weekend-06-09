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
// const id = localStorage.get("id");

const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");

const id = location.href.split("?")[1].split("=")[1];
console.log(id, "===id");

const updateButtonEl = document.getElementById("update");
function updateBlogClickHandler() {
  const title = titleEl.value;
  const description = descriptionEl.value;

  const collectionRef = db.collection("blog");
  const docRef = collectionRef.doc(id)
    docRef.update({
      title,
      description,
    })
    .then(() => {
      alert("New Blog has been updated");
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

updateButtonEl.addEventListener("click", updateBlogClickHandler);

async function getBlog() {
  const collectionRef = db.collection("blog");
  const docRef = collectionRef.doc(id);

  const doc = await docRef.get();
  const result = doc.data();

  console.log(result, "===reu");
  titleEl.value = result.title;
  descriptionEl.value = result.description;

  // TODO: add the doc into edit fields
}

getBlog();
