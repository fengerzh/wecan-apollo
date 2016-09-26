import express from 'express';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import bodyParser from 'body-parser';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});
const PORT = 3000;
const endpointURL = '/grahpql';

const app = express();

app.use(endpointURL, bodyParser.json(), apolloExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL }));

app.listen(PORT);
