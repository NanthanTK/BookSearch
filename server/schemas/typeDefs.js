const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: [String]
        description: String!
        BookId: String!
        image: String
        link: String
        title: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {        
        # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
        me: User
    }

    type Mutation {        
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String], description: String!, BookId: String!, image: String, link: String, title: String!): User
        removeBook(bookId: String): User
    }
`;

module.exports = typeDefs;