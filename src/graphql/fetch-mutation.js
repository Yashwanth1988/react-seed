
const fetch = require('isomorphic-fetch');


fetch('http://localhost:4000', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `mutation CreateMessage($input: MessageInput) {
    createMessage(input: $input) {
      id
    }
  }
  `,
  variables: {
    input: {
      author: 'Test',
      content: 'Hello Message updated',
    }
  }
  }),
})
.then(res => { 
    return res.json()
})
.then(res => console.log(res.data));