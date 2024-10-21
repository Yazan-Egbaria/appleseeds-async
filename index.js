const usersDiv = document.getElementById("users");
const loading = document.getElementById("loading-indicator");
const usersURL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  try {
    loading.style.display = "block";
    const fetchedUsers = await fetch(usersURL);
    const users = await fetchedUsers.json();
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `${user.name}
      ${user.email}`;
      usersDiv.append(userDiv);
      loading.style.display = "none";
    });
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();
