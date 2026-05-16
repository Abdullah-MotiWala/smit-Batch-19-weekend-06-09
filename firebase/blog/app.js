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

const addButtonEl = document.getElementById("add-blog");
const blogWrapperEl = document.getElementById("blog-wrapper");
function addBlogClickHandler() {
  location.href = "add/index.html";
}
addButtonEl.addEventListener("click", addBlogClickHandler);

async function fetchBlogs() {
  blogWrapperEl.innerHTML = "";
  const collectionRef = db.collection("blog");
  const qsnapShot = await collectionRef.get();
  qsnapShot.forEach((doc) => {
    const blogData = {
      ...doc.data(),
      id: doc.id,
    };

    renderCard(blogData);
  });
}

function deleteBlogHandler(id) {
  const collectionRef = db.collection("blog");
  collectionRef
    .doc(id)
    .delete()
    .then(() => {
      alert("This blog has been deleted");
      fetchBlogs();
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

function editBlogHandler(id) {
  //   localStorage.setItem("id", id);
  location.href = `edit/index.html?id=${id}`;
}

function renderCard({ id, description, title }) {
  const html = `<div class='blog' id=${id}>
    <h2>${title}</h2>
    <p>${description}</p>
    <button onclick='deleteBlogHandler("${id}")'>Delete</button>
    <button onclick='editBlogHandler("${id}")'>Edit</button>
    </div>`;

  blogWrapperEl.innerHTML += html;
}

fetchBlogs();
