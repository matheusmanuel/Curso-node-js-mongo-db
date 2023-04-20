const mongoose = require('mongoose');

// Aqui nós vai criar o esqueleto ai do úsuario(suas informações(o que ele vai ter))

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    }
});

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;