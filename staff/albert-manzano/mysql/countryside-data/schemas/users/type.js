let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
} = require('graphql');

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        surname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        rol: {
            type: GraphQLString, defaultValue: 'costumer'
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            type: new GraphQLNonNull(GraphQLFloat)
        }

    }
});