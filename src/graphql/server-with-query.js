const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields: 'title' and 'author'.
  type Book {
    title: String
    author: String
  }

  type Record {
    recordname: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books (author: String): [Book],
    records: [Record]
  }
   
  type Mutation {
    setMessage(message: String): String
  }

  type Query {
    getMessage: String
  }

  

`;

var fakeDatabase = {};
var root = {
  setMessage: (message) => {
    console.log('message', message);
    fakeDatabase.message = message;
    return message;
  },
  getMessage: () => {
    return fakeDatabase.message;
  }
};


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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: (parent, args) => {
          console.log('args-->', args);
          return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(books.filter(book => book.author === args.author));
                    //resolve(books);
                }, 5000);
          })
      },
      records: () => {
          return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(records);
                }, 5000);
          })
      },
    },
  };


  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, rootValue: root });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});