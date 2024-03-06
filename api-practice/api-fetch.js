// SINGLE POST
// GET

// fetch async fun
// promise return by every async fun

// fetch('https://jsonplaceholder.typicode.com/posts/1') //path param
//     .then((response) => response.json())
//     .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// ALL POSTS
// GET
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// ADD/POST NEW POST
// POST 

let newPost = {
    title: 'Api session',
    body: 'bar jajsklksal;  ',
    userId: 1,
}

console.log(newPost);
console.log(JSON.stringify(newPost));

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
})
    .then((response) => response.json())
    .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// UPDATE/MODIFY NEW POST
// PUT 
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo jnsajkksa',
//         body: 'bar samsasj',
//         userId: 3,
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
// }).then(resp => resp.json()).then(data => console.log(data));


{/* ===================================================================================================*/ }



// GET POST BY USER ID
// GET
// fetch('https://jsonplaceholder.typicode.com/posts?userId=2') //queryParams
//     .then((response) => response.json())
//     .then((json) => console.log(json));



{/* ===================================================================================================*/ }



// GET COMMENTS
fetch('https://jsonplaceholder.typicode.com/posts/100/comments')
    .then((response) => response.json())
    .then((json) => console.log(json));




{/* ===================================================================================================*/ }