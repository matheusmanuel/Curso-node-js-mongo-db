const path = require('path');

// __dirname seria a directório actual e completo que o arquivo está EX: C:\Users\Matheus\Documents\curso node.js\modules
// __filename seria o caminho inteiro do arquivo q está sendo executado EX: C:\Users\Matheus\Documents\curso node.js\modules\path.js

// Basename
// Pegar apenas o nome do arquivo
// console.log(path.basename(__filename));

// Pegar apenas o directório ou a pasa onde o arquivo q está sendo executado está
// console.log(path.basename(__dirname));

// Extensão do arquivo
// console.log(path.extname(__filename));

// Criar objecto path q vai 
//conter todas as informações do arquivo passado por parâmetro
// console.log(path.parse(__filename));

// Juntar caminhos de arquivos
/* De uma forma resumida essa método ela
apenas vai juntar os textos q nós passamos  por
parâmetro separado por virgula, e também a cada
virgula ele adiciona uma barra.
*/
console.log(path.join(__dirname,'olá','teste.html'));
console.log(path.join('Matheus','olá'));