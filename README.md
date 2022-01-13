# react-seed
this is a basic setup required for react app, with ESLint validations

To run it.
-------------
First build your app by npm run build - (changes are being watched with webpack --watch).
And then start you app by npm run start - (will trigger the server at port 3000, this is an express server)


# Graph QL Notes and Links

apollo , graph QL, mutations, - AWS
FC code base - take a look, for expand of widgets,
 modify layout, settings pop to change the widget data points
 update team calender with leaves
 out of office email - 
 cancel or reject meeting those days
 graphql - querying and mutations
 layout builder - in react


Schema:
The GraphQL schema outlines the categories or type that the data can be split into. It also defines what information will be contained in each type. Think of this as a blueprint to display the architecture of your database.

Queries:
Once your data has been mapped out, you need a way to fetch it. GraphQL queries request data by following an input route to the data endpoint. The returned information is called a payload.


https://www.apollographql.com/docs/apollo-server/data/resolvers/

const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return users.find(user => user.id === args.id);
    }
  }
}

A resolver can optionally accept four positional arguments: (parent, args, context, info).

Mutations
While queries let you fetch data, mutations let you create, update, or delete server-side data. You can think of mutations as the GraphQL equivalent of POST from REST API.

The ! here means that this field cannot hold the value of null. In other words, each user must have an id and email, but name is optional.

Subscriptions read more on 
https://www.apollographql.com/docs/react/data/subscriptions/
 

https://www.apollographql.com/blog/graphql/examples/4-simple-ways-to-call-a-graphql-api/

Fetch example - mutation & inputs in query
https://graphql.org/graphql-js/mutations-and-input-types/

mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
  }
}

Mutation and input types
https://graphql.org/graphql-js/mutations-and-input-types/

https://www.educative.io/blog/graphql-tutorial

https://graphql.org/learn/schema/

Usage - querying, fetching, mutations ( creating, updating )

query {
  getMessage(id: 37) {
    id
  }
}


mutation {
  createMessage(input: {
    author: "andy",
    content: "hope is a good thing",
  }) {
    id
  }
}

mutation {
  updateMessage(id: 93, input: {
    author: "andy",
    content: "hope is a good thing changed",
  }) {
    id
	content
  }
}

