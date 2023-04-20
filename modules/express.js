const express = require("express");
const app = express();
const port = 8080;
const UserModel = require("../src/models/user.model");

app.use(express.json()); //Isso vai avisar pra ele q em todas as nossas requisições nós vamos usr json()

// ejs
app.set('view engine','ejs');
app.set('views','src/views');

app.get('/views/users', async (req,res)=>{
  const users = await UserModel.find({});

  res.render('index',{users});
});

app.use((req,res,next)=>{
  console.log('Request type: '+req.method);
  console.log('Content-type: '+req.headers["content-type"]);
  console.log('Date: ',new Date());
  next();
})

// Buscar usuário pelo id
app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//retornar vários usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Cadastrar novo usuário
app.post("/users", async (req, res) => {
  try {
    const user = UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
  /* o código 201 quer dizer que o cadastro q estamos
  a fazer foi feito com sucesso*/
});

// Editar um usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body,{new: true});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Deletar um usuários
app.delete('/users/:id',async (req,res)=>{
  try{  
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  }catch(error){
    res.status(500).send(error.message);
  }
});
app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
