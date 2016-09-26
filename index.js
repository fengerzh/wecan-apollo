import express from 'express';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';

import Schema from './data/schema';
import Resolvers from './data/resolvers';

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  // connectors: Connectors,
});

const PORT = 3000;
const endpointURL = '/grahpql';

const app = express();

app.use(endpointURL, bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {}, //at least(!) an empty object
}));
app.use('/graphiql', graphiqlExpress({ endpointURL }));

app.listen(PORT);
