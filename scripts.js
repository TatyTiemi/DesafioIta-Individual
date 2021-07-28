function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var rg = document.getElementById("rg");
    var sexo = document.getElementById("sexo").checked;
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var cep = document.getElementById("cep");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado").checked;
    var telefone_fixo = document.getElementById("telefone_fixo");
    var telefone_celular = document.getElementById("celular");
  
    if (nome.value == "") {
      alert("Nome não informado");
      nome.focus();
      return;
    }
    if (cpf.value == "") {
        console.log = document.getElementById('cpf')
        function validarCpf(Objcpf){
            var cpf = Objcpf.value;
            exp = /\.|\-/g
            cpf = cpf.toString().replace( exp, "" ); 
            var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
            var soma1=0, soma2=0;
            var vlr =11;
    
            for(i=0;i<9;i++){
                    soma1+=eval(cpf.charAt(i)*(vlr-1));
                    soma2+=eval(cpf.charAt(i)*vlr);
                    vlr--;
            }       
            soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
            soma2=(((soma2+(2*soma1))*10)%11);
    
            var digitoGerado=(soma1*10)+soma2;
            if(digitoGerado!=digitoDigitado)        
                    alert('CPF Inválido!');         
    }
        cpf.focus();
        return;
    }
    if (rg.value == "") {
        console.log = document.getElementById('rg');
        
        function validarRg(Objrg){
            var rg = Objrg.value;
            exp = /\.|\-/g
            rg = rg.toString().replace( exp, "" ); 
            var digitoDigitado = eval(rg.charAt(9)+rg.charAt(10));
            var soma1=0, soma2=0;
            var vlr =11;
    
            for(i=0;i<9;i++){
                    soma1+=eval(rg.charAt(i)*(vlr-1));
                    soma2+=eval(rg.charAt(i)*vlr);
                    vlr--;
            }       
            soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
            soma2=(((soma2+(2*soma1))*10)%11);
    
            var digitoGerado=(soma1*10)+soma2;
            if(digitoGerado!=digitoDigitado)        
                    alert('RG Inválido!'); 
      rg.focus();
      return;
    }
    if (sexo.value == "") {
      alert("Sexo não informada");
      sexo.focus();
      return;
    }
    if (endereco.value == "") {
      alert("Endereco não informada");
      endereco.focus();
      return;
    }
    if (numero.value == "") {
        alert("Numero não informada");
        numero.focus();
        return;
    }        
    if (cep.value == "") {
    function validarCep(cep){
        exp = /\d{5}\-\d{3}/
        if(!exp.test(cep.value))
            alert('Número de Cep Inválido!'); 
    } 
        numero.focus();
        return;
    }               
    if (cidade.value == "") {
      alert("Cidade não informada");
      cidade.focus();
      return;
    }
    if (estado.value == "") {
        alert("Estado não informado");
        estado.focus();
        return;
    }
    if (telefone_fixo.value == "") {
    function validarTelefonefixo(tel){
        exp = /\(\d{2}\)\ \d{4}\-\d{4}/
        if(!exp.test(tel.value))
                alert('Número de Telefone Fixo Inválido!');
    }   estado.focus();
        return;
    }
    if (telefone_celular.value == "") {
        function validarTelefonecelular(tel){
            exp = /\(\d{2}\)\ \d{4}\-\d{4}/
            if(!exp.test(tel.value))
                    alert('Número de Telefone Celular Inválido!');
        }   estado.focus();
            return;
        }
    alert("Formulário enviado!");
    }
}