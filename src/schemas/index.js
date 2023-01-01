const { GraphQLSchema, GraphQLObjectType } = require("graphql");
// @ts-ignore
const { testQueries } = require("./test");

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: "The root query.",
        fields: () => ({
            ...testQueries
        })
    })
});