import {makeExecutableSchema} from "graphql-tools";
import {GraphQLSchema} from "graphql";
import 'graphql-import-node';
import {schemas} from "./schema";
import resolvers from "./resolvers/resolversMap";

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: schemas,
    resolvers
});