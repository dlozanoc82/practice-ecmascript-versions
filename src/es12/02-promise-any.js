const primise1 = new Promise((resolve, reject) =>reject("Reject"));
const primise2 = new Promise((resolve, reject) =>resolve("Resolve"));
const primise3 = new Promise((resolve, reject) =>resolve("Resolve 2"));

Promise.any([primise1, primise2, primise3])
    .then(response => console.log(response))
