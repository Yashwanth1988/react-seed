
const fetch = require('isomorphic-fetch');


fetch('http://localhost:4000', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `
    query {
        records {
            author 
        },
        books (author: "Dev Dale") {
            title
        }
    }` 
  }),
})
.then(res => res.json())
.then(res => console.log(res.data));