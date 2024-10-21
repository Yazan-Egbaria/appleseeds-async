const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async (url) => {
  const fetchedData = await fetch(url);
  const data = await fetchedData.json();
  return data;
};

async function displayData() {
  const usersDiv = document.getElementById("users");
  const postsDiv = document.getElementById("posts");
  const errorDiv = document.getElementById("error");

  try {
    const [users, posts] = await Promise.all([
      fetchData(usersURL),
      fetchData(postsURL),
    ]);

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `${user.name}
      ${user.email}`;
      usersDiv.append(userDiv);
    });

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("item");
      postDiv.innerHTML = `${post.title}
        ${post.body}`;
      postsDiv.append(postDiv);
    });
  } catch (error) {
    errorDiv.innerHTML = error;
  }
}

displayData();
