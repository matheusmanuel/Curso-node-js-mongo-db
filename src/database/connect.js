// essa função vai ser assincrona porque vai retorar uma promisse

const mongoose = require("mongoose");
const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.376cyew.mongodb.net/?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.error(
      "Ocorreu um erro ao se conectar com o banco de dados: ",
      error
    );
    throw error;
  }
};

module.exports = connectToDatabase;
