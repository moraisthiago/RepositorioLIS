let nome = " Severino da Silva Cavalcante ";
console.log(nome.length);
nome = nome.trim();
console.log(nome.length);
console.log(nome);

let divisaoNome = nome.split(" ");
console.log(divisaoNome);
let primeiroNome = divisaoNome[0];
console.log(primeiroNome);
let sobrenome = nome.slice(primeiroNome.length+1, nome.length);
console.log(sobrenome);
