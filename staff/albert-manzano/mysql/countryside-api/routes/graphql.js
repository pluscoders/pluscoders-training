const {graphqlHTTP} = require('express-graphql')
const router = require('express').Router()
const util = require('countryside-commons')
const schema = require('countryside-data')

router.get('/', graphqlHTTP({
    schema
}))

router.post('/', graphqlHTTP({
    schema,
    graphiql: false
}))

module.exports = router