const { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLFloat } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const User = require("./User")

// Defines the queries
module.exports = {
    users: {
        type: new GraphQLList(type),
        args: {
            name: {
                type: GraphQLString
            },
            surname: {
                type: GraphQLString
            },
            rol: {
                type: GraphQLString
            },
            password: {
                type: GraphQLString
            },
            age: {
                type: GraphQLFloat
            }
        },
        resolve: User.findMatching.bind(User)
    },
    user: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: User.getByID.bind(User)
    }
}