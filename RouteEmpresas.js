function SearchEmpresas(nome){
    // console.log("Buscando empresas com o nome: " + nome);
    // nomes = [ 'Google', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube', 'Reddit', 'Snapchat', 'Pinterest', 'Tumblr' ];
    
    nomes = [
        {
            "nome": "Google",
            "cnpj": "12.345.678/0001-90",
            "endereco": "Av. Paulista, 1000, São Paulo, SP",
            "telefone": "(11) 1234-5678",
        },
        {
            "nome": "Facebook",
            "cnpj": "23.456.789/0001-01",
            "endereco": "Av. Faria Lima, 2000, São Paulo, SP",
            "telefone": "(11) 2345-6789",
        },
        {
            "nome": "Twitter",
            "cnpj": "34.567.890/0001-12",
            "endereco": "Av. Brigadeiro Faria Lima, 3000, São Paulo, SP",
            "telefone": "(11) 3456-7890",
        }
    ]
    
    return nomes;
}

module.exports = { SearchEmpresas} ;