const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = require("graphql");

module.exports = {
    Test: new GraphQLObjectType({
        name: "Test",
        fields: () => {
            return {
                message: {
                    type: GraphQLNonNull(GraphQLString),
                    description: "Test message"
                }
            };
        }
    })
};