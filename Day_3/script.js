
function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            displayUsers(data);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

function displayUsers(users) {
    const usersDiv = document.getElementById("users");

    users.forEach((user) => {
        usersDiv.innerHTML += `
      <div class="user">
        <h3>${user.username}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Company: ${user.company.name}</p>
      </div>
    `;
    });
}



async function getUsersAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        displayUsers(data);
    } catch (error) {
        console.log("Async Error:", error);
    }
}

getUsersAsync();


function getStudent() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const student = {
                name: "maher",
                email: "maheratef600@gmail.com",
                image_url: "https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"
            };

            const success = true;

            if (success) {
                resolve(student);
            } else {
                reject("Failed to load student!");
            }

        }, 3000);

    });
}



const studentDiv = document.getElementById("student");

getStudent()

    .then((student) => {

        studentDiv.innerHTML = `
      <h3>${student.name}</h3>
      <p>${student.email}</p>
    `;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(student.image_url);
            }, 3000);
        });

    })

    .then((image) => {

        studentDiv.innerHTML += `
      <img src="${image}">
    `;

    })

    .catch((error) => {
        studentDiv.innerHTML = `
      <p style="color:red">${error}</p>
    `;
    });