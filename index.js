
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
  .then(function(r){
    return r.json();
  })
  .then(function(obj){
   let b = document.getElementsByTagName('body')[0]
   let h = document.createElement('h1')
   h.innerText = obj.id
   b.append(h)
  })
}