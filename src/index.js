const { ApolloServer } = require('apollo-server-express') // To combaine schema and resolver
const express = require('express');
const typeDefs = require('./typeDefs/typeDefs').typeDefs;
const resolvers = require('./resolver/resolver').resolvers;
const { menuLoader } = require('./loaders/menuLoader')();
require('dotenv').config();

const app = express();

async function startServer() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context:()=>({
            menuLoader
        })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startServer();
const portNumber = Number.parseInt(process.env.PORT) || 4000;
app.listen({ port: portNumber }, () =>
    console.log(`🚀 Server ready at http://localhost:${portNumber}`)
);



