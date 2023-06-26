const { ApolloServer } = require('apollo-server-express') // To combaine schema and resolver
const express = require('express');
const typeDefs = require('./typeDefs/typeDefs').typeDefs;
const resolvers = require('./resolver/resolver').resolvers;

const app = express();

async function startServer() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startServer();

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000`)
);



