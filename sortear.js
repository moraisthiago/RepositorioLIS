let matriculas = [202013810029, 202013810014, 202013810005 ,202013810018, 202013810003, 202013810007, 202013810043, 202013810010, 202013810035, 202013810016, 202013810026, 202013810004, 202013810008, 202013810009, 202013810033, 202013810032, 202013810020, 202013810040, 202013810028, 202013810006]

function sortear()
{
  var p = document.createElement("p");
  p.setAttribute('id', 'matricula');
  var textNode = document.createTextNode(matriculas[Math.floor(Math.random() * (20 - 0) + 0)]);
  p.appendChild(textNode);
  p1 = document.getElementById('matricula')
  document.getElementById('body').replaceChild(p, p1);

}
console.log(matriculas[Math.floor(Math.random() * (20 - 0) + 0)]);
