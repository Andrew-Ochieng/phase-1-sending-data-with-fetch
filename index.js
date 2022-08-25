// Add your code here
// post test
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
// fetch("http://localhost:3000/dogs", configurationObject);


// handling form data
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });



// challenge

function submitData(userName, userEmail) {
    const dataSubmit = {
        name: userName,
        email: userEmail,
    };
    
    
    const methodObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dataSubmit),
    };

    return fetch('http://localhost:3000/users', methodObj)
    .then(response => response.json())
    .then(users => {
        const newUserId = document.createElement('h1');
        const body = document.querySelector('body');
        newUserId.textContent = users.id;
        body.appendChild(newUserId);
        console.log(users);
    })
    .catch(function (error) {
     document.body.innerHTML = error.message
    })
}

submitData();








