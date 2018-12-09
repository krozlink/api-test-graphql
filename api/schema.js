var { buildSchema } = require('graphql');


var schema = buildSchema(`
  type Query {
    user(id: String!): User
  }

  type User {
    id: String
    first_name: String
    last_name: String
    title: String
    date_of_birth: Int
  }

`);

module.exports = schema;