const express = require('express');
const graphql = require('express-graphql');
const {schema, resolver} = require('./api');

const app = express();


app.use('/graphql', graphql({
    schema,
    rootValue: resolver,
    graphiql: true,
}));

app.listen(4000);