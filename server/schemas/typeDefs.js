// import the gql tagged template function
const { gql } = require("apollo-server-express");
const typeDefs = gql`
type User {}
type Book {}
type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(bookName: String!): Book
  }`;
// export the typeDefs
module.exports = typeDefs;

// getSingleUser, createUser, login, saveBook, deleteBook
