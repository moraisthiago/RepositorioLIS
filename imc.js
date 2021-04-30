function imc()
{
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    let imcValor = (peso / (altura*altura)).toFixed(1);
    
    let homem = document.getElementById('masculino').checked;
    let mulher = document.getElementById('feminino').checked;

    if (altura == '' || peso == '' || (homem == false && mulher == false))
    {
        alert('Preencha todos os campos!')
    }
    
    else
    {
        if (homem == true)
        {
            
            if (imcValor < 20.7)
            {
                resultado.textContent = 'Abaixo do Peso';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-warning bg-warning text-white');
            }
        
            else if (imcValor < 26.4)
            {
                resultado.textContent = 'Peso Normal';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-sucess bg-success text-white');
            }
            
            else if (imcValor < 27.8)
            {
                resultado.textContent = 'Marginalmente Acima do Peso';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-warning bg-warning text-white');
            }
            
            else if (imcValor < 31.1)
            {
                resultado.textContent = 'Acima do Peso Ideal';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-warning bg-warning text-white');
            }
            
            else
            {
                resultado.textContent = 'Obeso';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-danger bg-danger text-white');
            }
        }
    
        else
        {
            if (imcValor < 19.1)
            {
                resultado.textContent = 'Abaixo do Peso';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-warning bg-warning text-white');
            }
            
            else if (imcValor < 25.8)
            {
                resultado.textContent = 'Peso Normal';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-sucess bg-success text-white');
            }
            
            else if (imcValor < 27.3)
            {
                resultado.textContent = 'Marginalmente Acima do Peso';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-warning bg-warning text-white');
            }
            
            else if (imcValor < 32.3)
            {
                resultado.textContent = 'Acima do Peso Ideal';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-warning bg-warning text-white');
            }
            
            else
            {
                resultado.textContent = 'Obeso';
                resultado.setAttribute('class','form-group form-control form-control-lg border border-danger bg-danger text-white');
            }
        }

    }
        
}
