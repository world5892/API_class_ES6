const http = new EasyHTTP();

// Get users
http.get("https://jsonplaceholder.typicode.com/users111")
.then(data => console.log(data))
.catch(error => console.log(error));

// Post user
const data = {
  name: "John Doe",
  username: "John Doe",
  email: 'jdoe@email.com'
}

// http.post("https://jsonplaceholder.typicode.com/users", data)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// Update post
// http.put("https://jsonplaceholder.typicode.com/users/2", data)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// Delete user
// http.delete("https://jsonplaceholder.typicode.com/users/2")
// .then(() => console.log("Resource deleted..."))
// .catch(error => console.log(error));