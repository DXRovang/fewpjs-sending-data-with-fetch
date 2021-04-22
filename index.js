// Add your code here

let newData = {
  name: name,
  email: email
};

let configObj = {
  method: "POST", 
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(newData)
}

function submitData(name, email){
  return fetch("http://localhost:3000/users", configObj)
}