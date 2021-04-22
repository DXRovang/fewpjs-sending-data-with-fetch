
function submitData(name, email){
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

  return fetch("http://localhost:3000/users", configObj)
    .then(r=> r.json())
    .then(function(obj){
      document.body.innerText = obj.id
    })
}