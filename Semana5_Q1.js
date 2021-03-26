function createList(quantidade, texto)
{
  for (var i = 1; i <= quantidade; i++)
  {
    var node = document.createElement("LI");
    var textNode = document.createTextNode(texto + " " + i);
    node.appendChild(textNode);
    document.getElementById("lista").appendChild(node);
  }
}

createList(7, "Item")
