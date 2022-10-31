function submitData(userName, userEmail){
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const data = {
        name: userName, 
        email: userEmail
}
const config = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        accept: 'application/json'
    },
    body: JSON.stringify(data),
}
return fetch('http://localhost:3000/users', config)
.then(function (response) {
    return response.json();
  })
  .then(function (res) {
    li.innerHTML = 'Id' + res.id
    ul.appendChild(li)
  })
  .catch(function (error) {
   let h3 = document.createElement('h3')
   h3.innerHTML = error.message
   document.body.appendChild(h3)
  });
}
submitData('zaid', 'almuflahi')