const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    input MessageInput {
      content: String
      author: String
    }

    type Message {
      id: ID!
      content: String
      author: String
    }

    type Query {
      getMessage(id: ID!): Message
    }

    type Mutation {
      createMessage(input: MessageInput): Message
      updateMessage(id: ID!, input: MessageInput): Message
    }
`;

var fakeDatabase = {};

const books = [
  {
    title: 'What is life',
    author: 'Dev Dale',
  },
  {
    title: 'Wuthering Heights',
    author: 'Darlene Cargerlen',
  },
];


const records = [
  {
    recordname: 'Lab Record 1',
    author: 'James',
  },
  {
    recordname: 'Technical Record 2',
    author: 'William',
  },
];

class Message {
  constructor(id, {content, author}) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}


var fakeDatabase = {};
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
   Query: {
    getMessage: (a, args) => {
      const { id } = args
      if (!fakeDatabase[id]) {
        throw new Error('no message exists with id ' + id);
      }
      return new Message(id, fakeDatabase[id]);
    },
  },
    Mutation: {
    createMessage: (a,args,c) => {
      // Create a random id for our "database".
      //var id = require('crypto').randomBytes(10).toString('hex');
      const { input } = args;
      const id = Math.floor(Math.random() * 100) + 1
      fakeDatabase[id] = input;
      return new Message(id, input);
    },
    updateMessage: (parent, args) => {
      const { id, input } = args;
      if (!fakeDatabase[id]) {
        throw new Error('no message exists with id ' + id);
      }
      // This replaces all old data, but some apps might want partial update.
      fakeDatabase[id] = input;
      return new Message(id, input);
    }
  }
  
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});