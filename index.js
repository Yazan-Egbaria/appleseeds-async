const usersDiv = document.getElementById("users");
const errorDiv = document.getElementById("error");
const url = "https://jsonplaceholder.typicode.com";

async function fetchUsers() {
  try {
    const users = await fetch(`${url}/users`);
    console.log(users);
    if (users.ok) {
      const data = await users.json();
      data.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `
              <h2>${user.name}</h2>
              <h3>${user.email}</h3>`;
        usersDiv.append(userDiv);
      });
    } else {
      errorDiv.innerHTML = "Network response was not ok";
    }
  } catch (error) {
    errorDiv.innerHTML = error;
  }
}

fetchUsers();
