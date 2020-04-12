const { ApolloServer } = require("apollo-server-lambda");
const schema = require("./src/modules");

const server = new ApolloServer({
    schema,
});

exports.graphqlHandler = server.createHandler();
