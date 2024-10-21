const usersContainer = document.getElementById("users");
const url = "https://jsonplaceholder.typicode.com/";
const loadingIndicator = document.getElementById("loading");

async function fetchUsers() {
  const fetchedUsers = await fetch(`${url}users`);
  const users = await fetchedUsers.json();
  return users;
}

async function fetchPosts(userId) {
  const fetchedPosts = await fetch(`${url}posts?userId=${userId}`);
  const posts = await fetchedPosts.json();
  return posts;
}

async function displayUserAndPosts() {
  try {
    loadingIndicator.style.display = "block";
    const users = await fetchUsers();
    users.forEach(async (user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
      <h2>${user.name}</h2>
      <h3>${user.email}</h3>`;
      usersContainer.append(userDiv);

      try {
        const posts = await fetchPosts(user.id);
        posts.forEach((post) => {
          const userPost = document.createElement("div");
          userPost.classList.add("post");
          userPost.innerHTML = `
          <h2>${post.title}</h2>
          <h3>${post.body}</h3>`;

          userDiv.append(userPost);
        });
      } catch (error) {
        console.log(error);
      }
    });
    loadingIndicator.style.display = "none";
  } catch (err) {
    console.log(err);
  }
}

displayUserAndPosts();
