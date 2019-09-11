/*
    * npm install express -save
    * npm install nodemon --save-dev
    * npm install graphql express-graphql --save
    * npm install lodash --save
*/

const express = require('express');
const expressGraphQl = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQl({
    // options
    schema,
    graphiql: true

})); // Request'ler bu adrese

app.listen(5000, () => {
    console.log('running');
});