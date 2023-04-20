// const {Person} = require('./person');
// const person = new Person('Matheus');
// console.log(person.saveMyName());

const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = require('./src/database/connect');

connectToDatabase();
// require('./modules/http');
require('./modules/express');