async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
getUsers();

async function Users(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",

    })
}