import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import animeSchema from "./anime";
import { type } from "os";

const typeDefs = mergeTypeDefs([animeSchema.typeDefs])
const resolvers = mergeResolvers([animeSchema.resolvers])

const schema = {
    typeDefs,
    resolvers
}

export default schema