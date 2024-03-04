// SINGLE POST
// GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// ALL POSTS
// GET
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// ADD/POST NEW POST
// POST 
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// UPDATE/MODIFY NEW POST
// PUT 
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// DELETE A POST
// DELETE  
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// });



{/* ===================================================================================================*/ }



// GET POST BY USER ID
// GET
// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// GET COMMENTS
// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     .then((response) => response.json())
//     .then((json) => console.log(json));




{/* ===================================================================================================*/ }