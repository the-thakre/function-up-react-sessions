// Import Axios
const axios = require('axios');

// to use axios in a folder
// 1. npm init -y  # This initializes a package.json file if you don't have one
// 2. npm install axios



// SINGLE POST
// GET
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));



{/* ===================================================================================================*/ }



// CREATE NEW POST
// POST
// const postData = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
// };
// axios.post('https://jsonplaceholder.typicode.com/posts', postData)
//     .then(response => console.log(response.data))
//     .catch(error => console.error('Error:', error));



{/* ===================================================================================================*/ }




// ALL POSTS
// GET
// const userId = 1;
// axios.get('https://jsonplaceholder.typicode.com/posts', {
//     params: {
//         userId: userId
//     }
// })
//     .then(response => console.log(response.data))
//     .catch(error => console.error('Error:', error));



{/* ===================================================================================================*/ }




// Handling Headers:
// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
// };



{/* ===================================================================================================*/ }




// PUT
// axios.get('https://jsonplaceholder.typicode.com/posts', { headers })
//     .then(response => console.log(response.data))
//     .catch(error => console.error('Error:', error));




{/* ===================================================================================================*/ }




// DELETE
// axios.get('https://jsonplaceholder.typicode.com/nonexistent-endpoint')
//     .then(response => console.log(response.data))
//     .catch(error => {
//         if (error.response) {
//             console.error('Response Error:', error.response.data);
//         } else if (error.request) {
//             console.error('Request Error:', error.request);
//         } else {
//             console.error('Error:', error.message);
//         }
//     });



{/* ===================================================================================================*/ }



// const updatedData = {
//     title: 'Updated Title',
//     body: 'Updated Body'
// };

// axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedData)
//     .then(response => console.log(response.data))
//     .catch(error => console.error('Error:', error));



{/* ===================================================================================================*/ }



// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => console.log(response.data))
//     .catch(error => console.error('Error:', error));