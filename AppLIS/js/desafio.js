let nome = " Severino da Silva Cavalcante de Oliveira ";
console.log(nome.length);
nome = nome.trim();
console.log(nome.length);
console.log(nome);

let divisaoNome = nome.split(" ");
console.log(divisaoNome);

let primeiroNome = divisaoNome[0];
console.log(primeiroNome);

// Sobrenome - Forma 1
let sobrenome = nome.slice(primeiroNome.length+1, nome.length);
console.log(sobrenome);

// Sobrenome - Forma 2
sobrenome = ""
for (let i = 1; i < divisaoNome.length; i++){
  sobrenome += divisaoNome[i] + " "
}
console.log(sobrenome);
