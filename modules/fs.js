const fs = require('fs');
const path = require('path');

// Criar uma pasta
// fs.mkdir(path.join(__dirname,"test"),(error)=>{
//     if(error){
//         return console.log("Erro: ",error);
//     }
//     console.log("Pasta criada com sucesso");
// })

// Criar um arquivo(Caso conter algum conteúdo no arquivo ele vai apagar tudo e vai escrever de novo);
fs.writeFile(path.join(__dirname,'test','info.txt'),'Hello node!',(error)=>{
    if(error){
     return console.log("Erro: ",error);
    }
    console.log("Arquivo criado com sucesso!");
});

// Adicionar conteúdo a um arquivo
fs.appendFile(path.join(__dirname,'test','info.txt'),'Texto adicionado com fs',(error)=>{
    if(error){
        return console.log("erro: ",error);
    } 

    console.log("Conteúdo adiconado no arquivo");
});

// Ler arquivo(caminho do arquivo,código q o arquivo usa, callback de erro + a data(q vai ser o conteúdo do arquivo))
fs.readFile(path.join(__dirname,'test','info.txt'),'utf-8',(error,data)=>{
    if(error){
        return console.log("Erro: ",error);
    }
    console.log(data);
});