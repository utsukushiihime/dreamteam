import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  tracing: true, // TODO for testing only remove before deployment
});
