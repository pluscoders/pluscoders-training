const { GraphQLObjectType } = require('graphql')
const UserMutations = require('./users/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addUser: UserMutations.addUser,
        updateUser: UserMutations.updateUser
    }
})